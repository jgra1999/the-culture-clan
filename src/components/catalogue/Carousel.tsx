import { useEffect, useState } from 'react'
import { supabase } from '@/supabase/client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import type { Products } from '@/types'

import { ItemCard } from './ItemCard'

export function Carousel({ orderBy }: { orderBy: string }) {
	const [items, setItems] = useState<Products[] | null>()

	const fetchItems = async () => {
		try {
			// setLoading(true)

			let query = supabase
				.from('inventory')
				.select('*')
				.order(orderBy, { ascending: false })
				.range(0, 8)

			// if (collection) query = query.eq('collection', collection)

			const { data, error } = await query

			setItems(data)
		} catch (error) {
			console.log(error)
		} finally {
			// setLoading(false)
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			})
		}
	}
	useEffect(() => {
		fetchItems()
	}, [])

	return (
		/* className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12 gap-8' */
		<div className='mt-12 max-w-[95vw]'>
			<Swiper
				spaceBetween={32}
				slidesPerView={1}
				breakpoints={{
					768: {
						slidesPerView: 2,
						spaceBetween: 40
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 50
					}
				}}
				pagination={{ clickable: true }}
				modules={[Pagination, Autoplay]}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false
				}}
			>
				{items?.map((item) => (
					<SwiperSlide key={item.id}>
						<ItemCard
							name={item.name}
							price={item.dollar_price}
							collection={item.collection}
							image_url={item.image_url}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
