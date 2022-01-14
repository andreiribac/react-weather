import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

import { Home, MonthStatistics } from './pages';
import { Header, PopUp, ThisDayItem } from './components';
import { GlobalSvgSelector } from './assets/icons/GlobalSvgSelector';

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
// TODO lesson 2 https://www.youtube.com/watch?v=W4h_fOVo8xI
function App() {
  return (
    <>
      <PopUp>
        <div className="current-day">
          <div className="df">
            <div className="current-day__main current-day__main--small">
              <div className="current-day__current-temperature">20°</div>
              <div className="current-day__current-day">Сегодня</div>
              <GlobalSvgSelector id='sun' className="current-day__current-img" />
              <div className="current-day__location">
                <div className="current-day__time">Время: <span>21:54</span></div>
                <div className="current-day__city">Город: <span>Санкт-Петербург</span></div>
              </div>
            </div>
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
