import { useEffect, useState } from 'react'
/* supabase */
import { supabase } from '../../supabase/client'
import type { Database } from '../../types/supabase'
/* icons */
import { IconBrandWhatsapp, IconThumbDown, IconThumbUp } from '../icons/ReactIcons'
/* componente */
import QRModal from './QRModal'
import SizeOption from './SizeOption'

export default function ItemOverview({ slug }: { slug: string }) {
	const [item, setItem] = useState<Database['public']['Tables']['products']['Row']>()

	const getItem = async () => {
		const { data, error } = await supabase
			.from('products')
			.select('*')
			.eq('slug', slug)
		if (data) setItem(data[0])
	}

	const [itemImage, setItemImage] = useState<string | undefined>('')

	useEffect(() => {
		getItem()
	}, [])

	return (
		<>
			<div className='grid lg:grid-cols-2 gap-y-4 md:gap-x-10'>
				<div className='flex flex-col gap-y-4'>
					<img
						src={itemImage ? itemImage : item?.image_url_2}
						alt={`Franela-${item?.name}`}
						className='aspect-[445/668] w-full rounded-lg'
						style={{ viewTransitionName: `book-${item?.id}` }}
					/>
					<div className='flex items-center gap-x-5'>
						<button onClick={() => setItemImage(item?.image_url_1)}>
							<img
								src={item?.image_url_1}
								alt={`Franela-${item?.name}`}
								className='aspect-[445/668] w-36 rounded-lg'
								style={{ viewTransitionName: `book-${item?.id}` }}
							/>
						</button>
						<button onClick={() => setItemImage(item?.image_url_2)}>
							<img
								src={item?.image_url_2}
								alt={`Franela-${item?.name}`}
								className='aspect-[445/668] w-36 rounded-lg'
								style={{ viewTransitionName: `book-${item?.id}` }}
							/>
						</button>
					</div>
				</div>

				{/* Info del producto */}
				<div className='flex flex-col gap-y-4 '>
					<div className='space-y-2'>
						<h2 className='text-2xl md:text-5xl font-medium'>{item?.name}</h2>
						<p className='text-xl md:text-5xl md:font-light'>${item?.price}</p>
					</div>

					<p className='text-grayText text-sm sm:text-base font-medium'>
						{item?.description}
					</p>

					{/* tallas */}
					<div className='space-y-2'>
						<p className='text-lg'>Tallas</p>
						<div className='flex gap-x-5'>
							<SizeOption size='XS' />
							<SizeOption size='S' />
							<SizeOption size='M' />
							<SizeOption size='L' />
							<SizeOption size='XL' />
						</div>
					</div>

					{/* Boton y Likes */}
					<div className='flex'>
						<QRModal>
							<IconBrandWhatsapp />
						</QRModal>

						<a
							href='https://wa.link/phwrwn'
							className='flex items-center justify-center gap-x-1 border-2 border-white py-3 px-4 rounded text-sm md:text-base opacity-50 hover:opacity-100 min-w-[70%] lg:hidden'
						>
							<IconBrandWhatsapp />
							Consultar Disponibilidad
						</a>

						<div className='flex items-center gap-x-2 divide-x-2 divide-mediumGray py-2 px-4'>
							<div className='flex gap-x-1 items-center'>
								<IconThumbUp />
								{item?.likes}
							</div>
							<div className='pl-2'>
								<IconThumbDown />
							</div>
						</div>
					</div>

					<div>
						<p className='text-lg'>Fabricación</p>
						<ul className='list-disc text-grayText text-sm sm:text-base font-medium pl-4 mt-2 space-y-1'>
							<li>Producción en Colombia</li>
							<li>100% Algodon</li>
							<li>Diseños impresos con DTF</li>
							<li>Hecho con amor</li>
						</ul>
					</div>

					<div>
						<p className='text-lg'>Cuidado</p>
						<ul className='list-disc text-grayText text-sm sm:text-base font-medium pl-4 mt-2 space-y-1'>
							<li>Utiliza un detergente suave</li>
							<li>Lava las franelas del revés</li>
							<li>Opta por el secado al aire</li>
							<li>Lavalo con amor</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}
