import Loader from '@/components/ui/Loader'
import { supabase } from '@/supabase/client'
import type { incomeRegister } from '@/types'
import { useEffect, useState } from 'react'

type Options = {
	year: 'numeric'
	month: 'long'
	day: 'numeric'
	hour: 'numeric'
	minute: 'numeric'
	second: 'numeric'
}

export function IncomeOverview({ id }: { id: string }) {
	const [register, setRegister] = useState<incomeRegister>()
	const [createdAt, setCreatedAt] = useState('')

	const getRegister = async () => {
		try {
			const { data, error } = await supabase.from('incomes').select('*').eq('id', id)

			if (error) console.error('error')

			if (data) {
				setRegister(data[0])
				setCreatedAt(dateFormatter(data[0].created_at))
			}
		} catch (error) {
			console.log(error)
		}
	}

	const dateFormatter = (date: string) => {
		const fecha = new Date(date)

		const formatterOptions: Options = {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric'
		}
		const formatter = new Intl.DateTimeFormat('es-ES', formatterOptions)
		return formatter.format(fecha)
	}

	useEffect(() => {
		getRegister()
	}, [])

	return (
		<>
			{register ? (
				<div>
					<div className='px-4 sm:px-0'>
						<h3 className='text-3xl font-semibold leading-7 text-darkGray'>
							{register.client_name}
						</h3>
						<p className='mt-1 max-w-2xl leading-6 text-gray-500'>
							Fecha de creación: {createdAt}
						</p>
					</div>
					<div className='mt-6 border-t border-mediumGray'>
						<dl className='divide-y divide-mediumGray'>
							<div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
								<dt className=' font-medium leading-6 text-gray-900'>Email</dt>
								<dd className='mt-1  leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
									{register.client_email}
								</dd>
							</div>
							<div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
								<dt className=' font-medium leading-6 text-gray-900'>
									Fecha de realización
								</dt>
								<dd className='mt-1  leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
									{register.date}
								</dd>
							</div>
							<div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
								<dt className=' font-medium leading-6 text-gray-900'>Descripción</dt>
								<dd className='mt-1  leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
									{register.description}
								</dd>
							</div>
							<div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
								<dt className=' font-medium leading-6 text-gray-900'>
									Cantidad en Dolares
								</dt>
								<dd className='mt-1  leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
									${register.dollar_amount}
								</dd>
							</div>
							<div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
								<dt className=' font-medium leading-6 text-gray-900'>
									Cantidad en Pesos
								</dt>
								<dd className='mt-1  leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
									${register.pesos_amount}
								</dd>
							</div>
						</dl>
					</div>
				</div>
			) : (
				<Loader />
			)}
		</>
	)
}
