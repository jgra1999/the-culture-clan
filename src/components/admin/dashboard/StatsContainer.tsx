import { supabase } from '@/supabase/client'
import { StatsCard } from './StatsCard'
import { useEffect, useState } from 'react'

export default function StatsContainer() {
	const [currentIncomes, setCurrentIncomes] = useState(0)
	const fetchIncomes = async () => {
		try {
			const { data, error } = await supabase.from('income').select('pesos_amount')
			if (error) throw error

			if (data) {
				const total = data.reduce((acc, register) => {
					return acc + register.pesos_amount
				}, 0)

				setCurrentIncomes(total)
			}
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		fetchIncomes()
	}, [])

	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
			<StatsCard title='Fondos' stats={currentIncomes} tableUrl='/admin/ingresos' />
			<StatsCard
				title='Ingresos'
				stats={currentIncomes}
				tableUrl='/admin/ingresos'
			/>
			<StatsCard title='Gastos' stats={currentIncomes} tableUrl='/admin/ingresos' />
			<StatsCard
				title='Productos'
				stats={currentIncomes}
				tableUrl='/admin/ingresos'
			/>
			<StatsCard title='Stock' stats={currentIncomes} tableUrl='/admin/ingresos' />
		</div>
	)
}
