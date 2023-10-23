import { IconThumbUp } from '../icons/ReactIcons'

type Props = {
	id: string
	image_url_2: string
	name: string
	price: number
	likes: number
	slug: string
}

export default function ItemCard({
	id,
	image_url_2,
	name,
	price,
	likes,
	slug
}: Props) {
	return (
		<a
			href={`/tienda/${slug}`}
			className='flex flex-col gap-y-4 hover:scale-105 transition-all'
		>
			<img
				src={image_url_2}
				alt={`Franela - ${name}`}
				className='aspect-[384/576] h-full w-full rounded-lg'
				style={{ viewTransitionName: `book-${id}` }}
			/>
			<div className='flex justify-between font-medium'>
				<div>
					<p className='text-[#5e5e5e] text-xl font-bold'>{name}</p>
					<span className='text-xl'>${price}.00</span>
				</div>
				<div className='flex gap-x-1 items-start'>
					<IconThumbUp fill='none' />
					{likes}
				</div>
			</div>
		</a>
	)
}
