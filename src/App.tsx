import './common.css';
import './colors.css'

import React from 'react';

import styles from './App.module.scss';

import {Alarm} from "./alarm/Alarm";
import {AlarmMenu} from "./menu/AlarmMenu";

function App() {
  return (
      <div className={styles.app_wrap}>
          <div className={styles.app_alarm}>
              {Array.from({ length: 4}).map((_, index) => (
                  <div className={styles.app_alarm_item}>
                    <Alarm key={index} />
                  </div>
              ))}
          </div>
          <nav className={styles.app_nav}>
            <AlarmMenu />
          </nav>
      </div>
  );
}

export default App;
