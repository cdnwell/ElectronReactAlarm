import styles from './ProgressDot.module.scss';
import {Dot} from "./component/Dot";

export function ProgressDot() {
    const dotEa = 3;

    return (
        <div className={styles.progress_dot_div}>
            {Array.from({ length: dotEa }).map((_, i) => (
                <div className={styles.dot_div}>
                    <Dot />
                </div>
            ))}
        </div>
    )
}
