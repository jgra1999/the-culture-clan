import { useEffect, useState } from 'react'
import { supabase } from '@/supabase/client'
import type { Products } from '@/types'
import ItemCard from './ItemCard'

export function Carousel({ orderBy }: { orderBy: string }) {
	const [items, setItems] = useState<Products[] | null>()

	const fetchItems = async () => {
		try {
			// setLoading(true)

			let query = supabase
				.from('inventory')
				.select('*')
				.order(orderBy, { ascending: false })
				.range(0, 2)

			// if (collection) query = query.eq('collection', collection)

			const { data, error } = await query

			console.log(data)
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
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12 gap-8'>
			{items?.map((item) => (
				<ItemCard
					name={item.name}
					price={item.dollar_price}
					collection={item.collection}
					image_url={item.image_url}
				/>
			))}
		</div>
	)
}
