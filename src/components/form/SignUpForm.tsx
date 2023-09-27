import { supabase } from '../../supabase/client'
import ButtonForm from './ButtonForm'
import InputForm from './InputForm'
import InputPassword from './InputPassword'

export default function signUpForm() {
	const handleSignUpUser = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const { data, error } = await supabase.auth.signUp({
			email: 'jgra11.2010@gmail.com',
			password: '123456',
			options: {
				data: {
					name: 'Jose',
					last_name: 'Rojas',
					country: 'Colombia',
					ciudad: 'Bogotá'
				}
			}
		})
	}

	return (
		<form
			className='flex flex-col justify-center gap-y-4'
			onSubmit={(e) => handleSignUpUser(e)}
		>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-8'>
				<InputForm label='Nombre' type='text' />
				<InputForm label='Apellido' type='text' />
				<InputForm label='País' type='text' />
				<InputForm label='Ciudad' type='text' />
				<InputForm label='Correo Electrónico' type='email' />
				<InputPassword label='Contraseña' />
			</div>
			<ButtonForm text='Registrarse' />
		</form>
	)
}
