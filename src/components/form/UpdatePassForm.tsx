import { useState } from 'react'
import { IconEyeOff, OpenEyeIcon } from '../icons/ReactIcons'

export default function UpdatePassForm() {
	const [inputType1, setInputType1] = useState('password')
	const [inputType2, setInputType2] = useState('password')

	return (
		<form className='flex flex-col gap-y-4'>
			<div className='grid grid-cols-1 gap-y-5 gap-x-8'>
				<div className='flex flex-col gap-y-2'>
					<label
						htmlFor='password'
						className='flex flex-col text-left text-grayText'
					>
						Contraseña
					</label>
					<div className='flex items-center w-full relative'>
						<input
							type={inputType1}
							className='bg-[#171717] outline-none opacity-50 focus:opacity-100 border border-mediumGray py-2 px-3 rounded-lg w-full'
							// {...register('password', { required: true })}
						/>

						<div
							className='absolute right-3 text-grayText cursor-pointer'
							onClick={handleShowPassword}
						>
							{inputType1 === 'password' ? <OpenEyeIcon /> : <IconEyeOff />}
						</div>
						{/* {children} */}
					</div>
				</div>
				<div className='flex flex-col gap-y-2'>
					<label
						htmlFor='password'
						className='flex flex-col text-left text-grayText'
					>
						Contraseña
					</label>
					<div className='flex items-center w-full relative'>
						<input
							type={inputType2}
							className='bg-[#171717] outline-none opacity-50 focus:opacity-100 border border-mediumGray py-2 px-3 rounded-lg w-full'
							// {...register('password', { required: true })}
						/>

						<div
							className='absolute right-3 text-grayText cursor-pointer'
							onClick={handleShowPassword}
						>
							{inputType2 === 'password' ? <OpenEyeIcon /> : <IconEyeOff />}
						</div>
						{/* {children} */}
					</div>
				</div>
			</div>
			<button className='border-2 border-mediumGray py-3 px-4 text-center rounded-lg w-full opacity-50 hover:opacity-100'>
				Actualizar
			</button>
		</form>
	)
}
