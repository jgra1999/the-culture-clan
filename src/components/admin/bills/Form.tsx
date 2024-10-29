import { useEffect, useState } from 'react'

/* libraries */
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'
import { supabase } from '@/supabase/client'
/* components */
import ErrorToast from '@/components/ui/toasts/ErrorToast'
import SuccessToast from '@/components/ui/toasts/SuccessToast'
// import { slugify } from '@/utils-slugify'
import SubmitButton from '@/components/ui/forms/SubmitButton'

export function BillsForm({ id }: { id?: string }) {
	const [register, setRegister] = useState({
		title: '',
		description: '',
		dollar_amount: 0,
		pesos_amount: 0,
		date: ''
	})

	if (id) {
		const getRegisterData = async () => {
			const { data, error } = await supabase.from('bills').select('*').eq('id', id)

			if (error) console.log(error)

			if (data) {
				setRegister(data[0])
			}
		}

		useEffect(() => {
			getRegisterData()
		}, [])
	}

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target
		setRegister({ ...register, [name]: value })
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const { title, description, pesos_amount, date } = register

		if (id) {
			const { data, error } = await supabase
				.from('bills')
				.update({
					title,
					description,
					dollar_amount: Math.round(register.pesos_amount / 4000),
					pesos_amount,
					date
				})
				.eq('id', id)

			if (error) {
				toast.custom(<ErrorToast message={error?.message} />)
			} else {
				toast.custom(<SuccessToast message='Registro editado' />)
				setInterval(() => {
					window.location.replace('/admin/gastos')
				}, 1000)
			}
		} else {
			const { data, error } = await supabase.from('bills').insert([
				{
					title,
					description,
					dollar_amount: Math.round(register.pesos_amount / 4000),
					pesos_amount,
					date
				}
			])
			if (error) {
				toast.custom(<ErrorToast message={error.message} />)
			} else {
				toast.custom(<SuccessToast message='Gasto registrado' />)
				setInterval(() => {
					window.location.replace('/admin/gastos')
				}, 1000)
			}
		}
	}

	return (
		<>
			<form onSubmit={handleSubmit} className='flex flex-col gap-y-8'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 '>
					<div className='flex flex-col gap-y-2 text-left relative'>
						<div className='flex flex-col gap-y-2 text-left relative'>
							<label htmlFor='title' className='text-grayText'>
								Titulo
							</label>
							<input
								type='text'
								name='title'
								onChange={handleChange}
								value={register ? register.title : ''}
								className='bg-lightGray outline-none opacity-75 focus:opacity-100 border border-mediumGray py-2 px-3 rounded-lg'
							/>
						</div>
					</div>
					<div className='flex flex-col gap-y-2 text-left relative'>
						<label htmlFor='date' className='text-grayText'>
							Fecha
						</label>
						<input
							type='date'
							name='date'
							onChange={handleChange}
							value={register ? register.date : ''}
							className='bg-lightGray outline-none opacity-75 focus:opacity-100 border border-mediumGray py-2 px-3 rounded-lg'
						/>
					</div>

					<div className='flex flex-col gap-y-2 text-left relative'>
						<label htmlFor='pesos_amount' className='text-grayText'>
							Cantidad (Pesos)
						</label>
						<input
							type='number'
							step={0.01}
							name='pesos_amount'
							onChange={handleChange}
							value={register ? register.pesos_amount : ''}
							className='bg-lightGray outline-none opacity-75 focus:opacity-100 border border-mediumGray py-2 px-3 rounded-lg'
						/>
					</div>

					<div className='flex flex-col gap-y-2 text-left relative'>
						<label htmlFor='dollar_amount' className='text-grayText'>
							Cantidad (Dolares)
						</label>
						<input
							type='number'
							step={0.01}
							name='dollar_amount'
							onChange={handleChange}
							value={register ? Math.round(register.pesos_amount / 4000) : ''}
							className='bg-lightGray outline-none opacity-75 focus:opacity-100 border border-mediumGray py-2 px-3 rounded-lg'
						/>
					</div>

					<div className='flex flex-col text-left gap-y-2 md:col-span-2 relative'>
						<label htmlFor='description' className='text-grayText'>
							Descripción
						</label>
						<textarea
							rows={5}
							value={register ? register.description : ''}
							name='description'
							onChange={handleChange}
							className='bg-lightGray outline-none opacity-75 focus:opacity-100 border border-mediumGray py-2 px-3 rounded-lg resize-none'
						></textarea>
					</div>
				</div>
				<SubmitButton text={id ? 'Actualizar Registro' : 'Agregar Registro'} />
			</form>
			<Toaster />
		</>
	)
}
