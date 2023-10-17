import { IconCircleCheck } from '../icons/ReactIcons'

export default function SuccessToast({ message }: { message: string }) {
	return (
		<div className='flex items-center gap-1'>
			<IconCircleCheck />
			<span>{message}</span>
		</div>
	)
}
