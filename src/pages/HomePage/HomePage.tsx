import {Button} from "@/shared/ui/Button/Button.tsx";
import styles from './HomePage.module.css';

export const HomePage = () => {
    return (
        <div className={styles.homePage}>
            <p>Добро пожаловать в мини-приложение Telegram!</p>
            <p>Welcome to mini App Telegram!</p>

            <div className={styles.buttons}>
                <Button variant="primary">Primary</Button>
                <Button variant="default">Default</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="danger">Danger</Button>
            </div>
        </div>
    );
};
