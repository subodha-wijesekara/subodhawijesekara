"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import styles from "./ArticlesModal.module.css";

interface ArticlesModalProps {
    isOpen: boolean;
    onClose: () => void;
    article: {
        title: string;
        date: string;
        content: string;
        mediumLink: string;
    } | null;
}

export default function ArticlesModal({ isOpen, onClose, article }: ArticlesModalProps) {
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

    if (!mounted || !isOpen || !article) return null;

    return createPortal(
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>
                    <X size={24} />
                </button>

                <div className={styles.header}>
                    <h2 className={styles.title}>{article.title}</h2>
                    <span className={styles.date}>{article.date}</span>
                </div>

                <div className={styles.body}>
                    {article.content}
                </div>

                <a
                    href={article.mediumLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.mediumLink}
                >
                    Read full story on Medium
                </a>
            </div>
        </div>,
        document.body
    );
}
