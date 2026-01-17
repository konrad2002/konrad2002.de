import Link from 'next/link';
import styles from './Button.module.css';
import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    href?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'ghost';
    type?: 'button' | 'submit' | 'reset';
}

export default function Button({ children, href, onClick, variant = 'primary', type = 'button' }: ButtonProps) {
    const className = `${styles.button} ${styles[variant]}`;

    if (href) {
        return (
            <Link href={href} className={className}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className={className}>
            {children}
        </button>
    );
}
