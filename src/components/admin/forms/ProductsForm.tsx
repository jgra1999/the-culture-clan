import type { Database } from '../../../types/supabase'
import { useEffect, useState } from 'react'
import { supabase } from '../../../supabase/client'
import { ProductsSchema } from '../../../utils/schemas'
import { slugify } from '../../../utils/slugify'
/* react hook forms */
import { useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
/* components */
import ButtonForm from '../../form/ButtonForm'
import InputErrorMessage from '../../form/InputErrorMessage'
import { Toaster, toast } from 'sonner'
import ErrorToast from '../../toasts/ErrorToast'
import SuccessToast from '../../toasts/SuccessToast'

type Schema = z.infer<typeof ProductsSchema>

type Props = {
	edit: boolean
	id: string
}

export default function ProductsForm({ edit, id }: Props) {
	const [product, setProduct] =
		useState<Database['public']['Tables']['products']['Row']>()

	const {
		handleSubmit,
		register,
		reset,
		setValue,
		watch,
		formState: { errors }
	} = useForm<Schema>({
		resolver: zodResolver(ProductsSchema)
	})

	if (edit) {
		const getProductData = async () => {
			const { data, error } = await supabase
				.from('products')
				.select('*')
				.eq('id', id)

			if (error) console.log(error)

			if (data) setProduct(data[0])
		}

		useEffect(() => {
			getProductData()
		}, [])
	}

	const handleFormSubmit: SubmitHandler<Schema> = async ({
		name,
		collection,
		price,
		image_url_1,
		image_url_2,
		description
	}) => {
		if (edit) {
			const { data, error } = await supabase
				.from('products')
				.update({
					collection,
					name,
					price: +price,
					image_url_1,
					image_url_2,
					description,
					slug: slugify(name)
				})
				.eq('id', id)

			if (error) toast(<ErrorToast message={error?.message} />)
			toast(<SuccessToast message='Producto editado' />)
		} else {
			const { data, error } = await supabase.from('products').insert({
				collection,
				name,
				price: +price,
				image_url_1,
				image_url_2,
				description,
				slug: slugify(name)
			})
			if (error) {
				toast(<ErrorToast message={error.message} />)
			} else {
				toast(<SuccessToast message='Producto agregado' />)
				reset()
			}
		}
	}

	return (
		<>
			{edit && (
				<button
					className='text-grayText hover:text-white'
					onClick={() => {
						setValue('image_url_1', product?.image_url_1)
						setValue('image_url_2', product?.image_url_2)
						setValue('name', product?.name)
						setValue('collection', product?.collection)
						setValue('price', product?.price.toString())
						setValue('description', product?.description)
					}}
				>
					Insertar valores actuales
				</button>
			)}
			<form
				onSubmit={handleSubmit(handleFormSubmit)}
				className='flex flex-col gap-y-8'
			>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 '>
					<div className='flex flex-col gap-y-2 text-left relative'>
						<img
							src={watch('image_url_1') ? watch('image_url_1') : ''}
							alt=''
							className='rounded w-54'
						/>
						<label htmlFor='image_url_1' className='text-grayText'>
							Imagen Frontal
						</label>
						<input
							type='text'
							placeholder={product ? product.image_url_1 : ''}
							className='bg-[#171717] outline-none opacity-50 focus:opacity-100 border border-mediumGray py-2 px-3 rounded-lg'
							{...register('image_url_1')}
						/>
						{errors.image_url_1 && (
							<InputErrorMessage message={errors.image_url_1?.message} />
						)}
					</div>
					<div className='flex flex-col  gap-y-2 text-left relative'>
						<img
							src={watch('image_url_2') ? watch('image_url_2') : ''}
							alt=''
							className='rounded w-54'
						/>
						<label htmlFor='image_url_2' className='text-grayText'>
							Imagen Trasera
						</label>
						<input
							type='text'
							placeholder={product ? product.image_url_2 : ''}
							className='bg-[#171717] outline-none opacity-50 focus:opacity-100 border border-mediumGray py-2 px-3 rounded-lg'
							{...register('image_url_2')}
						/>
						{errors.image_url_2 && (
							<InputErrorMessage message={errors.image_url_2?.message} />
						)}
					</div>
					<div className='flex flex-col gap-y-2 text-left relative'>
						<label htmlFor='name' className='text-grayText'>
							Nombre
						</label>
						<input
							type='text'
							placeholder={product ? product.name : ''}
							className='bg-[#171717] outline-none opacity-50 focus:opacity-100 border border-mediumGray py-2 px-3 rounded-lg'
							{...register('name')}
						/>
						{errors.name && <InputErrorMessage message={errors.name?.message} />}
					</div>
					<div className='flex flex-col gap-y-2 text-left relative'>
						<label htmlFor='collection' className='text-grayText'>
							Colección
						</label>
						<select
							id='collection'
							className='bg-[#171717] outline-none opacity-50 focus:opacity-100 border border-mediumGray py-2.5 px-3 rounded-lg'
							{...register('collection')}
						>
							<option value=''>Seleccionar</option>
							<option value='New Culture'>New Culture</option>
							<option value='Rap Culture'>Rap Culture</option>
							<option value='Pop Culture'>Pop Culture</option>
							<option value='Urban Culture'>Urban Culture</option>
						</select>
						{errors.collection && (
							<InputErrorMessage message={errors.collection?.message} />
						)}
					</div>
					<div className='flex flex-col gap-y-2 text-left relative'>
						<label htmlFor='price' className='text-grayText'>
							Precio
						</label>
						<input
							type='text'
							placeholder={product ? product.price.toString() : ''}
							className='bg-[#171717] outline-none opacity-50 focus:opacity-100 border border-mediumGray py-2 px-3 rounded-lg'
							{...register('price')}
						/>
						{errors.price && <InputErrorMessage message={errors.price?.message} />}
					</div>
					<div className='flex flex-col gap-y-2 text-left relative'>
						<label htmlFor='slug' className='text-grayText'>
							slug
						</label>
						<input
							type='text'
							placeholder={product ? product.slug : ''}
							value={watch('name') ? slugify(watch('name')) : ''}
							readOnly
							className='bg-[#171717] outline-none opacity-50 focus:opacity-100 border border-mediumGray py-2 px-3 rounded-lg'
						/>
					</div>
					<div className='flex flex-col text-left gap-y-2 md:col-span-2 relative'>
						<label htmlFor='description' className='text-grayText'>
							Descripción
						</label>
						<textarea
							rows={5}
							placeholder={product ? product.description : ''}
							className='bg-[#171717] outline-none opacity-50 focus:opacity-100 border border-mediumGray py-2 px-3 rounded-lg resize-none'
							{...register('description')}
						></textarea>
						{errors.description && (
							<InputErrorMessage message={errors.description?.message} />
						)}
					</div>
				</div>
				<ButtonForm text={edit ? 'Editar Producto' : 'Agregar Producto'} />
			</form>
			<Toaster theme='dark' position='top-right' />
		</>
	)
}
