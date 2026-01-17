import styles from "./header.module.css";
import Link from "next/link";

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.headerTitle}>Konrad Weiß</Link>
            <nav className={styles.headerLinks}>
                <Link className={styles.headerLink} href="/projects">Projects</Link>
                <Link className={styles.headerLink} href="/blog">Blog</Link>
                <Link className={styles.headerLink} href="/now">Now</Link>
                <Link className={styles.headerLink} href="/me">About</Link>
                <Link className={styles.headerLink} href="/cv">CV</Link>
            </nav>
        </header>
    )
}