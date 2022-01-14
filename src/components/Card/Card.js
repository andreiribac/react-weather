import React from 'react'
import { GlobalSvgSelector } from '../../assets/icons/GlobalSvgSelector';

function Card({day}) {
	return (
		<div className='card'>
			<div>{day.day}</div>
			<div>{day.day_info}</div>
			<GlobalSvgSelector id={day.icon_id} />
			<div>{day.temp_day}</div>
			<div>{day.temp_night}</div>
			<div>{day.info}</div>
		</div>
	)
}

export default Card;
