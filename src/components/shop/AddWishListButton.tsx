import { useEffect, useState } from 'react'
import { IconHeart } from '../icons/ReactIcons'
import { toast } from 'sonner'

export default function AddWishListButton({ id }: { id: string }) {
	const [addedToWishlist, setAddedToWishlist] = useState(false)
	const [wishlist, setWishlist] = useState<string[]>([])

	const handleWishList = (item: string) => {
		const draft = wishlist.includes(item)
			? wishlist.filter((i) => i !== item)
			: [...wishlist, item]

		setWishlist(draft)
		localStorage.setItem('wishlist', JSON.stringify(draft))

		if (wishlist.includes(item)) {
			toast.success('Removed to wishlist')
		} else {
			toast.success('Added to wishlist')
		}
	}

	useEffect(() => {
		setWishlist(JSON.parse(localStorage.getItem('wishlist') ?? '[]'))
	}, [])

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
		</>
	)
}
