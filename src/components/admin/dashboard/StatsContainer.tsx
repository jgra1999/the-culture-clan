import { supabase } from '@/supabase/client'
import { StatsCard } from './StatsCard'
import { useEffect, useState } from 'react'

export default function StatsContainer() {
	const [currentMoney, setCurrentMoney] = useState(0)
	const [currentIncomes, setCurrentIncomes] = useState(0)
	const [currentBills, setCurrentBills] = useState(0)
	const [currentStock, setCurrentStock] = useState(0)

	const moneyFormatter = (amount: number) => {
		const formatter = new Intl.NumberFormat('es-ES')
		const formattedTotal = formatter.format(amount)

		return formattedTotal
	}

	const fetchIncomes = async () => {
		try {
			const { data, error } = await supabase.from('income').select('pesos_amount')
			if (error) throw error

			if (data) {
				const total = data.reduce((acc, register) => {
					return acc + register.pesos_amount
				}, 0)

				setCurrentIncomes(total)

				setCurrentMoney(total)
			}
		} catch (error) {
			console.error(error)
		}
	}

	const fetchBills = async () => {
		try {
			const { data, error } = await supabase.from('bills').select('pesos_amount')
			if (error) throw error

			if (data) {
				const total = data.reduce((acc, register) => {
					return acc + register.pesos_amount
				}, 0)

				setCurrentBills(total)
			}
		} catch (error) {
			console.error(error)
		}
	}

	const fetchInventoryData = async () => {
		const { data: stock, error } = await supabase.from('inventory').select('stock')

		if (error) throw error

		if (stock) {
			const total = stock.reduce((acc, register) => {
				return acc + register.stock
			}, 0)

			setCurrentStock(total)
		}
	}

	useEffect(() => {
		fetchIncomes()
		fetchBills()
		fetchInventoryData()
	}, [])

	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
			<StatsCard
				title='Fondos'
				stats={moneyFormatter(currentMoney - currentBills)}
				tableUrl='/admin/ingresos'
			/>
			<StatsCard
				title='Ingresos'
				stats={moneyFormatter(currentIncomes)}
				tableUrl='/admin/ingresos'
			/>
			<StatsCard
				title='Gastos'
				stats={moneyFormatter(currentBills)}
				tableUrl='/admin/ingresos'
			/>

			<StatsCard title='Stock' stats={currentStock} tableUrl='/admin/ingresos' />
		</div>
	)
}
