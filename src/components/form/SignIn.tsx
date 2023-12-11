// import { supabase } from '../../supabase/client'
// import { simpleLoginSchema } from '../../utils/schemas'
// /* react hook form */
// import { useForm, type SubmitHandler } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
// import * as z from 'zod'
// /* components */
// import ButtonForm from './ButtonForm'
// import InputEmail from './InputEmail'
// import InputPassword from './InputPassword'
// import InputErrorMessage from './InputErrorMessage'

// type Schema = z.infer<typeof simpleLoginSchema>

// export default function SignInForm() {
// 	const {
// 		handleSubmit,
// 		register,
// 		formState: { errors }
// 	} = useForm<Schema>({
// 		resolver: zodResolver(simpleLoginSchema)
// 	})

// 	const handleSignInUser: SubmitHandler<Schema> = async ({ email, password }) => {
// 		const { data, error } = await supabase.auth.signInWithPassword({
// 			email,
// 			password
// 		})
// 	}

// 	return (
// 		<form
// 			onSubmit={handleSubmit(handleSignInUser)}
// 			className='flex flex-col justify-center gap-y-8'
// 		>
// 			<InputEmail register={register} required>
// 				{errors.email && <InputErrorMessage message={errors.email?.message} />}
// 			</InputEmail>

// 			<InputPassword register={register} required>
// 				{errors.password && <InputErrorMessage message={errors.password?.message} />}
// 			</InputPassword>
// 			<div className='flex justify-between mt-2'>
// 				<a href='/sign-up' className='text-sm opacity-50 hover:opacity-100'>
// 					Crear Cuenta
// 				</a>

// 				<a
// 					href='/recuperar-contraseña'
// 					className='text-sm opacity-50 hover:opacity-100'
// 				>
// 					¿Olvidaste tu Contraseña?
// 				</a>
// 			</div>
// 			<ButtonForm text='Iniciar Sesión' />
// 		</form>
// 	)
// }
