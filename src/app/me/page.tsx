import Header from "@/app/header/header";
import styles from "./me.module.css";

export default function MePage() {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <h1>About Me</h1>
                <p>CS Master student and software developer passionate about building useful tools and products.</p>
                {/* Bio content will be added here */}
            </div>
        </>
    );
}
