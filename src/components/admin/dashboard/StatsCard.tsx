type Props = {
	title: string
	growth?: number
	tableUrl: string
	stats: number
}

export function StatsCard({ title, growth = 0, tableUrl, stats }: Props) {
	return (
		<div className='bg-lightGray p-4 rounded-lg space-y-4'>
			<div className='flex justify-between items-center'>
				<h5 className='text-grayText'>{title}</h5>
				{growth !== 0 ? (
					<span
						className={`font-medium ${
							growth > 0 ? 'text-green-600' : 'text-red-600'
						}`}
					>
						{growth > 0 ? `+${growth}%` : `${growth}%`}
					</span>
				) : (
					''
				)}
			</div>
			<div className='flex flex-col gap-y-5'>
				<span className='text-5xl'>{stats}</span>
				<a
					className='text-white text-sm opacity-50 hover:opacity-100'
					href={tableUrl}
				>
					Ver tabla
				</a>
			</div>
		</div>
	)
}
