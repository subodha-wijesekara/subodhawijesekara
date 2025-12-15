"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import styles from "./Navbar.module.css"; // Reuse navbar styles for button

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className={styles.ctaButton} style={{ width: 36, padding: 0 }} />;
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={styles.ctaButton}
            style={{ padding: "0 8px", minWidth: "36px", justifyContent: "center" }}
            aria-label="Toggle theme"
        >
            {theme === "dark" ? (
                <Sun size={18} />
            ) : (
                <Moon size={18} />
            )}
        </button>
    );
}
