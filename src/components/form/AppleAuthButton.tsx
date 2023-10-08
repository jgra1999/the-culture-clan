import { supabase } from '../../supabase/client'
import { IconBrandApple } from '../icons/ReactIcons'

export default function AppleAuthButton() {
	const handleAuthButton = async () => {
		const { data, error } = await supabase.auth.signInWithOAuth({
			provider: 'google',
			options: {
				queryParams: {
					access_type: 'offline',
					prompt: 'consent'
				}
			}
		})
	}
	return (
		<>
			<button
				onClick={handleAuthButton}
				className='flex items-start justify-center gap-x-1 border-2 border-mediumGray py-3 px-4 text-center rounded-lg mt-8 w-full opacity-50 hover:opacity-100'
			>
				<IconBrandApple />
				<span>Apple</span>
			</button>
		</>
	)
}
