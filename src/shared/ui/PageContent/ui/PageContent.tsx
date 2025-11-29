import React, { ReactNode } from "react";
import styles from "./PageContent.module.css";

interface PageContentProps {
    children: ReactNode;
}

export const PageContent = ({ children }: PageContentProps) => {
    return <div className={styles.content}>{children}</div>;
};
