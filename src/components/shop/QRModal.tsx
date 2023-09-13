import { useState } from 'react'

type Props = {
	children: any
}

export default function QRModal({ children }: Props) {
	const [isVisible, setIsVisible] = useState(false)

	return (
		<>
			<button
				onClick={() => setIsVisible(true)}
				className='hidden lg:flex items-center justify-center gap-x-1 border-2 border-darkGray dark:border-white py-3 px-4 rounded text-sm md:text-base opacity-70 hover:opacity-100 min-w-[50%]'
			>
				{children}
				Consultar Disponibilidad
			</button>

			<div
				className={`bg-black opacity-50 z-10 w-full h-screen fixed top-0 left-0 ${
					isVisible ? 'block' : 'hidden'
				}`}
			></div>
			<div
				className={`bg-darkGray rounded-lg px-4 pb-4 z-20 fixed top-96 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-end ${
					isVisible ? 'block' : 'hidden'
				}`}
			>
				<button
					className='mt-4 opacity-75 hover:opacity-100'
					onClick={() => setIsVisible(false)}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='stroke-white w-8 h-8'
						viewBox='0 0 24 24'
						strokeWidth='2'
						stroke='currentColor'
						fill='none'
						strokeLinecap='round'
						strokeLinejoin='round'
					>
						<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
						<path d='M18 6l-12 12'></path>
						<path d='M6 6l12 12'></path>
					</svg>
				</button>
				<img
					src='https://res.cloudinary.com/hothra/image/upload/v1694557254/the%20culture%20clan/ws-qr_ijv7zx.png'
					alt=''
					className='h-96'
				/>
			</div>
		</>
	)
}
