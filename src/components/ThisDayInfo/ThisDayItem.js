import React from 'react'
import { ItemShape } from '..'
import { IndicatorSvgSelector } from '../../assets/icons/IndicatorSvgSelector'


function ThisDayItem({item}) {
	return (
		<div className="current-day__info-item">
			<ItemShape>
				<IndicatorSvgSelector id={item.icon_id} className='current-day__info-img' />
			</ItemShape>
			<div className="current-day__info-title">{item.name}</div>
			<div className="current-day__info-value">{item.value}</div>
		</div>
	)
}

export default ThisDayItem
