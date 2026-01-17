import Header from "@/app/header/header";
import Container from "@/components/Container/Container";
import Hero from "@/components/Hero/Hero";
import Badge from "@/components/Badge/Badge";
import { getNowData } from "@/lib/data";
import styles from "./now.module.css";

export default function NowPage() {
    const data = getNowData();
    const lastUpdated = new Date(data.lastUpdated).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <>
            <Header />
            <Container size="small">
                <Hero
                    title="What I'm Doing Now"
                    subtitle={`Last updated: ${lastUpdated}`}
                />

                <p className={styles.description}>
                    This is a <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer">now page</a>, inspired by <a href="https://sive.rs/" target="_blank" rel="noopener noreferrer">Derek Sivers</a>. It's a snapshot of what I'm currently focused on.
                </p>

                <div className={styles.sections}>
                    {data.sections.map((section, index) => (
                        <div key={index} className={styles.section}>
                            <h2 className={styles.sectionTitle}>{section.title}</h2>
                            <p className={styles.sectionContent}>{section.content}</p>
                            {section.tags && section.tags.length > 0 && (
                                <div className={styles.tags}>
                                    {section.tags.map(tag => (
                                        <Badge key={tag} variant="default">{tag}</Badge>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </Container>
        </>
    );
}
