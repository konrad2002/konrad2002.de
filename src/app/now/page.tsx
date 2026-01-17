import Header from "@/app/header/header";
import styles from "./now.module.css";

export default function NowPage() {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <h1>What I'm Doing Now</h1>
                <p className={styles.subtitle}>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>
                {/* Now content will be added here */}
                <p>This is a <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer">now page</a>, inspired by Derek Sivers.</p>
            </div>
        </>
    );
}
