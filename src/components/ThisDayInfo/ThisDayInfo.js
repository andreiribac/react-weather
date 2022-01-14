import React from 'react'
import { ItemShape } from '..';

import cloudBg from '../../assets/img/cloud.png'
import ThisDayItem from './ThisDayItem';

function ThisDayInfo() {
	const items = [
		{
			icon_id: 'temp',
			name: 'Температура',
			value: '20° - ощущается как 17°',
		},
		{
			icon_id: 'pressure',
			name: 'Давление',
			value: '765 мм ртутного столба - нормальное',
		},
		{
			icon_id: 'precipitation',
			name: 'Осадки',
			value: 'Без осадков',
		},
		{
			icon_id: 'wind',
			name: 'Ветер',
			value: '3 м/с юго-запад - легкий ветер',
		},
	];
	return (
		<ItemShape wmax>
			<div className="current-day__info">
				<img src={cloudBg} alt="" className="current-day__info-bg-img" />
				<div className="current-day__info-box">
					{items.map((item) => {
						return (
							<ThisDayItem key={item.icon_id} item={item} />
						)
					})}
				</div>
			</div>
		</ItemShape>
	)
}

export default ThisDayInfo;
