import React from 'react'


function ItemShape({ children, wmax, topBorder, ...props }) {
	const classNames = require('classnames');
	return (
		<div className={classNames("item-shape", { wmax: wmax, 'item-shape--top-border': topBorder})} {...props}>
			{children}
		</div>
	)
}

export default ItemShape
