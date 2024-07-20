import styles from './AlarmMenu.module.scss';

export function AlarmMenu() {
    const alarmTitle = "알람";

    return (
        <div className={styles.alarm_menu_wrap}>
            <button className={styles.alarm_menu} title={alarmTitle}>
                <img src={`${process.env.PUBLIC_URL}/icons/freepick_alarm_icon.png`} alt="Alarm" />
            </button>
        </div>
    )
}
