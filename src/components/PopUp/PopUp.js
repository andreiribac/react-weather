import React from 'react'
import { ItemShape } from '..';
import { GlobalSvgSelector } from '../../assets/icons/GlobalSvgSelector';

function PopUp({ children }) {
	return (
		<div className='popup'>
			<div className="popup__body">
				<ItemShape>
					{children}
					<div className="popup__close-btn">
						<GlobalSvgSelector id={'close'} className='popup__close-img' />
					</div>
				</ItemShape>
			</div>
		</div>
	)
}

export default PopUp
