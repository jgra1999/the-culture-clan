import { useEffect, useState } from 'react'
/* supabase */
import { supabase } from '../../supabase/client'
import type { Database } from '../../types/supabase'
/* icons */
import { IconBrandWhatsapp } from '../icons/ReactIcons'
/* componente */
import QRModal from './QRModal'
import SizeOption from './SizeOption'
import Loader from '../Loader'
import LikeButton from './LikeButton'
import DisLikeButton from './DisLikeButton'
import AddWishListButton from './AddWishListButton'
import { Toaster } from 'sonner'

export default function ItemOverview({ slug }: { slug: string }) {
	const [item, setItem] = useState<Database['public']['Tables']['products']['Row']>()
	const [loading, setLoading] = useState(false)

	const getItem = async () => {
		try {
			setLoading(true)
			const { data, error } = await supabase
				.from('products')
				.select('*')
				.eq('slug', slug)
			if (data) {
				setItem(data[0])
			}
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}

	const [itemImage, setItemImage] = useState<string | undefined>('')

	useEffect(() => {
		getItem()
	}, [])

	return (
		<>
			<div className='grid lg:grid-cols-2 gap-y-5 md:gap-x-10 relative'>
				<div className='flex flex-col gap-y-4'>
					<img
						src={itemImage ? itemImage : item?.image_url_2}
						alt={`Franela-${item?.name}`}
						className='aspect-auto w-full rounded-lg'
						style={{ viewTransitionName: `book-${item?.id}` }}
					/>
					<div className='flex items-center xl:hidden gap-x-5'>
						<button onClick={() => setItemImage(item?.image_url_1)}>
							<img
								src={item?.image_url_1}
								alt={`Franela-${item?.name}`}
								className='aspect-[445/668] w-36 rounded-lg'
							/>
						</button>
						<button onClick={() => setItemImage(item?.image_url_2)}>
							<img
								src={item?.image_url_2}
								alt={`Franela-${item?.name}`}
								className='aspect-[445/668] w-36 rounded-lg'
							/>
						</button>
					</div>
				</div>

				{/* Info del producto */}
				{loading ? (
					''
				) : (
					<div className='flex flex-col gap-y-10 md:gap-y-10 '>
						<div className='space-y-4'>
							<h2 className='text-2xl lg:text-4xl xl:text-5xl font-medium'>
								{item?.name}
							</h2>
							<p className='text-xl lg:text-4xl xl:text-5xl'>${item?.price}</p>

							<p className='text-grayText text-sm sm:text-base font-medium'>
								{item?.description}
							</p>
						</div>

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

						{/* Botón y Likes */}
						<div className='flex flex-col sm:flex-row sm:items-center gap-5'>
							{/* TODO: cambiar qr de este modal */}
							<QRModal>
								<IconBrandWhatsapp />
							</QRModal>

							<a
								href='https://wa.link/phwrwn'
								className='flex items-center justify-center gap-x-1 border-2 border-white py-3 px-4 rounded text-sm md:text-base opacity-50 hover:opacity-100 max-w-[300px] lg:hidden'
							>
								<IconBrandWhatsapp />
								Consultar Disponibilidad
							</a>

							<div className='flex items-end gap-x-4 divide-mediumGray'>
								<AddWishListButton id={item ? item.id : ''} />
								<LikeButton currentLikes={item?.likes} id={item ? item.id : ''} />
								<DisLikeButton
									currentDislikes={item?.dislikes}
									id={item ? item?.id : ''}
								/>
							</div>
						</div>

						<div className='space-y-5'>
							<div>
								<p className='text-lg'>Fabricación</p>
								<ul className='list-disc text-grayText text-sm sm:text-base font-medium pl-4 mt-2 space-y-1'>
									<li>Producción en Colombia</li>
									<li>100% Algodón</li>
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
									<li>Lávalo con amor</li>
								</ul>
							</div>
						</div>
						<div className='hidden xl:flex items-center gap-x-5'>
							<button onClick={() => setItemImage(item?.image_url_1)}>
								<img
									src={item?.image_url_1}
									alt={`Franela-${item?.name}`}
									className='aspect-[445/668] w-36 rounded-lg'
								/>
							</button>
							<button onClick={() => setItemImage(item?.image_url_2)}>
								<img
									src={item?.image_url_2}
									alt={`Franela-${item?.name}`}
									className='aspect-[445/668] w-36 rounded-lg'
								/>
							</button>
						</div>
					</div>
				)}
				{loading && <Loader />}
			</div>
			<Toaster position='top-right' theme='dark' />
		</>
	)
}
