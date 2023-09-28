import { OpenEyeIcon, PencilIcon, TrashIcon } from '../icons/ReactIcons'

export default function DataTable({ headers }: { headers: string[] }) {
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
				<tr className='border-b border-mediumGray bg-[#131313]'>
					<th
						scope='row'
						className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
					>
						Magic Mouse 2
					</th>
					<td className='px-6 py-4'>Black</td>
					<td className='px-6 py-4'>Accessories</td>
					<td className='px-6 py-4'>$99</td>
					<td className='px-6 py-4 flex gap-x-1 justify-end '>
						<a href='#'>
							<OpenEyeIcon />
						</a>
						<a href='#'>
							<PencilIcon />
						</a>
						<a href='#'>
							<TrashIcon />
						</a>
					</td>
				</tr>
			</tbody>
		</table>
	)
}
