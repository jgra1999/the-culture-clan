import InputForm from './InputForm'
import ButtonForm from './ButtonForm'
import { supabase } from '../../supabase/client'

export default function ResetPassForm() {
	const handleResetPassRequest = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const email = 'jgra11.2010@gmail.com'

		const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
			redirectTo: 'https://example.com/update-password'
		})
	}

	return (
		<form
			onSubmit={(e) => handleResetPassRequest(e)}
			className='flex flex-col gap-y-4'
		>
			<div className='grid grid-cols-1 gap-y-5 gap-x-8'>
				<InputForm label='Correo Electrónico' type='email' />
			</div>
			<ButtonForm text='Enviar Email' />
		</form>
	)
}
