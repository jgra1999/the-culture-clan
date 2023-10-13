import { supabase } from '../../supabase/client'
import { simpleLoginSchema } from '../../utils/schemas'
/* react hook form */
import { useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

/* components */
import ButtonForm from '../form/ButtonForm'
import InputEmail from '../form/InputEmail'
import InputPassword from '../form/InputPassword'
import InputErrorMessage from '../form/InputErrorMessage'
import { Toaster, toast } from 'sonner'
import { IconCircleX } from '../icons/ReactIcons'

type Schema = z.infer<typeof simpleLoginSchema>

export default function LoginForm() {
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm<Schema>({
		resolver: zodResolver(simpleLoginSchema)
	})

	const setAdminCookie = () => {
		var now = new Date()
		var time = now.getTime()
		var expireTime = time + 5 * 24 * 60 * 60 * 1000
		now.setTime(expireTime)
		document.cookie = 'admin=true; expires=' + now.toUTCString() + '; path=/'
	}

	const handleLoginAdmin: SubmitHandler<Schema> = async ({ email, password }) => {
		if (email === 'jgra11.2010@gmail.com' || email === 'jeremyruanliang@gmail.com') {
			const { data, error } = await supabase.auth.signInWithPassword({
				email,
				password
			})

			if (error) {
				toast.error('La contraseña es incorrecta')
			} else {
				setAdminCookie()
				toast.success('Sesión iniciada correctamente')

				setTimeout(() => {
					location.reload()
				}, 2000)
			}
		} else {
			toast('No tienes permisos para acceder', {
				icon: <IconCircleX />
			})
		}
	}

	return (
		<>
			<form
				onSubmit={handleSubmit(handleLoginAdmin)}
				className='min-w-[350px] w-3/4 sm:min-w-0 max-w-[500px] bg-darkGray rounded-lg py-6 px-8 space-y-8'
			>
				<InputEmail register={register} required>
					{errors.email && <InputErrorMessage message={errors.email?.message} />}
				</InputEmail>

				<InputPassword register={register} required>
					{errors.password && (
						<InputErrorMessage message={errors.password?.message} />
					)}
				</InputPassword>

				<ButtonForm text='Iniciar Sesión' />
			</form>
			<Toaster theme='dark' position='top-right' richColors />
		</>
	)
}
