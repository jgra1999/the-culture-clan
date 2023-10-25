import { IconLogout } from '../icons/ReactIcons'
import { supabase } from '../../supabase/client'

export default function SignOutButton() {
	const deleteAdminCookie = () => {
		document.cookie = 'admin=true; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
	}

	const handleSignOutUser = async () => {
		const { error } = await supabase.auth.signOut()
		if (error) {
			console.log(
				'🚀 ~ file: SignOutButton.tsx:8 ~ handleSignOutUser ~ error:',
				error
			)
		} else {
			deleteAdminCookie()
			location.reload()
		}
	}
	return (
		<button onClick={handleSignOutUser} className='flex gap-x-3 items-center'>
			<IconLogout />
			Cerrar Sesión
		</button>
	)
}
