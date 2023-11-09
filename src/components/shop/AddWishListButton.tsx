import { IconHeart } from '../icons/ReactIcons'
// import { toast } from 'sonner'
import toast, { Toaster } from 'react-hot-toast'
import { useWishlistStore } from '../../store/wishlist'

export default function AddWishListButton({ id }: { id: string }) {
	const { wishlist, addToWishList, removeToWishList } = useWishlistStore()

	const handleWishList = (item: any) => {
		if (!wishlist.includes(id)) {
			addToWishList(item)
			toast.success('Agregado a la lista de deseos')
		} else {
			removeToWishList(item)
			toast.success('Eliminado de la lista de deseos')
		}
	}

	return (
		<>
			<button onClick={() => handleWishList(id)}>
				<IconHeart
					styles={`w-7 h-7 ${
						wishlist.includes(id)
							? 'stroke-red-500 fill-red-500'
							: 'stroke-white fill-none'
					}`}
				/>
			</button>
			<Toaster
				position='top-right'
				reverseOrder={false}
				toastOptions={{
					style: {
						background: '#181818',
						color: '#fff'
					}
				}}
			/>
		</>
	)
}
