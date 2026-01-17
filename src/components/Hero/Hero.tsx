import styles from './Hero.module.css';
import { ReactNode } from 'react';

interface HeroProps {
    title: string;
    subtitle?: string;
    children?: ReactNode;
    centered?: boolean;
}

export default function Hero({ title, subtitle, children, centered = false }: HeroProps) {
    return (
        <section className={`${styles.hero} ${centered ? styles.centered : ''}`}>
            <h1 className={styles.title}>{title}</h1>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            {children && <div className={styles.content}>{children}</div>}
        </section>
    );
}
