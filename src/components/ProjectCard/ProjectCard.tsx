import Link from 'next/link';
import styles from './ProjectCard.module.css';
import Badge from '../Badge/Badge';

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    link?: string;
    year?: string;
    category?: string;
}

export default function ProjectCard({ title, description, tags, link, year, category }: ProjectCardProps) {
    const CardWrapper = link ? Link : 'div';
    const wrapperProps = link ? { href: link } : {};

    return (
        <CardWrapper {...wrapperProps} className={styles.projectCard}>
            <div className={styles.header}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.meta}>
                    {year && <span className={styles.year}>{year}</span>}
                    {category && <span className={styles.category}>{category}</span>}
                </div>
            </div>
            <p className={styles.description}>{description}</p>
            <div className={styles.tags}>
                {tags.map((tag, index) => (
                    <Badge key={index} variant="default">{tag}</Badge>
                ))}
            </div>
        </CardWrapper>
    );
}
