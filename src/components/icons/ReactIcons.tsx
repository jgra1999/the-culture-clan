export const OpenEyeIcon = ({ styles }: { styles?: string }) => (
	<svg
		className={`w-6 h-6 ${styles}`}
		viewBox='0 0 24 24'
		strokeWidth='2'
		stroke='currentColor'
		fill='none'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0'></path>
		<path d='M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6'></path>
	</svg>
)
export const IconEyeOff = () => (
	<svg
		className='opacity-70 hover:opacity-100 w-6 h-6'
		viewBox='0 0 24 24'
		strokeWidth='2'
		stroke='currentColor'
		fill='none'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M10.585 10.587a2 2 0 0 0 2.829 2.828'></path>
		<path d='M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87'></path>
		<path d='M3 3l18 18'></path>
	</svg>
)
export const PencilIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='opacity-70 hover:opacity-100 w-6 h-6'
		viewBox='0 0 24 24'
		strokeWidth={2}
		stroke='currentColor'
		fill='none'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<path stroke='none' d='M0 0h24v24H0z' fill='none' />
		<path d='M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4' />
		<path d='M13.5 6.5l4 4' />
	</svg>
)

export const TrashIcon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='opacity-70 hover:opacity-100 w-6 h-6'
		viewBox='0 0 24 24'
		strokeWidth={2}
		stroke='currentColor'
		fill='none'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<path stroke='none' d='M0 0h24v24H0z' fill='none' />
		<path d='M4 7l16 0' />
		<path d='M10 11l0 6' />
		<path d='M14 11l0 6' />
		<path d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12' />
		<path d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3' />
	</svg>
)

export const IconLogout = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='flex-shrink w-6 h-6'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		strokeWidth='2'
		stroke='currentColor'
		fill='none'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M10 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2'></path>
		<path d='M15 12h-12l3 -3'></path>
		<path d='M6 15l-3 -3'></path>
	</svg>
)

export const IconCircleX = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='stroke-red-700 w-5 h-5'
		viewBox='0 0 24 24'
		strokeWidth='2'
		fill='none'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0'></path>
		<path d='M10 10l4 4m0 -4l-4 4'></path>
	</svg>
)

export const IconCircleCheck = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='stroke-green-600 w-5 h-5'
		viewBox='0 0 24 24'
		strokeWidth={2}
		stroke='currentColor'
		fill='none'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0'></path>
		<path d='M9 12l2 2l4 -4'></path>
	</svg>
)

export const IconBrandApple = () => (
	<svg
		className='w-5 h-5'
		viewBox='0 0 24 24'
		strokeWidth={2}
		stroke='currentColor'
		fill='none'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M9 7c-3 0 -4 3 -4 5.5c0 3 2 7.5 4 7.5c1.088 -.046 1.679 -.5 3 -.5c1.312 0 1.5 .5 3 .5s4 -3 4 -5c-.028 -.01 -2.472 -.403 -2.5 -3c-.019 -2.17 2.416 -2.954 2.5 -3c-1.023 -1.492 -2.951 -1.963 -3.5 -2c-1.433 -.111 -2.83 1 -3.5 1c-.68 0 -1.9 -1 -3 -1z'></path>
		<path d='M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2'></path>
	</svg>
)

export const IconBrandGoogle = () => (
	<svg
		className='w-5 h-5'
		viewBox='0 0 24 24'
		strokeWidth='1.5'
		stroke='currentColor'
		fill='none'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<path stroke='none' d='M0 0h24v24H0z' fill='none' />
		<path d='M16 20h3a1 1 0 0 0 1 -1v-14a1 1 0 0 0 -1 -1h-3v16z' />
		<path d='M5 20h3v-16h-3a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1z' />
		<path d='M16 4l-4 4l-4 -4' />
		<path d='M4 6.5l8 7.5l8 -7.5' />
	</svg>
)

export const IconThumbUp = ({ fill }: { fill: string }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='w-7 h-7'
		viewBox='0 0 24 24'
		strokeWidth={1.5}
		stroke='currentColor'
		fill={fill}
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		{' '}
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3'></path>
	</svg>
)

export const IconThumbDown = ({ fill }: { fill: string }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='w-7 h-7'
		viewBox='0 0 24 24'
		strokeWidth={1.5}
		stroke='currentColor'
		fill={fill}
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3'></path>
	</svg>
)

export const IconBrandWhatsapp = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='w-6 h-6'
		viewBox='0 0 24 24'
		strokeWidth={2}
		stroke='currentColor'
		fill='none'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9'></path>
		<path d='M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1'></path>
	</svg>
)

export const IconChevronDown = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='w-5 h-5'
		viewBox='0 0 24 24'
		strokeWidth={2}
		stroke='currentColor'
		fill='none'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M6 9l6 6l6 -6'></path>
	</svg>
)

export const IconChevronRight = ({ styles = 'w-6 h-6' }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className={styles}
		viewBox='0 0 24 24'
		strokeWidth={2}
		stroke='currentColor'
		fill='none'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M9 6l6 6l-6 6'></path>
	</svg>
)

export const IconChevronLeft = ({ styles = 'w-6 h-6' }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className={styles}
		viewBox='0 0 24 24'
		strokeWidth={2}
		stroke='currentColor'
		fill='none'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M15 6l-6 6l6 6'></path>
	</svg>
)

export const IconHeart = ({ styles }: { styles: string }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className={styles}
		viewBox='0 0 24 24'
		strokeWidth={2}
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572'></path>
	</svg>
)

export const IconX = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='w-6 h-6'
		viewBox='0 0 24 24'
		strokeWidth={1.5}
		stroke='currentColor'
		fill='none'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M18 6l-12 12'></path>
		<path d='M6 6l12 12'></path>
	</svg>
)

export const IconMenu = () => (
	<svg
		className='w-8 h-8'
		viewBox='0 0 24 24'
		strokeWidth='2'
		stroke='currentColor'
		fill='none'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M4 6l16 0'></path>
		<path d='M4 12l16 0'></path>
		<path d='M4 18l16 0'></path>
	</svg>
)

export const IconHome = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='flex-shrink-0 w-6 h-6'
		viewBox='0 0 24 24'
		strokeWidth={1.5}
		stroke='currentColor'
		fill='none'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M5 12l-2 0l9 -9l9 9l-2 0'></path>
		<path d='M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7'></path>
		<path d='M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6'></path>
	</svg>
)

export const IconShirt = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='flex-shrink-0 w-6 h-6'
		width={24}
		height={24}
		viewBox='0 0 24 24'
		strokeWidth={1.5}
		stroke='currentColor'
		fill='none'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M15 4l6 2v5h-3v8a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1v-8h-3v-5l6 -2a3 3 0 0 0 6 0'></path>
	</svg>
)

export const IconHelpHexagon = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='flex-shrink-0 w-6 h-6'
		viewBox='0 0 24 24'
		strokeWidth={1.5}
		stroke='currentColor'
		fill='none'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z'></path>
		<path d='M12 16v.01'></path>
		<path d='M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483'></path>
	</svg>
)

export const IconDeviceMobile = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='flex-shrink-0 w-6 h-6'
		viewBox='0 0 24 24'
		strokeWidth={1.5}
		stroke='currentColor'
		fill='none'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z'></path>
		<path d='M11 4h2'></path>
		<path d='M12 17v.01'></path>
	</svg>
)

export const IconLogin2 = () => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='flex-shrink-0 w-6 h-6'
		viewBox='0 0 24 24'
		strokeWidth={1.5}
		stroke='currentColor'
		fill='none'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M9 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2'></path>
		<path d='M3 12h13l-3 -3'></path>
		<path d='M13 15l3 -3'></path>
	</svg>
)
