import styles from './Buttons.module.scss';
import {PauseButton} from "./PauseButton";
import {StopButton} from "./StopButton";
import {StartButton} from "./StartButton";
import {StartButtonProps} from "../enum/Button";

export function Buttons({ onStartClick }: StartButtonProps) {
    return (
        <div className={styles.btn_wrap}>
            <div className={styles.btn_div}>
                <PauseButton />
                <StopButton />
            </div>
            <div className={styles.start_btn_div}>
                <StartButton onStartClick={onStartClick} />
            </div>
        </div>
    )
}
