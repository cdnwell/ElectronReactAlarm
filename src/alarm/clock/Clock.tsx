import styles from './Clock.module.scss';
import {TimeInput} from "./input/TimeInput";
import {TimeSeparator} from "./seperator/TimeSeparator";
import {TIME} from "../enum/Time";
import {useState} from "react";

export interface TimeChangeEvent {
    hour: string;
    minute: string;
    second: string;
}

interface ClockProps {
    onTimeChange: (time: TimeChangeEvent) => void;
    time: { hour: string, minute: string, second: string };
}

export function Clock({ onTimeChange, time }: ClockProps) {
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');
    const [second, setSecond] = useState('');

    const handleTimeChange = (newTime: string, type: string) => {
        switch (type) {
            case TIME.HOUR:
                setHour(newTime);
                onTimeChange({ hour: newTime, minute, second });
                break;
            case TIME.MINUTE:
                setMinute(newTime);
                onTimeChange({ hour, minute: newTime, second });
                break;
            case TIME.SECOND:
                setSecond(newTime);
                onTimeChange({ hour, minute, second: newTime });
                break;
        }

    }

    return (
        <div className={styles.clock_wrap}>
            <TimeInput type={TIME.HOUR} onTimeChange={handleTimeChange} time={time} />
            <TimeSeparator />
            <TimeInput type={TIME.MINUTE} onTimeChange={handleTimeChange} time={time} />
            <TimeSeparator />
            <TimeInput type={TIME.SECOND} onTimeChange={handleTimeChange} time={time} />
        </div>
    )
}
