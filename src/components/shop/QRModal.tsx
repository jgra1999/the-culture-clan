import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { IconBrandWhatsapp, IconX } from '../icons/ReactIcons'
import qr from '../../assets/Qr-whatsapp.png'

export default function QRModal() {
	let [isOpen, setIsOpen] = useState(false)

	function closeModal() {
		setIsOpen(false)
	}

	const qrImage = qr

	return (
		<>
			<button
				onClick={() => setIsOpen(true)}
				className='hidden lg:flex items-center justify-center gap-x-1 border-2 border-white py-3 px-4 rounded text-sm md:text-base opacity-50 hover:opacity-100 min-w-[50%]'
			>
				<IconBrandWhatsapp />
				Consultar Disponibilidad
			</button>

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as='div' className='relative z-10' onClose={() => setIsOpen(false)}>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<div className='fixed inset-0 bg-black/25' />
					</Transition.Child>

					<div className='fixed inset-0 overflow-y-auto'>
						<div className='flex min-h-full items-center justify-center p-4 text-center'>
							<Transition.Child
								as={Fragment}
								enter='ease-out duration-300'
								enterFrom='opacity-0 scale-95'
								enterTo='opacity-100 scale-100'
								leave='ease-in duration-200'
								leaveFrom='opacity-100 scale-100'
								leaveTo='opacity-0 scale-95'
							>
								<Dialog.Panel className='flex items-center first-letter:w-full max-w-md transform overflow-hidden rounded-2xl bg-darkGray p-6 align-middle shadow-xl transition-all relative'>
									<button
										className='absolute top-5 right-5 opacity-50 hover:opacity-100'
										onClick={() => setIsOpen(false)}
										type='button'
										aria-label='Close'
									>
										<IconX />
									</button>

									<div>
										<img
											src='https://res.cloudinary.com/df8nnzf8t/image/upload/v1699730824/codigo%20qr%20imagenes/Qr-whatsapp_l79fwq.png'
											alt='WhatsApp QR imagen'
											className='h-96'
										/>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}
