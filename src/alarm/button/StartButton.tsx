import styles from './StartButton.module.scss';
import {StartButtonProps} from "../enum/Button";

export function StartButton({ onStartClick }: StartButtonProps) {
    return (
        <div className={styles.start_wrap}>
            <div className={styles.start_div} onClick={onStartClick}>
                <button className={styles.start_btn}>
                    <img className={styles.start_img} src={`${process.env.PUBLIC_URL}/icons/clock_icon.png`} alt="start button" />
                </button>
            </div>
        </div>
    )
}
