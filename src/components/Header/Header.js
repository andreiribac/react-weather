import React, { useState, useEffect} from 'react';
import Select from 'react-select'

import { GlobalSvgSelector } from '../../assets/icons/GlobalSvgSelector';
import { useTheme } from '../../hooks/useTheme';
import { Theme } from '../../context/ThemeContext';

import './Header.scss';


function Header() {
	const theme = useTheme();
	const options = [
		{ value: 'city-1', label: 'Санкт-Петербург' },
		{ value: 'city-2', label: 'Москва' },
		{ value: 'city-3', label: 'Новгород' },
	];

	const colourStyles = {
		control: (styles) => ({
			...styles,
			backgroundColor: theme.theme === Theme.DARK ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
			// 	theme.theme === Theme.DARK ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
			width: '194px',
			height: '38px',
			border: 'none',
			borderRadius: '10px',
			zIndex: 100,
		}),
		singleValue: (styles) => ({
			...styles,
			color: theme.theme === Theme.DARK ? '#fff' : '#000',
			// color: theme.theme === 'light' ? 'dark' : 'light',
		}),
	};

	

	function changeTheme() {
		theme.changeTheme(theme.theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
	}

	return (
		<header className='header'>
			<div className="header__row">
				<div className="logo">
					<GlobalSvgSelector id='logo' className="logo__img" />
					<span className="logo__title">React weather</span>
				</div>
				<div className="header__filter">
					<div
						className="change-theme"
						onClick={changeTheme}
					>
						<GlobalSvgSelector id='change-theme' className="change-theme__img" />
					</div>
					<Select
						defaultValue={options[0]}
						styles={colourStyles}
						options={options}
					/>
				</div>
			</div>
		</header>
	)
}

export default Header;
