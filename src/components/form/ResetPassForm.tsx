// import { supabase } from '../../supabase/client'
/* react hook form */
// import { useForm, type SubmitHandler } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { z } from 'zod'
// /* components */
// import ButtonForm from './ButtonForm'

// /* TODO: Revisar SMTP Resend para integrarlo a supabase */

// // type Schema = z.infer<>

// export default function ResetPassForm() {
// 	const {
// 		handleSubmit,
// 		register,
// 		formState: { errors }
// 	} = useForm<Schema>({
// resolver: zodResolver(simpleLoginSchema)
// })
// const handleResetPassRequest = async (e: React.FormEvent<HTMLFormElement>) => {
// 	e.preventDefault()

// 	const email = 'jgra11.2010@gmail.com'

// 	const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
// 		redirectTo: 'http://localhost:4231.com/recuperar-contraseña'
// 	})
// }

// 	return (
// 		<form className='flex flex-col gap-y-4'>
// 			<div className='flex flex-col gap-y-2 text-left relative'>
// 				<label htmlFor='reset_pass' className='text-grayText'>
// 					Correo Electrónico
// 				</label>
// 				<input
// 					className='bg-[#171717] outline-none opacity-50 focus:opacity-100 border border-mediumGray py-2 px-3 rounded-lg'
// 					type='email'
// 					{...register(reset_pass, { required: true })}
// 				/>
// 				{children}
// 			</div>
// 			<ButtonForm text='Enviar Email' />
// 		</form>
// 	)
// }
