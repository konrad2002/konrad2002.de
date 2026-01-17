import Link from 'next/link';
import styles from './BlogPostCard.module.css';
import Badge from '../Badge/Badge';

interface BlogPostCardProps {
    title: string;
    excerpt: string;
    date: string;
    tags?: string[];
    slug: string;
    readTime?: string;
}

export default function BlogPostCard({ title, excerpt, date, tags = [], slug, readTime }: BlogPostCardProps) {
    return (
        <Link href={`/blog/${slug}`} className={styles.blogPostCard}>
            <div className={styles.meta}>
                <time className={styles.date}>{date}</time>
                {readTime && <span className={styles.readTime}>{readTime}</span>}
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.excerpt}>{excerpt}</p>
            {tags.length > 0 && (
                <div className={styles.tags}>
                    {tags.map((tag, index) => (
                        <Badge key={index} variant="secondary">{tag}</Badge>
                    ))}
                </div>
            )}
        </Link>
    );
}
