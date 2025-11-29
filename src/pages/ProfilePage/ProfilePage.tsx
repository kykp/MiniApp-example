import { useUserStore } from '@/entities/user/model/store.ts';
import { Link } from 'react-router-dom';
import styles from './ProfilePage.module.css';

export const ProfilePage = () => {
    const { profile } = useUserStore();

    return (
        <div className={styles.wrapper}>
            <h1>Профиль</h1>
            <div>ID: {profile?.id}</div>
            <div>Username: {profile?.username}</div>
            <Link to="/">Назад</Link>
        </div>
    );
};
