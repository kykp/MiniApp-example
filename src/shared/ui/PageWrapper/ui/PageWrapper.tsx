import React, { PropsWithChildren } from "react";
import styles from "./PageWrapper.module.css";

export const PageWrapper: React.FC<PropsWithChildren> = ({ children }) => {
    return <div className={styles.wrapper}>{children}</div>;
};
