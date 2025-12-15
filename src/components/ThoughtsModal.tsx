"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import styles from "./ThoughtsModal.module.css";

interface ThoughtsModalProps {
    isOpen: boolean;
    onClose: () => void;
    thought: {
        title: string;
        date: string;
        content: string;
    } | null;
}

export default function ThoughtsModal({ isOpen, onClose, thought }: ThoughtsModalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!mounted || !isOpen || !thought) return null;

    return createPortal(
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>
                    <X size={20} />
                </button>

                <div className={styles.header}>
                    <h2 className={styles.title}>{thought.title}</h2>
                    <span className={styles.date}>{thought.date}</span>
                </div>

                <div className={styles.body}>
                    {thought.content}
                </div>
            </div>
        </div>,
        document.body
    );
}
