import Header from "@/app/header/header";
import Container from "@/components/Container/Container";
import Hero from "@/components/Hero/Hero";
import { getBioData } from "@/lib/data";
import styles from "./me.module.css";

export default function MePage() {
    const bioData = getBioData();

    return (
        <>
            <Header />
            <Container size="large">
                <Hero
                    title={bioData.intro.title}
                    subtitle={bioData.intro.subtitle}
                />

                <div className={styles.content}>
                    <p className={styles.introContent}>{bioData.intro.content}</p>

                    {bioData.sections.map((section) => (
                        <section key={section.id} className={styles.section}>
                            <h2>{section.title}</h2>
                            <p>{section.content}</p>
                        </section>
                    ))}

                    <div className={styles.skillsSection}>
                        <h2>Skills</h2>
                        <div className={styles.skillsGrid}>
                            {bioData.skills.map((skillGroup) => (
                                <div key={skillGroup.category} className={styles.skillGroup}>
                                    <h3>{skillGroup.category}</h3>
                                    <ul>
                                        {skillGroup.items.map((skill) => (
                                            <li key={skill}>{skill}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
