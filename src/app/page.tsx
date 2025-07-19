import styles from "./page.module.css";
import Header from "@/app/header/header";

export default function Home() {
    return (
        <>
            <Header />
            <div className={styles.page}>
                <h1 className={styles.mainTitle}><span className={styles.personLabel}>Konrad Weiß</span><span
                    className={styles.titleContent}> — <a href={'https://github.com/konrad2002'}>GitHub</a></span></h1>
            </div>
        </>
    );
}
