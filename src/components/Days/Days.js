import React from 'react'
import { ItemShape, Card } from '..';

function Days() {
	const days = [
		{
			day: 'Сегодня',
			day_info: '01 авг',
			icon_id: 'sun',
			temp_day: '+18',
			temp_night: '+15',
			info: 'Облачно',
		},
		{
			day: 'Завтра',
			day_info: '02 авг',
			icon_id: 'small_rain_sun',
			temp_day: '+18',
			temp_night: '+15',
			info: 'небольшой дождь и солнце',
		},
		{
			day: 'Ср',
			day_info: '03 авг',
			icon_id: 'small_rain',
			temp_day: '+18',
			temp_night: '+15',
			info: 'небольшой дождь',
		},
		{
			day: 'Чт',
			day_info: '04 авг',
			icon_id: 'mainly_cloudy',
			temp_day: '+18',
			temp_night: '+15',
			info: 'Облачно',
		},
		{
			day: 'Пт',
			day_info: '05 авг',
			icon_id: 'rain',
			temp_day: '+18',
			temp_night: '+15',
			info: 'Облачно',
		},
		{
			day: 'Сб',
			day_info: '06 авг',
			icon_id: 'sun',
			temp_day: '+18',
			temp_night: '+15',
			info: 'Облачно',
		},
		{
			day: 'Вс',
			day_info: '07 авг',
			icon_id: 'sun',
			temp_day: '+18',
			temp_night: '+15',
			info: 'Облачно',
		},
	];
	return (
		<>
			<ItemShape topBorder>
				{
					days.map(day => {
						return (
							<Card key={day.day_info} day={day} />
						);
					})
				}

			</ItemShape>
		</>
	)
}

export default Days
