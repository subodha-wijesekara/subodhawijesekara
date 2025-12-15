"use client";

import React from "react";
import styles from "./AuroraBackground.module.css";

export default function AuroraBackground() {
    return (
        <div className={styles.main}>
            <div className={styles.content} />
            <div className={styles.spotlight} />
            <div className={styles.mesh} />
        </div>
    );
}
