import {useNavigate} from "react-router-dom";
import {Button} from "@/shared/ui";
import {ROUTES} from "@/shared/config";
import styles from './HomePage.module.css';

export const HomePage = () => {
    const navigate = useNavigate();

    const handleTrack = () => navigate(ROUTES.track)

    return (
        <div className={styles.homePage}>
            <p>Welcome to mini App Telegram!</p>

            <div className={styles.create_button}>
                <Button variant="primary" onClick={handleTrack}>Создать отслеживание</Button>
            </div>

            <div className={styles.card}>

                <div className={styles.header}>
                    <span className={styles.status}>STATUS</span>
                    <h3 className={styles.title}>Tracking title</h3>
                </div>

                <div className={styles.content}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, suscipit, totam! Adipisci aliquam
                    animi aperiam at atque aut beatae consequuntur deleniti deserunt doloribus eum eveniet facere fugit,
                    id in nam nihil.
                </div>
            </div>
        </div>
    );
};
