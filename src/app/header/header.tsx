import styles from "./header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <span className={styles.headerTitle}>Konrad Weiß</span>
            <div className={styles.headerLinks}>
                <a className={styles.headerLink} href={'/projects'}>Projects</a>
                <a className={styles.headerLink} href={'/tools'}>Tools</a>
                <a className={styles.headerLink} href={'/me'}>Me</a>
            </div>
        </header>
    )
}