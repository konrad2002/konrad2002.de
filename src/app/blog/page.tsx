import Header from "@/app/header/header";
import Container from "@/components/Container/Container";
import Hero from "@/components/Hero/Hero";
import Grid from "@/components/Grid/Grid";
import BlogPostCard from "@/components/BlogPostCard/BlogPostCard";
import { getAllBlogPosts, getAllTags } from "@/lib/data";
import Badge from "@/components/Badge/Badge";
import Section from "@/components/Section/Section";

export default function BlogPage() {
    const posts = getAllBlogPosts();
    const { blogTags } = getAllTags();

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
                        {blogTags.map(tag => (
                            <Badge key={tag} variant="secondary">{tag}</Badge>
                        ))}
                    </div>
                </Section>

                <Section title="Recent Posts">
                    <Grid columns={2} gap="large">
                        {posts.map(post => (
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
