import { supabase } from '../../supabase/client'
import ButtonForm from './ButtonForm'
import InputForm from './InputForm'
import InputPassword from './InputPassword'

export default function LoginForm() {
	return (
		<form className='flex flex-col justify-center gap-y-4'>
			<InputForm label='Correo Electrónico' type='email' />
			<InputPassword label='Contraseña' />
			<div className='flex justify-between mt-8'>
				<a href='/sign-up' className='text-sm opacity-50 hover:opacity-100'>
					Crear Cuenta
				</a>

				<a
					href='/recuperar-contraseña'
					className='text-sm opacity-50 hover:opacity-100'
				>
					¿Olvidaste tu Contraseña?
				</a>
			</div>
			<ButtonForm text='Iniciar Sesión' />
		</form>
	)
}
