import React from 'react'
import { ItemShape } from '..';
import { GlobalSvgSelector } from '../../assets/icons/GlobalSvgSelector';

function ThisDay() {
	return (
		<ItemShape>
			<div className="current-day__main">
				<div className="current-day__row">
					<div>
						<div className="current-day__current-temperature">20°</div>
						<div className="current-day__current-day">Сегодня</div>
					</div>
					<GlobalSvgSelector id='sun' className="current-day__current-img" />
				</div>
				<div className='current-day__location'>
					<div className="current-day__time">Время: <span>21:54</span></div>
					<div className="current-day__city">Город: <span>Санкт-Петербург</span></div>
				</div>
			</div>
		</ItemShape>
	)
}

export default ThisDay;
