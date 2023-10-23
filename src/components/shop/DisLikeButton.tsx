import { useState } from 'react'
import { IconThumbDown } from '../icons/ReactIcons'

export default function DisLikeButton() {
	const [disabledDisLikeButton, setDisabledDisLikeButton] = useState(false)

	const handleDisLikesButton = () => {
		setDisabledDisLikeButton(true)
	}

	return (
		<button
			onClick={handleDisLikesButton}
			disabled={disabledDisLikeButton}
			className={`pl-2 hover:opacity-100 ${
				disabledDisLikeButton
					? 'cursor-default opacity-100'
					: 'cursor-pointer opacity-50'
			}`}
		>
			<IconThumbDown fill={disabledDisLikeButton ? 'white' : ''} />
		</button>
	)
}
