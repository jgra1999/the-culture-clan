export default function SizeOption({ size }: { size: string }) {
	return (
		<button className='border-2 border-white py-2 px-4 rounded text-sm md:text-base opacity-70 hover:opacity-100'>
			{size}
		</button>
	)
}
