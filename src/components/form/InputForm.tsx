import React from 'react'

type Props = {
	label: string
	type: any
}

export default function InputForm({ label, type }: Props) {
	return (
		<>
			<label className='flex flex-col text-left gap-y-2 text-grayText'>
				{label}
				<input
					className='bg-[#171717] outline-none opacity-50 focus:opacity-100 border border-mediumGray py-2 px-3 rounded-lg'
					type={type}
					required
				/>
			</label>
		</>
	)
}
