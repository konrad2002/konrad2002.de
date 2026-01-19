import Header from "@/app/header/header";
import Container from "@/components/Container/Container";
import Badge from "@/components/Badge/Badge";
import Button from "@/components/Button/Button";
import MarkdownContent from "@/components/MarkdownContent/MarkdownContent";
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/data";
import { notFound } from "next/navigation";
import styles from "./blogPost.module.css";

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

// Generate static paths for all blog posts at build time
export async function generateStaticParams() {
    const posts = getAllBlogPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <>
            <Header />
            <Container size="small">
                <article className={styles.article}>
                    <div className={styles.header}>
                        <Button href="/blog" variant="ghost">← Back to Blog</Button>
                        
                        <div className={styles.meta}>
                            <time className={styles.date}>{formattedDate}</time>
                            <span className={styles.readTime}>{post.readTime}</span>
                        </div>

                        <h1 className={styles.title}>{post.title}</h1>

                        <div className={styles.tags}>
                            {post.tags.map(tag => (
                                <Badge key={tag} variant="default">{tag}</Badge>
                            ))}
                        </div>
                    </div>

                    <div className={styles.content}>
                        <p className={styles.excerpt}>{post.excerpt}</p>
                        <div className={styles.body}>
                            <MarkdownContent content={post.content} />
                        </div>
                    </div>
                </article>
            </Container>
        </>
    );
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);
    
    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: `${post.title} - Konrad Weiß`,
        description: post.excerpt,
    };
}
