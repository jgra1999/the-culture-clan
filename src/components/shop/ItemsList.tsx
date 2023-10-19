import { useEffect, useState } from 'react'
import { supabase } from '../../supabase/client'
import type { Database } from '../../types/supabase'
import ItemCard from './ItemCard'

export default function ItemsList() {
	const [items, setItems] = useState<
		Database['public']['Tables']['products']['Row'][] | null
	>()

	const fetchItems = async () => {
		try {
			const { data, error } = await supabase.from('products').select('*')
			setItems(data)
			console.log(items)
		} catch (error) {
			console.log(error)
		} finally {
		}
	}

	useEffect(() => {
		fetchItems()
	}, [])

	return (
		<section className='mt-10 md:mt-20 mb-10'>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
				{items?.map((item: Database['public']['Tables']['products']['Row']) => (
					<ItemCard
						key={item.id}
						id={item.id}
						name={item.name}
						image_url_1={item.image_url_1}
						price={item.price}
						likes={item.likes}
						slug={item.slug}
					/>
				))}
			</div>
		</section>
	)
}
