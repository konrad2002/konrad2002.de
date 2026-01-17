import styles from './Container.module.css';
import { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
    size?: 'small' | 'medium' | 'large' | 'full';
}

export default function Container({ children, size = 'medium' }: ContainerProps) {
    return (
        <div className={`${styles.container} ${styles[size]}`}>
            {children}
        </div>
    );
}
