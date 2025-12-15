"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { Download, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [beamStyle, setBeamStyle] = useState({ left: 0, width: 0, opacity: 0 });
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        // Calculate position relative to the navbar container
        if (navRef.current && e.currentTarget) {
            const navRect = navRef.current.getBoundingClientRect();
            const linkRect = e.currentTarget.getBoundingClientRect();

            setBeamStyle({
                left: linkRect.left - navRect.left,
                width: linkRect.width,
                opacity: 1
            });
        }
    };

    return (
        <nav ref={navRef} className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
            <div className={styles.navbarInner}>
                <Link href="/" className={styles.logo}>
                    SW.
                </Link>

                <ul className={styles.navLinks}>
                    <li><Link href="#projects" className={styles.navItem} onClick={handleLinkClick}>Projects</Link></li>
                    <li><Link href="#portfolio" className={styles.navItem} onClick={handleLinkClick}>Portfolio</Link></li>
                    <li><Link href="#thoughts" className={styles.navItem} onClick={handleLinkClick}>Thoughts</Link></li>
                    <li><Link href="#articles" className={styles.navItem} onClick={handleLinkClick}>Articles</Link></li>
                    <li><Link href="#contact" className={styles.navItem} onClick={handleLinkClick}>Contact</Link></li>
                </ul>

                <div className={styles.navActions}>
                    <a href="/cv.pdf" download className={styles.ctaButton}>
                        <Download size={14} />
                        Download CV
                    </a>
                    <ThemeToggle />

                    {/* Mobile Toggle */}
                    <button
                        className={styles.mobileToggle}
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                    >
                        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${styles.mobileMenu} ${isMobileOpen ? styles.open : ""}`}>
                <ul className={styles.mobileLinks}>
                    <li><Link href="#projects" onClick={() => setIsMobileOpen(false)}>Projects</Link></li>
                    <li><Link href="#portfolio" onClick={() => setIsMobileOpen(false)}>Portfolio</Link></li>
                    <li><Link href="#thoughts" onClick={() => setIsMobileOpen(false)}>Thoughts</Link></li>
                    <li><Link href="#articles" onClick={() => setIsMobileOpen(false)}>Articles</Link></li>
                    <li><Link href="#contact" onClick={() => setIsMobileOpen(false)}>Contact</Link></li>
                </ul>

                <a href="/cv.pdf" download className={styles.mobileCta}>
                    <Download size={20} />
                    Download CV
                </a>

                <div style={{ marginTop: "2rem", transform: "scale(1.5)" }}>
                    <ThemeToggle />
                </div>
            </div>

            {/* Active Beam */}
            <div
                className={styles.activeBeam}
                style={{
                    left: `${beamStyle.left}px`,
                    width: `${beamStyle.width}px`,
                    opacity: beamStyle.opacity
                }}
            />
        </nav>
    );
}
