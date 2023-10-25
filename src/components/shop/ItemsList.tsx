import { useEffect, useState } from 'react'
import { supabase } from '../../supabase/client'
import type { Database } from '../../types/supabase'
import ItemCard from './ItemCard'
import Loader from '../Loader'
import {
	IconChevronDown,
	IconChevronLeft,
	IconChevronRight
} from '../icons/ReactIcons'

export default function ItemsList() {
	const [items, setItems] = useState<
		Database['public']['Tables']['products']['Row'][] | null
	>()
	const [loading, setLoading] = useState(false)
	const [collection, setCollection] = useState('')
	/* pagination */
	const [page, setPage] = useState(1)
	const [from, setFrom] = useState(0)
	const [to, setTo] = useState(7)
	const ITEMS_PER_PAGE = 7

	const fetchItems = async () => {
		try {
			setLoading(true)

			let query = supabase.from('products').select('*').range(from, to)

			if (collection) query = query.eq('collection', collection)

			const { data, error } = await query
			setItems(data)
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			})
		}
	}

	const handleCollectionFilter = (e: any) => {
		setCollection(e.target.value)
	}

	/* pagination handlers */
	const handleNextButton = () => {
		let from = page * ITEMS_PER_PAGE
		let to = from + ITEMS_PER_PAGE

		if (page > 0) {
			from += 1
			to += 1
		}

		setFrom(from)
		setTo(to)
		setPage(page + 1)

		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	const handlePrevButton = () => {
		let oldFrom = from - ITEMS_PER_PAGE
		let oldTo = to - ITEMS_PER_PAGE

		if (page === 2) {
			oldFrom -= 2
			oldTo -= 1
		}

		setFrom(oldFrom)
		setTo(oldTo)
		setPage(page - 1)
	}

	useEffect(() => {
		fetchItems()
	}, [collection, from])

	return (
		<>
			<div className='flex justify-between items-center mt-5 '>
				<div className='text-lightGray flex justify-between sm:justify-normal items-center w-full text-sm font-medium gap-x-4'>
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
										value='Urban Culture'
									>
										Urban Culture
									</button>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='hidden lg:flex justify-between gap-x-5'>
					<button
						onClick={handlePrevButton}
						className={`p-1.5 flex items-center justify-center border-2 border-white rounded opacity-50 ${
							page === 1 ? '' : 'hover:opacity-100'
						}`}
						disabled={page === 1}
					>
						<IconChevronLeft styles='w-6 h-6' />
					</button>
					<button
						onClick={handleNextButton}
						className={`p-1.5 flex items-center justify-center border-2 border-white rounded opacity-50 ${
							items?.length <= 7 ? '' : 'hover:opacity-100'
						}`}
						disabled={items ? items.length <= 7 : false}
					>
						<IconChevronRight styles='w-6 h-6' />
					</button>
				</div>
			</div>
			<section className='mt-10 md:mt-20 mb-10 relative'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
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

				<div className='flex justify-between mt-10 lg:hidden'>
					<button
						onClick={handlePrevButton}
						className='px-2 py-[7px] flex items-center justify-center border-2 border-white rounded opacity-50 active:opacity-100'
						disabled={page === 1}
					>
						<IconChevronLeft styles='w-8 h-8' />
					</button>
					<button
						onClick={handleNextButton}
						className='px-2 py-[7px] flex items-center justify-center border-2 border-white rounded opacity-50 active:opacity-100'
						disabled={items ? items.length <= 7 : false}
					>
						<IconChevronRight styles='w-8 h-8' />
					</button>
				</div>

				{loading && <Loader />}
			</section>
		</>
	)
}
