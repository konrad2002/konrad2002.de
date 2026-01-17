import Header from "@/app/header/header";
import styles from "./cv.module.css";

export default function CVPage() {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <h1>Curriculum Vitae</h1>
                <p>Interactive overview of my education, experience, and skills.</p>
                {/* Interactive CV content will be added here */}
            </div>
        </>
    );
}
