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

export function ShirtForm({ id }: { id?: string }) {
	const [shirt, setShirt] = useState({
		color: '',
		size: '',
		ref: 0,
		stock: 0
	})

	if (id) {
		const getShirtData = async () => {
			const { data, error } = await supabase.from('shirts').select('*').eq('id', id)

			if (error) console.log(error)

			if (data) {
				setShirt(data[0])
			}
		}

		useEffect(() => {
			getShirtData()
		}, [])
	}

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target
		setShirt({ ...shirt, [name]: value })
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const { color, size, ref, stock } = shirt

		if (id) {
			const { data, error } = await supabase
				.from('shirts')
				.update({
					color,
					size,
					ref,
					stock
				})
				.eq('id', id)

			if (error) {
				toast.custom(<ErrorToast message={error?.message} />)
			} else {
				toast.custom(<SuccessToast message='Franela actualizada' />)
				setInterval(() => {
					window.location.replace('/admin/franelas')
				}, 1000)
			}
		} else {
			const { data, error } = await supabase.from('shirts').insert([
				{
					color,
					size,
					ref,
					stock
				}
			])
			if (error) {
				toast.custom(<ErrorToast message={error.message} />)
			} else {
				toast.custom(<SuccessToast message='Franela registrada' />)
				setInterval(() => {
					window.location.replace('/admin/franelas')
				}, 2000)
			}
		}
	}

	return (
		<>
			<form onSubmit={handleSubmit} className='flex flex-col gap-y-8'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 '>
					<div className='flex flex-col gap-y-2 text-left relative'>
						<div className='flex flex-col gap-y-2 text-left relative'>
							<label htmlFor='color' className='text-grayText'>
								Color
							</label>
							<input
								type='text'
								name='color'
								onChange={handleChange}
								value={shirt ? shirt.color : ''}
								className='bg-lightGray outline-none opacity-75 focus:opacity-100 border border-mediumGray py-2 px-3 rounded-lg'
							/>
						</div>
					</div>
					<div className='flex flex-col gap-y-2 text-left relative'>
						<label htmlFor='size' className='text-grayText'>
							Talla
						</label>
						<select
							id='size'
							className='bg-lightGray outline-none opacity-75 focus:opacity-100 border border-mediumGray py-2.5 px-3 rounded-lg'
							name='size'
							onChange={handleChange}
							value={shirt ? shirt.size : ''}
						>
							<option value=''>Seleccionar</option>
							<option value='S'>S</option>
							<option value='M'>M</option>
							<option value='L'>L</option>
							<option value='XL'>XL</option>
						</select>
					</div>

					<div className='flex flex-col gap-y-2 text-left relative'>
						<label htmlFor='ref' className='text-grayText'>
							Referencia
						</label>

						<select
							id='ref'
							className='bg-lightGray outline-none opacity-75 focus:opacity-100 border border-mediumGray py-2.5 px-3 rounded-lg'
							name='ref'
							onChange={handleChange}
							value={shirt ? shirt.ref : ''}
						>
							<option value=''>Seleccionar</option>
							<option value='804308'>804308</option>
							<option value='804310'>804310</option>
						</select>
					</div>

					<div className='flex flex-col gap-y-2 text-left relative'>
						<label htmlFor='stock' className='text-grayText'>
							Stock
						</label>
						<input
							type='number'
							name='stock'
							onChange={handleChange}
							value={shirt ? shirt.stock : ''}
							className='bg-lightGray outline-none opacity-75 focus:opacity-100 border border-mediumGray py-2 px-3 rounded-lg'
						/>
					</div>
				</div>
				<SubmitButton text={id ? 'Actualizar Franela' : 'Agregar Franela'} />
			</form>
			<Toaster />
		</>
	)
}
