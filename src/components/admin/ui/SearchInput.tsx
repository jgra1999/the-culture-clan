interface Props {
	text: string
	handleSearch: (value: string) => void
}

export function SearchInput({ text, handleSearch }: Props) {
	return (
		<div>
			<input
				type='text'
				placeholder={text}
				className='bg-transparent min-w-[500px] border border-darkGray py-2 px-3 text-sm text-darkGray opacity-80 focus:opacity-100 outline-none rounded-lg'
				onChange={(e) => handleSearch(e.target.value)}
			/>
		</div>
	)
}
