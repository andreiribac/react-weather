import React from 'react';

import './Home.scss';
import { Days, ThisDay, ThisDayInfo } from '../../components';

function Home() {
	return (
		<>
			<div className="current-day">
				<div className="current-day__row">
					<ThisDay />
					<ThisDayInfo />
				</div>
				<Days />
			</div>

		</>
	)
}

export default Home
