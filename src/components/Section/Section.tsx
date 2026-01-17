import styles from './Section.module.css';
import { ReactNode } from 'react';

interface SectionProps {
    title?: string;
    subtitle?: string;
    children: ReactNode;
    id?: string;
}

export default function Section({ title, subtitle, children, id }: SectionProps) {
    return (
        <section className={styles.section} id={id}>
            {title && (
                <div className={styles.header}>
                    <h2 className={styles.title}>{title}</h2>
                    {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                </div>
            )}
            <div className={styles.content}>
                {children}
            </div>
        </section>
    );
}
