import React from 'react'
const classNames = require('classnames');


function ItemShape({ children, wmax, topBorder, ...props }) {
	return (
		<div className={classNames("item-shape", { wmax: wmax, 'item-shape--top-border': topBorder})} {...props}>
			{children}
		</div>
	)
}

export default ItemShape
