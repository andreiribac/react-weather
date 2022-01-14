import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

import { Home, MonthStatistics } from './pages';
import { Header, PopUp, ThisDayItem } from './components';

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

function App() {
  return (
    <>
      <PopUp>
        <div className="current-day">
          <div className="df">
            <div class="card"><div class="h3">Сегодня</div><div>01 авг</div><svg class="card__img" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.0092 35.5016C30.3585 35.5016 35.5056 30.3547 35.5056 24.0058C35.5056 17.6568 30.3585 12.5099 24.0092 12.5099C17.6599 12.5099 12.5128 17.6568 12.5128 24.0058C12.5128 30.3547 17.6599 35.5016 24.0092 35.5016Z" fill="url(#paint5_linear)"></path><path d="M34.8135 2.40051L32.1118 8.92324C31.2312 11.0477 28.0444 9.72795 28.925 7.60352L31.6267 1.08079C32.5073 -1.04363 35.6941 0.276087 34.8135 2.40051ZM19.0727 40.3988L16.371 46.9215C15.4904 49.0459 12.3036 47.7262 13.1842 45.6018L15.8859 39.0791C16.7665 36.9546 19.9533 38.2743 19.0727 40.3988ZM46.9215 16.3748L40.3984 19.0763C38.2739 19.9569 36.9541 16.7703 39.0786 15.8897L45.6017 13.1882C47.7262 12.3076 49.046 15.4942 46.9215 16.3748ZM8.92137 32.1149L2.39833 34.8164C0.273802 35.697 -1.04598 32.5104 1.07855 31.6298L7.60158 28.9283C9.72611 28.0477 11.0459 31.2343 8.92137 32.1149ZM45.6017 34.8187L39.0786 32.1172C36.9541 31.2366 38.2739 28.05 40.3984 28.9306L46.9215 31.6321C49.046 32.5127 47.7262 35.6993 45.6017 34.8187ZM7.60158 19.0786L1.07855 16.3771C-1.04598 15.4965 0.273802 12.3099 2.39833 13.1905L8.92137 15.892C11.0459 16.7726 9.72611 19.9592 7.60158 19.0786ZM16.3687 1.0785L19.0704 7.60122C19.951 9.72565 16.7642 11.0454 15.8836 8.92094L13.1819 2.39821C12.3013 0.273788 15.4881 -1.04593 16.3687 1.0785ZM32.1095 39.0768L34.8112 45.5995C35.6918 47.7239 32.505 49.0436 31.6244 46.9192L28.9227 40.3965C28.0421 38.2721 31.2289 36.9523 32.1095 39.0768Z" fill="#FFB300"></path><defs><linearGradient id="paint5_linear" x1="24.0092" y1="12.5099" x2="24.0092" y2="35.1951" gradientUnits="userSpaceOnUse"><stop stop-color="#FFC227"></stop><stop offset="1" stop-color="#FFB300"></stop></linearGradient></defs></svg><div class="h3 no-margin">+18</div><div>+15</div><span>Облачно</span></div>
            <div className="current-day__info">
              <div className="current-day__info-box">
                {items.map((item) => {
                  return (
                    <ThisDayItem key={item.icon_id} item={item} />
                  )
                })}
              </div>
            </div>
          </div>

        </div>

      </ PopUp>
      <div className='wrapper'>
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="month" element={<MonthStatistics />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
