import React from 'react'
import { GlobalSvgSelector } from '../../assets/icons/GlobalSvgSelector';

function Card({day}) {
	return (
		<div className='card'>
			<div className='h3'>{day.day}</div>
			<div>{day.day_info}</div>
			<GlobalSvgSelector id={day.icon_id} className={"card__img"} />
			<div className='h3 no-margin'>{day.temp_day}</div>
			<div>{day.temp_night}</div>
			<span>{day.info}</span>
		</div>
	)
}

export default Card;
