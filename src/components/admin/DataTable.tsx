import { useEffect, useState } from 'react'
import { supabase } from '../../supabase/client'
import { OpenEyeIcon, PencilIcon, TrashIcon } from '../icons/ReactIcons'

interface Row {
	collection: string
	created_at: string
	description: string
	dislikes: number
	id: string
	image_url_1: string
	image_url_2: string
	likes: number
	name: string
	price: number
	slug: string
}

export default function DataTable({ headers }: { headers: string[] }) {
	const [products, setProducts] = useState<any>([])
	const getData = async () => {
		const { data, error } = await supabase.from('products').select('*')
		console.log('🚀 ~ file: DataTable.tsx:9 ~ getData ~ data:', data)

		setProducts(data)
	}

	useEffect(() => {
		getData()
	}, [])

	return (
		<table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
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
				{products.map((product: Row) => (
					<tr key={product.id} className='border-b border-mediumGray bg-[#131313]'>
						<th
							scope='row'
							className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex gap-x-2 items-center'
						>
							<img src={product.image_url_1} className='w-10 h-14' alt='' />
							<span>{product.name}</span>
						</th>
						<td className='px-6 py-4'>{product.collection}</td>
						<td className='px-6 py-4'>{product.likes}</td>
						<td className='px-6 py-4'>${product.price}</td>
						<td className='px-6 py-4'>
							<div className='flex gap-x-1 justify-end'>
								<a href='#'>
									<OpenEyeIcon />
								</a>
								<a href='#'>
									<PencilIcon />
								</a>
								<a href='#'>
									<TrashIcon />
								</a>
							</div>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}
