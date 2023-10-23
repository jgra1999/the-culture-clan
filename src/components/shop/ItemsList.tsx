import { useEffect, useState } from 'react'
import { supabase } from '../../supabase/client'
import type { Database } from '../../types/supabase'
import ItemCard from './ItemCard'
import Loader from '../Loader'
import { IconChevronDown } from '../icons/ReactIcons'

export default function ItemsList() {
	const [items, setItems] = useState<
		Database['public']['Tables']['products']['Row'][] | null
	>()
	const [loading, setLoading] = useState(false)
	const [collection, setCollection] = useState('')

	const fetchItems = async () => {
		try {
			setLoading(true)

			let query = supabase.from('products').select('*')

			if (collection) query = query.eq('collection', collection)

			const { data, error } = await query
			setItems(data)
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}

	const handleCollectionFilter = (e: any) => {
		setCollection(e.target.value)
	}

	useEffect(() => {
		fetchItems()
	}, [collection])

	return (
		<>
			<div className='text-lightGray flex justify-between sm:justify-normal items-center w-full pt-5 text-sm font-medium gap-x-4'>
				<select name='' id='' className='bg-transparent'>
					<option className='bg-darkGray hover:bg-mediumGray' value=''>
						Más Recientes
					</option>
					<option className='bg-darkGray outline-none' value=''>
						Más Populares
					</option>
					<option className='bg-darkGray outline-none' value=''>
						Más Vendidas
					</option>
				</select>
				<select name='' id='' className='bg-transparent'>
					<option value=''>Precio</option>
				</select>
				<div>
					<button
						id='dropdownNavbarLink'
						data-dropdown-toggle='dropdownNavbar'
						className='flex items-center justify-between w-full py-2 pl-3 pr-4 opacity-60 hover:opacity-100'
					>
						Colección
						<IconChevronDown />
					</button>
					<div
						id='dropdownNavbar'
						className='z-10 hidden bg-darkGray divide-lightGray rounded-lg shadow w-44'
					>
						<ul className='py-2 text-sm' aria-labelledby='dropdownLargeButton'>
							<li>
								<button
									onClick={handleCollectionFilter}
									className='block px-4 py-2 opacity-50 hover:opacity-100'
									value=''
								>
									Todas
								</button>
							</li>
							<li>
								<button
									onClick={handleCollectionFilter}
									className='block px-4 py-2 opacity-50 hover:opacity-100'
									value='New Culture'
								>
									New Culture
								</button>
							</li>
							<li>
								<button
									onClick={handleCollectionFilter}
									className='block px-4 py-2 opacity-50 hover:opacity-100'
									value='Rap Culture'
								>
									Rap Culture
								</button>
							</li>
							<li>
								<button
									onClick={handleCollectionFilter}
									className='block px-4 py-2 opacity-50 hover:opacity-100'
									value='Pop Culture'
								>
									Pop Culture
								</button>
							</li>
							<li>
								<button
									onClick={handleCollectionFilter}
									className='block px-4 py-2 opacity-50 hover:opacity-100'
									value='Pop Urban'
								>
									Urban Culture
								</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<section className='mt-10 md:mt-20 mb-10 relative'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
					{items?.map((item: Database['public']['Tables']['products']['Row']) => (
						<ItemCard
							key={item.id}
							id={item.id}
							name={item.name}
							image_url_2={item.image_url_2}
							price={item.price}
							likes={item.likes}
							slug={item.slug}
						/>
					))}
				</div>
				{loading && <Loader />}
			</section>
		</>
	)
}
