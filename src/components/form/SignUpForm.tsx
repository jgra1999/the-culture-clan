import { supabase } from '../../supabase/client'
import { SignUpSchema } from '../../utils/schemas'
/* react hook forms */
import { useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

/* components  */
import ButtonForm from './ButtonForm'
import InputForm from './InputForm'
import InputPassword from './InputPassword'
import InputErrorMessage from './InputErrorMessage'

type Schema = z.infer<typeof SignUpSchema>

export default function signUpForm() {
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm<Schema>({
		resolver: zodResolver(SignUpSchema)
	})

	const handleSignUpUser: SubmitHandler<Schema> = async ({
		name,
		last_name,
		email,
		password,
		country,
		city
	}) => {
		const { data, error } = await supabase.auth.signUp({
			email,
			password,
			options: {
				data: {
					full_name: `${name} ${last_name}`,
					email,
					country,
					city
				}
			}
		})
	}

	return (
		<form
			onSubmit={handleSubmit(handleSignUpUser)}
			className='flex flex-col justify-center gap-y-10'
		>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-8'>
				<InputForm
					label='Nombre'
					type='text'
					register={register}
					name='name'
					required
				>
					{errors.name && <InputErrorMessage message={errors.name?.message} />}
				</InputForm>

				<InputForm
					label='Apellido'
					type='text'
					register={register}
					name='last_name'
					required
				>
					{errors.last_name && (
						<InputErrorMessage message={errors.last_name?.message} />
					)}
				</InputForm>

				<InputForm
					label='País'
					type='text'
					register={register}
					name='country'
					required
				>
					{errors.country && <InputErrorMessage message={errors.country?.message} />}
				</InputForm>

				<InputForm
					label='Ciudad'
					type='text'
					register={register}
					name='city'
					required
				>
					{errors.city && <InputErrorMessage message={errors.city?.message} />}
				</InputForm>

				<InputForm
					label='Correo Electrónico'
					type='email'
					register={register}
					name='email'
					required
				>
					{errors.email && (
						<InputErrorMessage
							message={errors.email?.message}
							styles='truncate overflow-hidden text-ellipsis w-64'
						/>
					)}
				</InputForm>
				<InputForm
					label='Contraseña'
					type='password'
					register={register}
					name='password'
					required
				>
					{errors.password && (
						<InputErrorMessage
							message={errors.password?.message}
							styles='truncate overflow-hidden text-ellipsis w-64'
						/>
					)}
				</InputForm>
			</div>
			<ButtonForm text='Registrarse' />
		</form>
	)
}
