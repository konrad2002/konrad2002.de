import Header from "@/app/header/header";
import { getBioData } from "@/lib/data";
import styles from "./me.module.css";

export default function MePage() {
    const bioData = getBioData();

    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.hero}>
                    <h1>{bioData.intro.title}</h1>
                    <p className={styles.subtitle}>{bioData.intro.subtitle}</p>
                    <p className={styles.introContent}>{bioData.intro.content}</p>
                </div>

                <div className={styles.content}>
                    {bioData.sections.map((section) => (
                        <section key={section.id} className={styles.section}>
                            <h2>{section.title}</h2>
                            <p>{section.content}</p>
                        </section>
                    ))}
                </div>

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
        </>
    );
}
