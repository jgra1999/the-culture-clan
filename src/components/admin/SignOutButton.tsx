import { IconLogout } from '../icons/ReactIcons'
import { supabase } from '../../supabase/client'

export default function SignOutButton() {
	const handleSignOutUser = async () => {
		const { error } = await supabase.auth.signOut()
		console.log('🚀 ~ file: SignOutButton.tsx:7 ~ handleSignOutUser ~ error:', error)
	}
	return (
		<button
			onClick={handleSignOutUser}
			className='flex gap-x-3 items-center absolute left-4 bottom-10'
		>
			<IconLogout />
			Cerrar Sesión
		</button>
	)
}
