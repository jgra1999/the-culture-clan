import { useEffect, useState } from 'react'
import { supabase } from '../../../supabase/client'
import type { Database } from '../../../types/supabase'

export default function ProductDesc({ id }: { id: string }) {
	const [product, setProduct] =
		useState<Database['public']['Tables']['products']['Row']>()
	const getProduct = async () => {
		let { data, error } = await supabase.from('products').select('*').eq('id', id)

		if (data) setProduct(data[0])
	}

	useEffect(() => {
		getProduct()
	})
	return (
		<div>
			<div className='px-4 sm:px-0'>
				<h3 className='text-2xl font-semibold leading-7'>{product?.name}</h3>
				<p className='mt-1 max-w-2xl text-sm leading-6 text-grayText'>
					{product?.collection}
				</p>
			</div>
			<div className='mt-6 border-t border-mediumGray'>
				<dl className='divide-y divide-mediumGray'>
					<div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
						<dt className='text-sm font-medium leading-6 '>Imagen Frontal</dt>
						<dd className='mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0'>
							<img src={product?.image_url_1} alt='' className='h-20' />
						</dd>
					</div>
					<div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
						<dt className='text-sm font-medium leading-6 '>Imagen Trasera</dt>
						<dd className='mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0'>
							<img src={product?.image_url_2} alt='' className='h-20' />
						</dd>
					</div>
					<div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
						<dt className='text-sm font-medium leading-6'>Precio</dt>
						<dd className='mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0'>
							${product?.price}
						</dd>
					</div>
					<div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
						<dt className='text-sm font-medium leading-6'>Likes | Dislikes</dt>
						<dd className='mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0'>
							{product?.likes} | {product?.dislikes}
						</dd>
					</div>
					<div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 border-b-2 border-mediumGray'>
						<dt className='text-sm font-medium leading-6'>Descripción</dt>
						<dd className='mt-1 text-sm leading-6 sm:col-span-2 sm:mt-0'>
							{product?.description}
						</dd>
					</div>
				</dl>
			</div>
		</div>
	)
}
