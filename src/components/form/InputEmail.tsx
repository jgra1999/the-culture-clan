import type { UseFormRegister } from 'react-hook-form'
import type { SimpleLoginFormInputs } from '../../types/form-inputs'

type Props = {
	register: UseFormRegister<SimpleLoginFormInputs>
	required: boolean
	children: React.ReactNode
}

export default function InputEmail({ required, register, children }: Props) {
	return (
		<div className='flex flex-col gap-y-2 text-left relative'>
			<label htmlFor='email' className='text-grayText'>
				Correo Electrónico
			</label>
			<input
				className='bg-[#171717] outline-none opacity-50 focus:opacity-100 border border-mediumGray py-2 px-3 rounded-lg'
				type='email'
				{...register('email', { required })}
			/>
			{children}
		</div>
	)
}
