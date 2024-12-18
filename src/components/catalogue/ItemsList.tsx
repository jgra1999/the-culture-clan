import { supabase } from '@/supabase/client'
import type { Products } from '@/types'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import OrderByDropDown from './filters/OrderByDropDown'
import CollectionDropDown from './filters/CollectionDropDown'
import { ItemCard } from './ItemCard'
import Loader from '../ui/Loader'
// import CurrencyDropDown from './filters/CurrencyDropDown'

export function ItemsList({ params }: { params?: string }) {
	const [items, setItems] = useState<Products[] | null>()
	const [loading, setLoading] = useState(false)
	let [urlParam, setUrlParam] = useState('')

	/* filters */
	const [collection, setCollection] = useState('')
	const [orderBy, setOrderBy] = useState('created_at')

	/* pagination */
	const [page, setPage] = useState(1)
	const [from, setFrom] = useState(0)
	const [to, setTo] = useState(7)
	const ITEMS_PER_PAGE = 7

	const fetchItems = async () => {
		try {
			setLoading(true)

			let query = supabase.from('inventory').select('*').range(from, to)

			if (collection) query = query.eq('collection', collection)

			const { data, error } = await query.order(orderBy, { ascending: false })
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

	const handleOrderByFilter = (e: any) => {
		setOrderBy(e.target.value)
	}

	const handleCollectionFilter = (e: any) => {
		setCollection('')
		setCollection(e.target.value)

		setFrom(0)
		setTo(7)
		setPage(1)
	}

	const handleUrlParam = () => {
		if (params) {
			if (!urlParam) {
				console.log('no hay urlParam')
				setUrlParam(params)
				setCollection(params)
			} else {
				console.log('No entra')
			}
		}
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
		handleUrlParam()

		fetchItems()
	}, [collection, from, orderBy])

	return (
		<>
			<div className='flex justify-between items-center mt-5 '>
				<div className='text-lightGray flex justify-normal items-center w-full text-sm font-medium gap-x-4'>
					<OrderByDropDown setOrderBy={handleOrderByFilter} />
					<div>
						<CollectionDropDown setCollection={handleCollectionFilter} />
					</div>
					<div>{/* <CurrencyDropDown /> */}</div>
				</div>
				<div className='hidden lg:flex justify-between gap-x-5'>
					<button
						onClick={handlePrevButton}
						className={`p-1.5 flex items-center justify-center border-2 border-white rounded opacity-50 ${
							page === 1 ? '' : 'hover:opacity-100'
						}`}
						disabled={page === 1}
					>
						<ChevronLeftIcon className='w-6 h-6' />
					</button>
					<button
						onClick={handleNextButton}
						className={`p-1.5 flex items-center justify-center border-2 border-white rounded opacity-50 ${
							items && items.length <= 7 ? '' : 'hover:opacity-100'
						}`}
						disabled={items ? items.length <= 7 : false}
					>
						<ChevronRightIcon className='w-6 h-6' />
					</button>
				</div>
			</div>

			<section className='mt-10 md:mt-20 mb-10 relative'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
					{items?.map((item: Products) => (
						<ItemCard
							key={item.id}
							name={item.name}
							price={item.dollar_price}
							collection={item.collection}
							image_url={item.image_url}
						/>
					))}
				</div>

				<div className='flex justify-between mt-10 lg:hidden'>
					<button
						onClick={handlePrevButton}
						className='px-2 py-[7px] flex items-center justify-center border-2 border-white rounded opacity-50 active:opacity-100'
						disabled={page === 1}
					>
						<ChevronLeftIcon className='w-8 h-8' />
					</button>
					{items && items.length > 7 ? (
						<button
							onClick={handleNextButton}
							className='px-2 py-[7px] flex items-center justify-center border-2 border-white rounded opacity-50 active:opacity-100'
							disabled={items ? items.length <= 7 : false}
						>
							<ChevronRightIcon className='w-8 h-8' />
						</button>
					) : (
						''
					)}
				</div>

				{loading && <Loader />}
			</section>
		</>
	)
}
