import React from 'react'

function Tabs() {
	const tabs = [
		{
			value: 'На неделю',
		},
		{
			value: 'На 10 дней',
		},
		{
			value: 'На месяц',
		},
	];
	return (
		<div className='tabs'>
			{tabs.map(tab => (
				<div className='btn' key={tab.value}>
					{tab.value}
				</div>
			))}
			<div className='btn'>Отменить</div>
		</div>
	)
}

export default Tabs;
