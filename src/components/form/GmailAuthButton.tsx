export default function GmailAuthButton() {
	return (
		<>
			<button className='flex items-start justify-center gap-x-1 border-2 border-mediumGray py-3 px-4 text-center rounded-lg mt-8 w-full opacity-50 hover:opacity-100'>
				<svg
					className='w-5 h-5'
					viewBox='0 0 24 24'
					stroke-width='1.5'
					stroke='currentColor'
					fill='none'
					stroke-linecap='round'
					stroke-linejoin='round'
				>
					<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
					<path d='M16 20h3a1 1 0 0 0 1 -1v-14a1 1 0 0 0 -1 -1h-3v16z'></path>
					<path d='M5 20h3v-16h-3a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1z'></path>
					<path d='M16 4l-4 4l-4 -4'></path>
					<path d='M4 6.5l8 7.5l8 -7.5'></path>
				</svg>
				<span>Gmail</span>
			</button>
		</>
	)
}
