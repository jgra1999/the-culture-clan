import { supabase } from '../../supabase/client'

export default function GmailAuthButton() {
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
				<svg
					className='w-5 h-5'
					viewBox='0 0 24 24'
					strokeWidth='1.5'
					stroke='currentColor'
					fill='none'
					strokeLinecap='round'
					strokeLinejoin='round'
				>
					<path stroke='none' d='M0 0h24v24H0z' fill='none' />
					<path d='M16 20h3a1 1 0 0 0 1 -1v-14a1 1 0 0 0 -1 -1h-3v16z' />
					<path d='M5 20h3v-16h-3a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1z' />
					<path d='M16 4l-4 4l-4 -4' />
					<path d='M4 6.5l8 7.5l8 -7.5' />
				</svg>
				<span>Gmail</span>
			</button>
		</>
	)
}
