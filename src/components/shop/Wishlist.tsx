import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { IconHeart, IconX, OpenEyeIcon } from '../icons/ReactIcons'
import { supabase } from '../../supabase/client'
import type { Database } from '../../types/supabase'
import { useWishlistStore } from '../../store/wishlist'

type Item = Database['public']['Tables']['products']['Row']

export default function Wishlist() {
	const [open, setOpen] = useState(false)

	const [currentWishlist, setCurrentWishlist] = useState<Item[]>([])

	const { wishlist, removeToWishList } = useWishlistStore()

	const getItemsOnWishlist = async () => {
		let items: Item[] = []

		wishlist.forEach(async (id: string) => {
			const { data, error } = await supabase
				.from('products')
				.select('*')
				.eq('id', id)

			if (data) items.push(data[0])
		})

		setCurrentWishlist(items)
	}

	const handleSendOrder = (currentWishlist: Item[]) => {
		const items = currentWishlist.map((item) => item.name)

		const total = currentWishlist.reduce(
			(acumulado, item) => acumulado + item.price,
			0
		)

		const WhatsappUrl = `https://wa.me/584244155064?text=Hola!%20Este%20es%20mi%20lista%20de%20deseos:%0A*PEDIDO*:%20${items.join(
			', '
		)}%0A*TOTAL%20A%20PAGAR:*%20${total}$`

		window.open(WhatsappUrl)
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
							<div className='pointer-events-none fixed inset-y-0 left-2 flex max-w-full pl-10'>
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
															{currentWishlist.length === 0 && (
																<div className='text-center text-lg text-grayText mt-10'>
																	No hay productos en la lista de deseos,{' '}
																	<a href='/tienda' className='text-white'>
																		revisa nuestra tienda
																	</a>
																</div>
															)}

															{currentWishlist?.map((item, index) => (
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
																			<div className='flex'>
																				<a
																					href={`/tienda/${item.slug}`}
																					className='flex items-center gap-x-1 opacity-70 hover:opacity-100'
																				>
																					overview <OpenEyeIcon />
																				</a>
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
													<p>
														$
														{currentWishlist.reduce(
															(acumulado, item) => acumulado + item.price,
															0
														)}
													</p>
												</div>
												<p className='mt-0.5 text-sm text-grayText'>
													Seras enviado al Whatsapp con los productos en tu lista de
													deseos
												</p>
												<div className='mt-6'>
													{/* href='https://wa.me/584244155064?text=*PEDIDO:*%20*franela%20oversized*%0A*TOTAL%20A%20PAGAR:*%20*45$* */}
													<button
														onClick={() => handleSendOrder(currentWishlist)}
														className='flex items-center justify-center rounded py-3 px-4 text-base border border-white w-full'
													>
														Realizar Pedido
													</button>
												</div>
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
