import { useState } from 'react'
import type { UseFormRegister } from 'react-hook-form'
import type { SimpleLoginFormInputs } from '../../types/form-inputs'
import { IconEyeOff, OpenEyeIcon } from '../icons/ReactIcons'

type Props = {
	register: UseFormRegister<SimpleLoginFormInputs>
	required: boolean
	children: React.ReactNode
}

export default function InputPassword({ register, required, children }: Props) {
	const [type, setType] = useState('password')

	const handleShowPassword = () => {
		if (type === 'password') {
			setType('text')
		} else {
			setType('password')
		}
	}
	return (
		<div className='flex flex-col gap-y-2'>
			<label htmlFor='password' className='flex flex-col text-left text-grayText'>
				Contraseña
			</label>
			<div className='flex items-center w-full relative'>
				<input
					type={type}
					className='bg-[#171717] outline-none opacity-50 focus:opacity-100 border border-mediumGray py-2 px-3 rounded-lg w-full'
					{...register('password', { required })}
				/>

				<div className='absolute right-3 text-grayText' onClick={handleShowPassword}>
					{type === 'password' ? <OpenEyeIcon /> : <IconEyeOff />}
				</div>
				{children}
			</div>
		</div>
	)
}
