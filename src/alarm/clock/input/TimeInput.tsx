import {ChangeEvent, useEffect, useState} from "react";

import styles from './TimeInput.module.scss';
import {isOverLimit} from "./func/timeUtils";
import {TIME} from "../../enum/Time";

interface TimeInputProps {
    onTimeChange: (newValue: string, type: string) => void;
    type: string;
    time: { hour: string, minute: string, second: string };
}

export function TimeInput({ type, onTimeChange, time }: TimeInputProps ) {
    const [timeVal, setTimeVal] = useState<string>();

    const onChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
        let value = evt.currentTarget.value;
        value = value.replace(/\D/g, '');

        // value = isOverLimit(value, type) ?? ''
        // 숫자가 임계치를 넘으면 새로운 숫자를 적용하지 않는다.
        if(isOverLimit(value, type)) return;

        setTimeVal(value);

        onTimeChange(value, type);
    }

    useEffect(() => {
        switch (type) {
            case TIME.HOUR:
                setTimeVal(time.hour);
                break;
            case TIME.MINUTE:
                setTimeVal(time.minute);
                break;
            case TIME.SECOND:
                setTimeVal(time.second);
                break;
        }
    }, [time]);

    return (
        <input className={styles.time_input}
               type="text"
               placeholder="00"
               onChange={onChangeHandler}
               value={timeVal}
        />
    )
};
