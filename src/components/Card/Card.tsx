import styles from './Card.module.css';
import { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
    href?: string;
}

export default function Card({ children, className = '', href }: CardProps) {
    const cardContent = (
        <div className={`${styles.card} ${className}`}>
            {children}
        </div>
    );

    if (href) {
        return (
            <a href={href} className={styles.cardLink}>
                {cardContent}
            </a>
        );
    }

    return cardContent;
}
