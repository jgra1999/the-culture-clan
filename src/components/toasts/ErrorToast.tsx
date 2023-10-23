import { IconCircleX } from '../icons/ReactIcons'

export default function ErrorToast({ message }: { message: string | undefined }) {
	return (
		<div className='flex items-center gap-1'>
			<IconCircleX />
			<span>{message}</span>
		</div>
	)
}
