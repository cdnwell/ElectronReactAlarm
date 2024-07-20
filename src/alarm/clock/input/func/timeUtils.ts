import {TIME} from "../../../enum/Time";

const isHourOver100 = (val: string): boolean => {
    return Number(val) >= 100;
}

const isMinuteOver60 = (val: string): boolean => {
    return Number(val) > 60;
}

const isSecondOver60 = (val: string): boolean => {
    return Number(val) > 60;
}

export const isOverLimit = (val: string, type: string): boolean | undefined => {
    switch (type) {
        case TIME.HOUR:
            return isHourOver100(val);
        case TIME.MINUTE:
            return isMinuteOver60(val);
        case TIME.SECOND:
            return isSecondOver60(val);
    }
}
