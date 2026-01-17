import Header from "@/app/header/header";
import Container from "@/components/Container/Container";
import Hero from "@/components/Hero/Hero";
import Grid from "@/components/Grid/Grid";
import BlogPostCard from "@/components/BlogPostCard/BlogPostCard";
import { getAllBlogPosts, getAllTags } from "@/lib/data";
import Badge from "@/components/Badge/Badge";
import Section from "@/components/Section/Section";
import Link from "next/link";
import styles from "./blog.module.css";

interface BlogPageProps {
    searchParams: Promise<{ tag?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
    const { tag } = await searchParams;
    const posts = getAllBlogPosts();
    const { blogTags } = getAllTags();

    const filteredPosts = tag ? posts.filter(post => post.tags.includes(tag)) : posts;

    return (
        <>
            <Header />
            <Container size="large">
                <Hero 
                    title="Blog" 
                    subtitle="Articles about software development, projects, and learnings."
                />
                
                <Section title="All Topics">
                    <div style={{ marginBottom: '2rem' }}>
                        <Link href="/blog" className={styles.tagLink}>
                            <Badge variant={tag ? "secondary" : "accent"}>All</Badge>
                        </Link>
                        {blogTags.map(topic => (
                            <Link key={topic} href={`/blog?tag=${encodeURIComponent(topic)}`} className={styles.tagLink}>
                                <Badge variant={tag === topic ? "accent" : "secondary"}>{topic}</Badge>
                            </Link>
                        ))}
                    </div>
                </Section>

                <Section title={tag ? `Posts about ${tag}` : "Recent Posts"}>
                    <Grid columns={2} gap="large">
                        {filteredPosts.map(post => (
                            <BlogPostCard
                                key={post.id}
                                title={post.title}
                                excerpt={post.excerpt}
                                date={new Date(post.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                                tags={post.tags}
                                slug={post.slug}
                                readTime={post.readTime}
                            />
                        ))}
                    </Grid>
                </Section>
            </Container>
        </>
    );
}
