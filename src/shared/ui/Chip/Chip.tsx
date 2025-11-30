import React from "react";
import styles from "./Chip.module.css";

interface ChipProps {
    label: string;
    onDelete?: () => void;
}

export const Chip: React.FC<ChipProps> = ({ label, onDelete }) => {
    return (
        <div className={styles.chip}>
            <span>{label}</span>
            {onDelete && (
                <span className={styles.chipDelete} onClick={onDelete}>✕</span>
            )}
        </div>
    );
};
