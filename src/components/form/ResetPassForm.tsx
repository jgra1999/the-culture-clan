import InputForm from './InputForm'
import ButtonForm from './ButtonForm'

export default function ResetPassForm() {
	return (
		<form className='flex flex-col gap-y-4'>
			<div className='grid grid-cols-1 gap-y-5 gap-x-8'>
				<InputForm label='Correo Electrónico' type='email' />
			</div>
			<ButtonForm text='Enviar Email' />
		</form>
	)
}
