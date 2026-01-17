import Header from "@/app/header/header";
import styles from "./blog.module.css";

export default function BlogPage() {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <h1>Blog</h1>
                <p>Articles about software development, projects, and learnings.</p>
                {/* Blog posts will be added here */}
            </div>
        </>
    );
}
