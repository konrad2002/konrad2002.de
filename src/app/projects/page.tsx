import Header from "@/app/header/header";
import Container from "@/components/Container/Container";
import Hero from "@/components/Hero/Hero";
import Section from "@/components/Section/Section";
import Grid from "@/components/Grid/Grid";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import Badge from "@/components/Badge/Badge";
import { getAllProjects } from "@/lib/data";
import styles from "./projects.module.css";
import Link from "next/link";

interface ProjectsPageProps {
    searchParams: Promise<{ category?: string }>;
}

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
    const { category } = await searchParams;
    const projects = getAllProjects();

    const categories = Array.from(new Set(projects.map(p => p.category))).sort();
    const filteredProjects = category ? projects.filter(p => p.category === category) : projects;

    return (
        <>
            <Header />
            <Container size="large">
                <Hero
                    title="Projects"
                    subtitle="Customer websites, personal projects, web apps, and tools."
                />

                <Section title="Categories">
                    <div className={styles.filters}>
                        <Link href="/projects" className={styles.categoryLink}>
                            <Badge variant={category ? "secondary" : "accent"}>All</Badge>
                        </Link>
                        {categories.map(cat => (
                            <Link key={cat} href={`/projects?category=${encodeURIComponent(cat)}`} className={styles.categoryLink}>
                                <Badge variant={category === cat ? "accent" : "secondary"}>{cat}</Badge>
                            </Link>
                        ))}
                    </div>
                </Section>

                <Section title={category ? `Projects in ${category}` : "All Projects"}>
                    <Grid columns={3} gap="large">
                        {filteredProjects.map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </Grid>
                </Section>
            </Container>
        </>
    );
}
