export default function ButtonForm({ text }: { text: string }) {
	return (
		<button
			type='submit'
			className='bg-darkGray py-3 px-4 text-center rounded-lg w-full  text-white'
		>
			{text}
		</button>
	)
}
