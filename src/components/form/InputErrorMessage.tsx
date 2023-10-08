type Props = {
	message: string | undefined
	styles?: string
}

export default function InputErrorMessage({ message, styles }: Props) {
	return (
		<span
			className={`text-red-700 text-xs absolute left-0 bottom-[-25px] ${styles}`}
			title={message}
		>
			{message}
		</span>
	)
}
