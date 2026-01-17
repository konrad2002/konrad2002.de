import Header from "@/app/header/header";
import Container from "@/components/Container/Container";
import Hero from "@/components/Hero/Hero";
import Section from "@/components/Section/Section";
import Timeline from "@/components/Timeline/Timeline";
import Badge from "@/components/Badge/Badge";
import { getCVData } from "@/lib/data";
import styles from "./cv.module.css";

export default function CVPage() {
    const cv = getCVData();

    return (
        <>
            <Header />
            <Container size="large">
                <Hero
                    title="Curriculum Vitae"
                    subtitle="Education, professional experience, and core skills."
                />

                <Section title="Experience">
                    <Timeline items={cv.experience} />
                </Section>

                <Section title="Education">
                    <Timeline items={cv.education} />
                </Section>

                <Section title="Projects">
                    <Timeline items={cv.projects.map(p => ({
                        year: p.year,
                        title: p.title,
                        organization: '',
                        description: p.description,
                        tags: p.tags
                    }))} />
                </Section>

                <Section title="Honors and Awards">
                    <div className={styles.honors}>
                        {cv.honors.map(honor => (
                            <div key={honor.title} className={styles.honorItem}>
                                <div className={styles.honorYear}>{honor.year}</div>
                                <div className={styles.honorContent}>
                                    <h3 className={styles.honorTitle}>{honor.title}</h3>
                                    <div className={styles.honorOrganization}>{honor.organization}</div>
                                    <p className={styles.honorDescription}>{honor.description}</p>
                                    {honor.link && (
                                        <a href={honor.link} target="_blank" rel="noopener noreferrer" className={styles.honorLink}>
                                            Learn more →
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </Section>

                <Section title="Skills">
                    <div className={styles.skills}>
                        <div className={styles.skillsGroup}>
                            <h3 className={styles.skillsHeading}>Technical Skills</h3>
                            <div className={styles.badgeList}>
                                {cv.skills.technical.map(skill => (
                                    <Badge key={skill} variant="default">{skill}</Badge>
                                ))}
                            </div>
                        </div>
                        <div className={styles.skillsGroup}>
                            <h3 className={styles.skillsHeading}>Languages</h3>
                            <div className={styles.badgeList}>
                                {cv.skills.languages.map(language => (
                                    <Badge key={language} variant="secondary">{language}</Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                </Section>
            </Container>
        </>
    );
}
