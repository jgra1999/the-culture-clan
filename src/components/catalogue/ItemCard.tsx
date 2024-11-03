import React from 'react'

interface Props {
	name: string
	price: number
	collection: string
	image_url: string
}

export function ItemCard({ name, price, collection, image_url }: Props) {
	return (
		<div className='flex flex-col gap-y-4 group mb-12'>
			<img src={image_url} className='rounded-2xl w-full' alt='' loading='lazy' />
			<div className='text-left'>
				<div className='flex justify-between items-center font-bold text-lg relative'>
					<h4>{name}</h4>
					<div>
						<span className='group-hover:opacity-0 transition-opacity duration-300'>
							{price}
						</span>
						{/* <AddToCartButton otherStyles='absolute min-w-[250px] right-0 top-0 opacity-0 group-hover:opacity-100 '/> */}
					</div>
				</div>
				<h5 className='font-semibold text-zinc-400'>{collection}</h5>
			</div>
			{/* <AddToCartButton otherStyles='lg:hidden'/> */}
		</div>
	)
}
