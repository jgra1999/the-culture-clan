import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { IconHeart, IconX } from '../icons/ReactIcons'
import { supabase } from '../../supabase/client'
import type { Database } from '../../types/supabase'

const products = [
	{
		id: 1,
		name: 'Throwback Hip Bag',
		href: '#',
		color: 'Salmon',
		price: '$90.00',
		quantity: 1,
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
		imageAlt:
			'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.'
	},
	{
		id: 2,
		name: 'Medium Stuff Satchel',
		href: '#',
		color: 'Blue',
		price: '$32.00',
		quantity: 1,
		imageSrc:
			'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
		imageAlt:
			'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.'
	}
	// More products...
]

export default function Wishlist() {
	const [open, setOpen] = useState(false)

	const [currentWishlist, setCurrentWishlist] = useState<
		Database['public']['Tables']['products']['Row'][]
	>([])

	const getItemsOnWishlist = async () => {
		const wishlist = JSON.parse(localStorage.getItem('wishlist') || '')
		let items: Database['public']['Tables']['products']['Row'][] = []

		wishlist.forEach(async (id: string) => {
			const { data, error } = await supabase
				.from('products')
				.select('*')
				.eq('id', id)

			if (data) items.push(data[0])
		})

		setTimeout(() => {
			setCurrentWishlist(items)
		}, 1000)
	}

	useEffect(() => {
		getItemsOnWishlist()
	}, [])

	return (
		<>
			<button
				type='button'
				onClick={() => setOpen(true)}
				className='lg:hidden relative'
			>
				{currentWishlist.length > 0 && (
					<span className='absolute inline-flex items-center rounded-full bg-red-600 px-1.5 py-[2px] text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10 '>
						{currentWishlist.length}
					</span>
				)}
				<IconHeart styles='w-7 h-7 stroke-white fill-none' />
			</button>
			<button
				type='button'
				onClick={() => setOpen(true)}
				className='hidden lg:flex items-center gap-x-1 opacity-75 hover:opacity-100 relative'
			>
				{currentWishlist.length > 0 && (
					<span className='absolute inline-flex items-center rounded-full bg-red-600 px-1.5 py-[2px] text-[10px] font-medium text-white ring-1 ring-inset ring-gray-500/10 -right-5 -top-1'>
						{currentWishlist.length}
					</span>
				)}
				<IconHeart styles='w-5 h-5 stroke-white fill-none' />
				<span className='text-sm'>lista de deseos</span>
			</button>
			<Transition.Root show={open} as={Fragment}>
				<Dialog as='div' className='relative z-10' onClose={setOpen}>
					<Transition.Child
						as={Fragment}
						enter='ease-in-out duration-500'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in-out duration-500'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<div className='fixed inset-0 bg-darkGray bg-opacity-60 transition-opacity' />
					</Transition.Child>

					<div className='fixed inset-0 overflow-hidden'>
						<div className='absolute inset-0 overflow-hidden'>
							<div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
								<Transition.Child
									as={Fragment}
									enter='transform transition ease-in-out duration-500 sm:duration-700'
									enterFrom='translate-x-full'
									enterTo='translate-x-2'
									leave='transform transition ease-in-out duration-500 sm:duration-700'
									leaveFrom='translate-x-0'
									leaveTo='translate-x-full'
								>
									<Dialog.Panel className='pointer-events-auto w-screen max-w-md'>
										<div className='flex h-full flex-col overflow-y-scroll bg-darkGray shadow-xl'>
											<div className='flex-1 overflow-y-auto px-4 py-6 sm:px-6'>
												<div className='flex items-start justify-between'>
													<Dialog.Title className='text-lg font-medium text-grayText uppercase'>
														lista de deseos
													</Dialog.Title>
													<div className='ml-3 flex h-7 items-center'>
														<button
															type='button'
															className='relative -m-2 p-2 opacity-50 hover:opacity-100 '
															onClick={() => setOpen(false)}
														>
															<span className='absolute -inset-0.5' />
															<span className='sr-only'>Close panel</span>
															<IconX />
														</button>
													</div>
												</div>

												<div className='mt-8'>
													<div className='flow-root'>
														<ul
															role='list'
															className='-my-6 divide-y divide-mediumGray'
														>
															{currentWishlist?.map((item) => (
																<li key={item.id} className='flex py-6'>
																	<div className='h-24 w-20 flex-shrink-0 overflow-hidden rounded-md'>
																		<img
																			src={item.image_url_2}
																			alt={item.name}
																			className='h-full w-full object-cover object-center'
																		/>
																	</div>

																	<div className='ml-4 flex flex-1 flex-col'>
																		<div>
																			<div className='flex justify-between text-base font-medium'>
																				<h3>
																					<a href='#'>{item.name}</a>
																				</h3>
																				<p className='ml-4'>${item.price}</p>
																			</div>
																			<p className='mt-1 text-sm text-grayText'>
																				{item.collection}
																			</p>
																		</div>
																		<div className='flex flex-1 items-end justify-between text-sm'>
																			{/* <p className='text-gray-500'>
																				Qty {product.quantity}
																			</p> */}

																			<div className='flex'>
																				<button
																					type='button'
																					className='font-medium text-red-600 hover:text-red-500'
																				>
																					Eliminar
																				</button>
																			</div>
																		</div>
																	</div>
																</li>
															))}
														</ul>
													</div>
												</div>
											</div>

											<div className='border-t border-mediumGray px-4 py-6 sm:px-6'>
												<div className='flex justify-between text-base font-medium'>
													<p>Subtotal</p>
													<p>$262.00</p>
												</div>
												<p className='mt-0.5 text-sm text-grayText'>
													Seras enviado al Whatsapp con los productos en tu lista de
													deseos
												</p>
												<div className='mt-6'>
													<a
														href='#'
														className='flex items-center justify-center rounded py-3 px-4 text-base border border-white'
													>
														Realizar Pedido
													</a>
												</div>
												{/* <div className='mt-6 flex justify-center text-center text-sm text-gray-500'>
														<p>
															or
															<button
																type='button'
																className='font-medium text-indigo-600 hover:text-indigo-500'
																onClick={() => setOpen(false)}
															>
																Continue Shopping
																<span aria-hidden='true'> &rarr;</span>
															</button>
														</p>
													</div> */}
											</div>
										</div>
									</Dialog.Panel>
								</Transition.Child>
							</div>
						</div>
					</div>
				</Dialog>
			</Transition.Root>
		</>
	)
}
