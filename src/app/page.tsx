import styles from "./page.module.css";
import Header from "@/app/header/header";
import Link from "next/link";
import Image from "next/image";
import { getFeaturedProjects, getRecentBlogPosts } from "@/lib/data";
import BlogPostCard from "@/components/BlogPostCard/BlogPostCard";
import ProjectCard from "@/components/ProjectCard/ProjectCard";

export default function Home() {
    const featuredProjects = getFeaturedProjects();
    const recentBlogPosts = getRecentBlogPosts(3);

    return (
        <>
            <Header />
            <div className={styles.page}>
                {/* Hero Section */}
                <div className={styles.hero}>
                    <div className={styles.heroBanner} />
                    <div className={styles.heroContent}>
                        <div className={styles.heroImageContainer}>
                            <Image
                                src="/images/konrad.png"
                                alt="Konrad Weiß"
                                width={200}
                                height={200}
                                className={styles.heroImage}
                                priority
                            />
                        </div>
                        <div className={styles.heroText}>
                            <h1 className={styles.mainTitle}>
                                <span className={styles.personLabel}>Konrad Weiß</span>
                                <span className={styles.titleContent}>
                                    — <a href="https://github.com/konrad2002">GitHub</a>
                                </span>
                            </h1>
                            <p className={styles.subtitle}>
                                CS Master Student & Software Developer
                            </p>
                            <p className={styles.description}>
                                Building useful software products and web applications.<br/>
                                Interested in IT security, software engineering and physics.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Featured Projects Section */}
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <h2>Featured Projects</h2>
                        <Link href="/projects" className={styles.viewAllLink}>
                            View all
                        </Link>
                    </div>
                    {featuredProjects.length > 0 ? (
                        <div className={styles.grid}>
                            {featuredProjects.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))}
                        </div>
                    ) : (
                        <p className={styles.noContent}>No featured projects yet</p>
                    )}
                </section>

                {/* Recent Blog Posts Section */}
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <h2>Latest Articles</h2>
                        <Link href="/blog" className={styles.viewAllLink}>
                            View all
                        </Link>
                    </div>
                    {recentBlogPosts.length > 0 ? (
                        <div className={styles.blogGrid}>
                            {recentBlogPosts.map((post) => (
                                <BlogPostCard
                                    key={post.id}
                                    title={post.title}
                                    excerpt={post.excerpt}
                                    date={post.date}
                                    tags={post.tags}
                                    slug={post.slug}
                                    readTime={post.readTime}
                                />
                            ))}
                        </div>
                    ) : (
                        <p className={styles.noContent}>No blog posts yet</p>
                    )}
                </section>

                {/* Quick Links Section */}
                <section className={styles.section}>
                    <h2>More</h2>
                    <div className={styles.quickLinks}>
                        <Link href="/cv" className={styles.quickLink}>
                            <span className={styles.linkTitle}>CV & Experience</span>
                            <span className={styles.linkSubtitle}>Education, skills, and projects</span>
                        </Link>
                        <Link href="/now" className={styles.quickLink}>
                            <span className={styles.linkTitle}>Now</span>
                            <span className={styles.linkSubtitle}>What I'm currently working on</span>
                        </Link>
                        <Link href="/me" className={styles.quickLink}>
                            <span className={styles.linkTitle}>About</span>
                            <span className={styles.linkSubtitle}>Background and interests</span>
                        </Link>
                    </div>
                </section>
            </div>
        </>
    );
}
