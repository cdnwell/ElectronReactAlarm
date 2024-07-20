import {TimeChangeEvent} from "../clock/Clock";

interface Audio {
    src: string;
}

interface AlarmNotificationProps {
    audio?: Audio;
    title: string;
    body: string;
    interaction?: boolean;
}

export class AlarmNotification {
    private audio: Audio;
    private title: string;
    private body: string;
    private interaction: boolean;

    constructor({ audio, title, body, interaction }: AlarmNotificationProps ) {
        this.audio = audio || { src: '' };
        this.title = title;
        this.body = body;
        this.interaction = interaction || false;

    }

    getAudioSrc() {
        return this.audio.src;
    }

    setAudioSrc(src: string) {
        this.audio.src = src;
    }

    getTitle() {
        return this.title;
    }

    setTitle(title: string) {
        this.title = title;
    }

    setBody(body: string) {
        this.body = body;
    }

    getBody() {
        return this.body;
    }

    setInteraction(interaction: boolean) {
        this.interaction = interaction;
    }

    getInteraction() {
        return this.interaction;
    }

    show() {
        const notification = new Notification(this.title, {
            body: this.body
            , requireInteraction: this.interaction
        });
        const audio = new Audio(`${this.audio.src}`);
        notification.onshow = () => {
            audio.play();
        }
        notification.onclose = () => {
            audio.pause();
        }
    }

}
