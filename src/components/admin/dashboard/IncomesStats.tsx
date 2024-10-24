import { supabase } from '@/supabase/client'
import { useEffect, useState } from 'react'

export function IncomesStats() {
	const [currentIncomes, setCurrentIncomes] = useState(0)
	const fetchIncomes = async () => {
		try {
			const { data, error } = await supabase.from('income').select('pesos_amount')
			if (error) throw error

			if (data) {
				const sumaTotal = data.reduce((acumulador, objeto) => {
					return acumulador + objeto.pesos_amount
				}, 0)

				setCurrentIncomes(sumaTotal)
			}
		} catch (error) {}
	}

	useEffect(() => {
		fetchIncomes()
	}, [])

	return (
		<div className='bg-lightGray p-4 rounded-lg space-y-4'>
			<div className='flex justify-between items-center'>
				<h5 className='text-grayText'>Ingresos</h5>
			</div>
			<div className='flex flex-col gap-y-5'>
				<span className='text-5xl'>${currentIncomes}</span>
				<a className='text-sm font-semibold opacity-50 hover:opacity-100' href='/'>
					Ver tabla
				</a>
			</div>
		</div>
	)
}
