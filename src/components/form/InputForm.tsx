import type { Path, UseFormRegister } from 'react-hook-form'
import type { SignUpFormInputs } from '../../types/form-inputs'

type InputProps = {
	label: string
	type: string
	name: Path<SignUpFormInputs>
	register: UseFormRegister<SignUpFormInputs>
	required: boolean
	children?: React.ReactNode
}

export default function InputForm({
	label,
	type,
	name,
	required,
	register,
	children
}: InputProps) {
	return (
		<div className='flex flex-col gap-y-2 text-left relative'>
			<label htmlFor={name} className='text-grayText'>
				{label}
			</label>
			<input
				className='bg-[#171717] outline-none opacity-50 focus:opacity-100 border border-mediumGray py-2 px-3 rounded-lg'
				type={type}
				{...register(name, { required })}
			/>
			{children}
		</div>
	)
}
