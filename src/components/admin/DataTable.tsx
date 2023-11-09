import { useEffect, useState } from 'react'
import { supabase } from '../../supabase/client'
import type { Database } from '../../types/supabase'
/* icons */
import {
	OpenEyeIcon,
	PencilIcon,
	TrashIcon,
	IconChevronRight,
	IconChevronLeft
} from '../icons/ReactIcons'
/* components */
import { Toaster, toast } from 'sonner'
import SuccessToast from '../toasts/SuccessToast'
import ErrorToast from '../toasts/ErrorToast'

export default function DataTable({ headers }: { headers: string[] }) {
	const [products, setProducts] = useState<any>([])
	const [page, setPage] = useState(1)
	const [from, setFrom] = useState(0)
	const [to, setTo] = useState(4)
	const ITEMS_PER_PAGE = 4

	const fetchData = async () => {
		const { data, error } = await supabase
			.from('products')
			.select('id, name, collection, image_url_1, price, likes, slug')
			.range(from, to)

		setProducts(data)
	}

	const deleteProduct = async (id: string) => {
		const { error } = await supabase.from('products').delete().eq('id', id)
		if (error) {
			toast(<ErrorToast message='No se pudo eliminar el producto' />)
		} else {
			toast(<SuccessToast message='Producto eliminado correctamente' />)
		}
	}

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
		fetchData()
	}, [from, to])

	return (
		<>
			<table className='w-full text-sm text-left text-grayText'>
				<thead className='text-xs text-grayText uppercase bg-darkGray'>
					<tr>
						{headers.map((header, index) => (
							<th scope='col' className='px-6 py-3' key={index}>
								{header}
							</th>
						))}
						<th scope='col' className='px-6 py-3'>
							<span className='sr-only'>Acciones</span>
						</th>
					</tr>
				</thead>
				<tbody>
					{products.map(
						(product: Database['public']['Tables']['products']['Row']) => (
							<tr
								key={product.id}
								className='border-b border-mediumGray bg-[#131313]'
							>
								<th
									scope='row'
									className='px-6 py-4 font-medium whitespace-nowrap text-white flex gap-x-2 items-center'
								>
									<img src={product.image_url_1} className='w-10 h-14' alt='' />
									<span>{product.name}</span>
								</th>
								<td className='px-6 py-4'>{product.collection}</td>
								<td className='px-6 py-4'>{product.likes}</td>
								<td className='px-6 py-4'>${product.price}</td>
								<td className='px-6 py-4'>
									<div className='flex gap-x-1 justify-end'>
										<a href={`/admin/productos/ver-producto/${product.id}`}>
											<OpenEyeIcon styles='opacity-70 hover:opacity-100' />
										</a>
										<a href={`/admin/productos/editar-producto/${product.id}`}>
											<PencilIcon />
										</a>
										<button onClick={() => deleteProduct(product.id)}>
											<TrashIcon />
										</button>
									</div>
								</td>
							</tr>
						)
					)}
				</tbody>
			</table>
			<div className='flex justify-between mt-5'>
				<button
					onClick={handlePrevButton}
					className='flex p-4 opacity-50 hover:opacity-100'
					disabled={page === 1}
				>
					<IconChevronLeft />
					Anterior
				</button>

				<button
					onClick={handleNextButton}
					className='flex p-4 opacity-50 hover:opacity-100'
					disabled={products.length < 5}
				>
					Siguiente
					<IconChevronRight />
				</button>
			</div>
			<Toaster theme='dark' position='top-right' />
		</>
	)
}
