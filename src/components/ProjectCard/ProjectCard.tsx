import Link from 'next/link';
import styles from './ProjectCard.module.css';
import Badge from '../Badge/Badge';
interface ProjectCardProps {
    project: {
        id: string;
        title: string;
        description: string;
        category?: string;
        year?: string;
        tags: string[];
        link?: string;
        image?: string;
        icon?: string;
    };
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const { title, description, tags, link, year, category, image, icon } = project;

    const cardContent = (
        <>
            {image && (
                <div className={styles.imageContainer}>
                    <img src={image} alt={title} className={styles.image} />
                </div>
            )}
            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.titleSection}>
                        {icon && (
                            <img src={icon} alt={title} className={styles.icon} />
                        )}
                        <h3 className={styles.title}>{title}</h3>
                    </div>
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
            </div>
        </>
    );

    if (link) {
        return (
            <Link href={link} className={styles.projectCard}>
                {cardContent}
            </Link>
        );
    }

    return (
        <div className={styles.projectCard}>
            {cardContent}
        </div>
    );
}
