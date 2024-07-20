import styles from './Alarm.module.scss';
import {ProgressDot} from "./progress/ProgressDot";
import {Clock, TimeChangeEvent} from "./clock/Clock";
import {Buttons} from "./button/Buttons";
import {useEffect, useState} from "react";
import {AlarmNotification} from "./class/AlarmNotification";

export function Alarm() {
    const [time, setTime] = useState<TimeChangeEvent>({ hour: '', minute: '', second: '' });
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [firstTime, setFirstTime] = useState<TimeChangeEvent>({ hour: '', minute: '', second: '' });

    const onTimeChange = (time: TimeChangeEvent) => {
        setTime(time);

        console.log(time);
    }

    const onStartClick = () => {
        console.log(time);
        setIsRunning(true);
    }

    useEffect(() => {
        let timer: NodeJS.Timeout | undefined;

        if (isRunning) {
            setFirstTime(time);

            timer = setInterval(() => {
                setTime((prevTime) => {
                    let { hour, minute, second } = prevTime;
                    let h = parseInt(hour ?? 0);
                    let m = parseInt(minute ?? 0);
                    let s = parseInt(second ?? 0);

                    if (s > 0) {
                        s -= 1;
                    } else if (m > 0) {
                        m -= 1;
                        s = 59;
                    } else if (h > 0) {
                        h -= 1;
                        m = 59;
                        s = 59;
                    } else {
                        // 알람 끝 //
                        clearInterval(timer);
                        setIsRunning(false);

                        const NOTIFICATION_TITLE = '알람';
                        const NOTIFICATION_BODY = `${time.hour || '0'}:${time.minute || '0'}:${time.second || '0'} 알람이 완료되었습니다.`;
                        const audioSrc = `${process.env.PUBLIC_URL}/audio/alarm-short.mp3`;

                        const alarm = new AlarmNotification({
                            title: NOTIFICATION_TITLE
                            , body: NOTIFICATION_BODY
                            , audio: {
                                src: audioSrc
                            }
                            , interaction: true
                        });

                        alarm.show();

                        return {
                            hour: '',
                            minute: '',
                            second: '',
                        }
                    }

                    return {
                        hour: h ? h.toString() : '00',
                        minute: m ? m.toString() : '00',
                        second: s ? s.toString() : '00',
                    }
                });
            }, 1000);
        }

        return () => {
            if (timer) {
                clearInterval(timer);
            }
        }
    }, [isRunning]);

    return (
        <div className={styles.alarm_wrap}>
            <div className={styles.alarm_div}>
                <ProgressDot />
                <Clock onTimeChange={onTimeChange} time={time} />
                <Buttons onStartClick={onStartClick} />
            </div>
        </div>
    )
}
