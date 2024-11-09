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

export function DTFForm({ id }: { id?: string }) {
	const [DTF, setDTF] = useState({
		design_name: '',
		collection: '',
		stock: 0
	})

	if (id) {
		const getDTFData = async () => {
			const { data, error } = await supabase.from('dtfs').select('*').eq('id', id)

			if (error) console.log(error)

			if (data) {
				setDTF(data[0])
			}
		}

		useEffect(() => {
			getDTFData()
		}, [])
	}

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target
		setDTF({ ...DTF, [name]: value })
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const { design_name, collection, stock } = DTF

		if (id) {
			const { data, error } = await supabase
				.from('dtfs')
				.update({
					design_name,
					collection,
					stock
				})
				.eq('id', id)

			if (error) {
				toast.custom(<ErrorToast message={error?.message} />)
			} else {
				toast.custom(<SuccessToast message='DTF actualizada' />)
				setInterval(() => {
					window.location.replace('/admin/dtfs')
				}, 1000)
			}
		} else {
			const { data, error } = await supabase.from('dtfs').insert([
				{
					design_name,
					collection,
					stock
				}
			])
			if (error) {
				toast.custom(<ErrorToast message={error.message} />)
			} else {
				toast.custom(<SuccessToast message='Franela registrada' />)
				setInterval(() => {
					window.location.replace('/admin/dtfs')
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
							<label htmlFor='design_name' className='text-grayText'>
								Diseño
							</label>
							<input
								type='text'
								name='design_name'
								onChange={handleChange}
								value={DTF ? DTF.design_name : ''}
								className='bg-lightGray outline-none opacity-75 focus:opacity-100 border border-mediumGray py-2 px-3 rounded-lg'
							/>
						</div>
					</div>
					<div className='flex flex-col gap-y-2 text-left relative'>
						<label htmlFor='collection' className='text-grayText'>
							Colección
						</label>
						<select
							id='collection'
							className='bg-lightGray outline-none opacity-75 focus:opacity-100 border border-mediumGray py-2.5 px-3 rounded-lg'
							name='collection'
							onChange={handleChange}
							value={DTF ? DTF.collection : ''}
						>
							<option value=''>Seleccionar</option>
							<option value='New Culture'>New Culture</option>
							<option value='Artist Culture'>Artist Culture</option>
							<option value='Fit Culture'>Fit Culture</option>
							<option value='Padel Culture'>Padel Culture</option>
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
							value={DTF ? DTF.stock : ''}
							className='bg-lightGray outline-none opacity-75 focus:opacity-100 border border-mediumGray py-2 px-3 rounded-lg'
						/>
					</div>
				</div>
				<SubmitButton text={id ? 'Actualizar DTF' : 'Agregar DTF'} />
			</form>
			<Toaster />
		</>
	)
}
