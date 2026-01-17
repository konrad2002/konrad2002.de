import styles from './Timeline.module.css';
import Badge from '../Badge/Badge';

interface TimelineItemProps {
    year: string;
    title: string;
    organization: string;
    description: string;
    tags?: string[];
}

interface TimelineProps {
    items: TimelineItemProps[];
}

export default function Timeline({ items }: TimelineProps) {
    return (
        <div className={styles.timeline}>
            {items.map((item, index) => (
                <div key={index} className={styles.timelineItem}>
                    <div className={styles.timelineMarker}>
                        <div className={styles.timelineDot}></div>
                        {index < items.length - 1 && <div className={styles.timelineLine}></div>}
                    </div>
                    <div className={styles.timelineContent}>
                        <div className={styles.year}>{item.year}</div>
                        <h3 className={styles.title}>{item.title}</h3>
                        <div className={styles.organization}>{item.organization}</div>
                        <p className={styles.description}>{item.description}</p>
                        {item.tags && item.tags.length > 0 && (
                            <div className={styles.tags}>
                                {item.tags.map((tag, tagIndex) => (
                                    <Badge key={tagIndex} variant="default">{tag}</Badge>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
