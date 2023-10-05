import { supabase } from '../../supabase/client'
import ButtonForm from '../form/ButtonForm'
import InputForm from '../form/InputForm'
import InputPassword from '../form/InputPassword'

export default function LoginForm() {
	const setAdminCookie = () => {
		var now = new Date()
		var time = now.getTime()
		var expireTime = time + 5 * 24 * 60 * 60 * 1000
		now.setTime(expireTime)
		document.cookie = 'admin=true; expires=' + now.toUTCString() + '; path=/'
	}

	const handleLoginAdmin = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const { data, error } = await supabase.auth.signInWithPassword({
			email: 'jgra11.2010@gmail.com',
			password: '123456'
		})

		if (error) {
			console.log(error.message)
		} else {
			setAdminCookie()
			location.reload()
		}
	}

	return (
		<form
			onSubmit={(e) => handleLoginAdmin(e)}
			className='w-3/4 sm:min-w-0 max-w-[500px] bg-darkGray rounded-lg py-6 px-8 space-y-4'
		>
			<InputForm label='Email' type='email' />
			<InputPassword label='Contraseña' />
			<ButtonForm text='Iniciar Sesión' />
		</form>
	)
}
