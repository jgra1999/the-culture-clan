import InputForm from './InputForm'
import InputPassword from './InputPassword'

export default function AuthForm() {
	return (
		<form className='flex flex-col justify-center gap-y-4'>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-8'>
				<InputForm label='Nombre' type='text' />
				<InputForm label='Apellido' type='text' />
				<InputForm label='País' type='text' />
				<InputForm label='Ciudad' type='text' />
				<InputForm label='Correo Electrónico' type='email' />
				<InputPassword label='Contraseña' />
			</div>
			<button className='border-2 border-mediumGray py-3 px-4 text-center rounded-lg w-full opacity-50 hover:opacity-100'>
				Registrarse
			</button>
		</form>
	)
}
