import styles from "./Footer.module.css";
import { Github, Linkedin, Facebook, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.socials}>
                <a href="https://www.linkedin.com/in/rscwijesekara/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <Linkedin size={20} />
                </a>
                <a href="https://github.com/subodha-wijesekara" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <Github size={20} />
                </a>
                <a href="https://web.facebook.com/wijesekararsc" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <Facebook size={20} />
                </a>
                <a href="https://www.instagram.com/subodhaoninsta" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <Instagram size={20} />
                </a>
                <a href="https://x.com/WijesekaraSC" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                </a>
            </div>
            <p className={styles.copy}>
                &copy; {new Date().getFullYear()} Subodha Wijesekara. All rights reserved.
            </p>
        </footer >
    );
}
