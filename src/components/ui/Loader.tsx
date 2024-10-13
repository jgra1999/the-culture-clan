import React from 'react'

export default function Loader() {
	return (
		<div className='absolute top-36 left-1/2 transform -translate-x-1/2'>
			<div className='w-10 h-10 lg:w-14 lg:h-14 border-4 border-mediumGray border-b-4 border-b-darkGray animate-spin z-50 rounded-full'></div>
		</div>
	)
}
