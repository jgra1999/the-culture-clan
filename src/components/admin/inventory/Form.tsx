import { useEffect, useState } from 'react'
import type { Database } from '@/types/supabase'

/* libraries */
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'
import { supabase } from '@/supabase/client'
/* components */
import ErrorToast from '@/components/ui/toasts/ErrorToast'
import SuccessToast from '@/components/ui/toasts/SuccessToast'
// import { slugify } from '@/utils-slugify'
import SubmitButton from '@/components/ui/forms/SubmitButton'

export function ProductsForm({ id }: { id?: string }) {
	const cloudName = 'df8nnzf8t'
	const preset_key = 'upload_tcc'
	const [product, setProduct] = useState({
		image_url: '',
		name: '',
		collection: '',
		dollar_price: 0,
		pesos_price: 0,
		stock: 0
	})
	const [file, setFile] = useState<File | null>(null)

	if (id) {
		const getProductData = async () => {
			const { data, error } = await supabase
				.from('inventory')
				.select('*')
				.eq('id', id)

			if (error) console.log(error)

			if (data) {
				setProduct(data[0])
				console.log(data)
			}
		}

		useEffect(() => {
			getProductData()
		}, [])
	}

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target
		setProduct({ ...product, [name]: value })
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const imageData = new FormData()

		const { name, collection, dollar_price, pesos_price, image_url } = product

		if (file) {
			const formData = new FormData()
			formData.append('file', file)
			formData.append('upload_preset', preset_key)
			try {
				const res = await axios.post(
					`https://api.cloudinary.com/v1/${cloudName}/upload`,
					formData
				)

				imageData.append('image_url', res.data.secure_url)
			} catch (error) {}
		}

		const img_url = String(imageData.get('image_url'))

		if (id) {
			const { data, error } = await supabase
				.from('products')
				.update({
					collection,
					name,
					dollar_price,
					pesos_price,
					image_url: imageData.get('image_url') ? img_url : image_url
				})
				.eq('id', id)

			if (error) {
				toast.custom(<ErrorToast message={error?.message} />)
			} else {
				toast.custom(<SuccessToast message='Producto editado' />)
				window.location.replace('/admin/productos')
			}
		} else {
			const { data, error } = await supabase.from('inventory').insert([
				{
					collection,
					name,
					dollar_price,
					pesos_price,
					image_url: img_url
				}
			])
			if (error) {
				toast.custom(<ErrorToast message={error.message} />)
			} else {
				toast.custom(<SuccessToast message='Producto agregado' />)
				window.location.replace('/admin/productos')
			}
		}
	}

	return (
		<>
			<form onSubmit={handleSubmit} className='flex flex-col gap-y-8'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 '>
					<div className='flex flex-col gap-y-2 text-left relative'>
						{!file && (
							<img
								src={product?.image_url}
								alt=''
								className='rounded w-54 object-contain'
							/>
						)}
						{file && (
							<img
								src={URL.createObjectURL(file)}
								alt=''
								className='rounded w-54 object-contain'
							/>
						)}
						<span className='font-medium text-grayText'>Imagen 1</span>

						<label className='bg-lightGray outline-none opacity-75 focus:opacity-100 border border-mediumGray py-2 px-3 rounded-lg cursor-pointer'>
							Seleccionar imagen
							<input
								className='hidden w-full text-sm text-grayText border border-mediumGray rounded-lg cursor-pointer focus:outline-none'
								aria-describedby='user_avatar_help'
								type='file'
								name='image_url'
								onChange={(e) => {
									if (e.target.files) {
										setFile(e.target.files[0])
									}
								}}
							/>
						</label>
					</div>

					<div className='flex flex-col gap-y-2 text-left relative'>
						<label htmlFor='name' className='text-grayText'>
							Nombre
						</label>
						<input
							type='text'
							name='name'
							onChange={handleChange}
							value={product ? product.name : ''}
							className='bg-lightGray outline-none opacity-75 focus:opacity-100 border border-mediumGray py-2 px-3 rounded-lg'
						/>
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
							value={product ? product.collection : ''}
						>
							<option value=''>Seleccionar</option>
							<option value='New Culture'>New Culture</option>
							<option value='Music Culture'>Music Culture</option>
							<option value='Fit Culture'>Fit Culture</option>
							<option value='Padel Culture'>Padel Culture</option>
						</select>
					</div>
					<div className='flex flex-col gap-y-2 text-left relative'>
						<label htmlFor='name' className='text-grayText'>
							Stock
						</label>
						<input
							type='number'
							name='stock'
							onChange={handleChange}
							value={product ? product.stock : ''}
							className='bg-lightGray outline-none opacity-75 focus:opacity-100 border border-mediumGray py-2 px-3 rounded-lg'
						/>
					</div>

					<div className='flex flex-col gap-y-2 text-left relative'>
						<label htmlFor='price' className='text-grayText'>
							Precio en Dolares
						</label>
						<input
							type='number'
							step={0.01}
							name='price'
							onChange={handleChange}
							value={product ? product.dollar_price : ''}
							className='bg-lightGray outline-none opacity-75 focus:opacity-100 border border-mediumGray py-2 px-3 rounded-lg'
						/>
					</div>
					<div className='flex flex-col gap-y-2 text-left relative'>
						<label htmlFor='slug' className='text-grayText'>
							Precio en Pesos
						</label>
						<input
							type='number'
							step={0.01}
							name='price'
							onChange={handleChange}
							value={product ? product.dollar_price : ''}
							className='bg-lightGray outline-none opacity-75 focus:opacity-100 border border-mediumGray py-2 px-3 rounded-lg'
						/>
					</div>
					{/* TODO: Agregar input para ingresar la referencia del producto */}
					<div className='flex flex-col text-left gap-y-2 md:col-span-2 relative'>
						<label htmlFor='description' className='text-grayText'>
							Descripción
						</label>
						<textarea
							rows={5}
							name='description'
							onChange={handleChange}
							className='bg-lightGray outline-none opacity-75 focus:opacity-100 border border-mediumGray py-2 px-3 rounded-lg resize-none'
						></textarea>
					</div>
				</div>
				<SubmitButton text={id ? 'Actualizar Producto' : 'Agregar Producto'} />
			</form>
			<Toaster />
		</>
	)
}
