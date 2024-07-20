import styles from './PauseButton.module.scss';

export function PauseButton() {
    return (
        <button className={styles.pause_btn} type="button">멈춤</button>
    )
}
