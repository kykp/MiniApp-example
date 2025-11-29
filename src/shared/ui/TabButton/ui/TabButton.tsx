import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import styles from "./TabButton.module.css";

type TabButtonProps = {
    icon: ReactNode;
    label: string;
    to: string;
};

export const TabButton: React.FC<TabButtonProps> = ({ icon, label, to }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                isActive ? `${styles.tab} ${styles.active}` : styles.tab
            }
            aria-label={label}
        >
      <span className={styles.icon} aria-hidden>
        {icon}
      </span>
            <span className={styles.label}>{label}</span>
        </NavLink>
    );
};
