import React from 'react';

import './Home.scss';
import { ThisDay, ThisDayInfo } from '../../components';

function Home() {
	return (
		<>
			<div className="current-day">
				<div className="current-day__row">
					<ThisDay />
					<ThisDayInfo />
				</div>
			</div>

		</>
	)
}

export default Home
