import styles from './Grid.module.css';
import { ReactNode } from 'react';

interface GridProps {
    children: ReactNode;
    columns?: 1 | 2 | 3 | 4;
    gap?: 'small' | 'medium' | 'large';
}

export default function Grid({ children, columns = 3, gap = 'medium' }: GridProps) {
    return (
        <div className={`${styles.grid} ${styles[`columns${columns}`]} ${styles[`gap${gap.charAt(0).toUpperCase() + gap.slice(1)}`]}`}>
            {children}
        </div>
    );
}
