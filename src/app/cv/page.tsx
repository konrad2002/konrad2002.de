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

                <Section title="Skills">
                    <div className={styles.skills}>
                        <div className={styles.skillsGroup}>
                            <h3 className={styles.skillsHeading}>Technical</h3>
                            <div className={styles.badgeList}>
                                {cv.skills.technical.map(skill => (
                                    <Badge key={skill} variant="default">{skill}</Badge>
                                ))}
                            </div>
                        </div>
                        <div className={styles.skillsGroup}>
                            <h3 className={styles.skillsHeading}>Soft Skills</h3>
                            <div className={styles.badgeList}>
                                {cv.skills.soft.map(skill => (
                                    <Badge key={skill} variant="secondary">{skill}</Badge>
                                ))}
                            </div>
                        </div>
                    </div>
                </Section>
            </Container>
        </>
    );
}
