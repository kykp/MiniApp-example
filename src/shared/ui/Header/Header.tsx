import React from "react";
import styles from "./Header.module.css";
import {useUserStore} from "@/entities/user";

export const Header = () => {
    const {profile} = useUserStore();

    const userName = profile?.username ?? 'user';
    const premiumInfo = profile?.isPremium ? 'Premium' : 'Trial';

    return (
        <header className={styles.header}>
            <div className={styles.info}>
                <span>{userName}</span>
                <span>{premiumInfo}</span>
            </div>
        </header>
    )
};
