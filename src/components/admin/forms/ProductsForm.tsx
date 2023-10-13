import { useState } from 'react'
import { supabase } from '../../../supabase/client'
import { ProductsSchema } from '../../../utils/schemas'
/* react hook forms */
import { useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
/* components */
import ButtonForm from '../../form/ButtonForm'
import InputErrorMessage from '../../form/InputErrorMessage'
import { Toaster, toast } from 'sonner'
import { IconCircleX } from '../../icons/ReactIcons'

type Schema = z.infer<typeof ProductsSchema>

export default function ProductsForm() {
	// const [slug, setSlug] = useState('')

	const {
		handleSubmit,
		register,
		reset,
		watch,
		formState: { errors }
	} = useForm<Schema>({
		resolver: zodResolver(ProductsSchema)
	})

	const slugify = (text: string) => {
		return text
			.toString()
			.toLowerCase()
			.trim()
			.replace(/\s+/g, '-')
			.replace(/[^\w-]+/g, '')
	}

	const handleFormSubmit: SubmitHandler<Schema> = async ({
		name,
		collection,
		price,
		image_url_1,
		image_url_2,
		description
	}) => {
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
			toast(`${error.message}`, {
				icon: <IconCircleX />
			})
		} else {
			toast.success('Producto agregado exitosamente')
			reset()
		}
	}

	return (
		<>
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
							className='bg-[#171717] outline-none opacity-50 focus:opacity-100 border border-mediumGray py-2 px-3 rounded-lg'
							{...register('image_url_1', { required: true })}
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
							className='bg-[#171717] outline-none opacity-50 focus:opacity-100 border border-mediumGray py-2 px-3 rounded-lg'
							{...register('image_url_2', { required: true })}
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
							className='bg-[#171717] outline-none opacity-50 focus:opacity-100 border border-mediumGray py-2 px-3 rounded-lg'
							{...register('name', { required: true })}
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
							{...register('collection', { required: true })}
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
							type='number'
							className='bg-[#171717] outline-none opacity-50 focus:opacity-100 border border-mediumGray py-2 px-3 rounded-lg'
							{...register('price', { required: true })}
						/>
						{errors.price && <InputErrorMessage message={errors.price?.message} />}
					</div>
					<div className='flex flex-col gap-y-2 text-left relative'>
						<label htmlFor='slug' className='text-grayText'>
							slug
						</label>
						<input
							type='text'
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
							className='bg-[#171717] outline-none opacity-50 focus:opacity-100 border border-mediumGray py-2 px-3 rounded-lg resize-none'
							{...register('description', { required: true })}
						></textarea>
						{errors.description && (
							<InputErrorMessage message={errors.description?.message} />
						)}
					</div>
				</div>
				<ButtonForm text='Agregar Producto' />
			</form>
			<Toaster theme='dark' position='top-right' richColors />
		</>
	)
}
