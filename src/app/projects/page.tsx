import Header from "@/app/header/header";
import styles from "./projects.module.css";

export default function ProjectsPage() {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <h1>Projects</h1>
                <p>Showcasing my work: customer websites, personal projects, web apps, and tools.</p>
                {/* Project content will be added here */}
            </div>
        </>
    );
}
