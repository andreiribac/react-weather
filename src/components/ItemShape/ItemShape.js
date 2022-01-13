import React from 'react'

function ItemShape({children, ...props}) {
	return (
		<div className='item-shape' {...props}>
			{children}	
		</div>
	)
}

export default ItemShape
