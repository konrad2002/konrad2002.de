'use client';

import styles from "./header.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const closeMenu = () => setIsOpen(false);

    return (
        <header className={styles.header}>
            <Link href="/" className={styles.headerTitle}>Konrad Weiß</Link>
            
            <button 
                className={styles.menuButton} 
                onClick={toggleMenu}
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
            >
                <span className={styles.menuIcon}></span>
                <span className={styles.menuIcon}></span>
                <span className={styles.menuIcon}></span>
            </button>

            <nav className={`${styles.headerLinks} ${isOpen ? styles.open : ''}`}>
                <Link className={styles.headerLink} href="/projects" onClick={closeMenu}>Projects</Link>
                <Link className={styles.headerLink} href="/blog" onClick={closeMenu}>Blog</Link>
                <Link className={styles.headerLink} href="/now" onClick={closeMenu}>Now</Link>
                <Link className={styles.headerLink} href="/me" onClick={closeMenu}>About</Link>
                <Link className={styles.headerLink} href="/cv" onClick={closeMenu}>CV</Link>
            </nav>
        </header>
    )
}