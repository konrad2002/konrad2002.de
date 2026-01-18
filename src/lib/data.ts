import fs from 'fs';
import path from 'path';

// Types for our data structures
export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  year: string;
  tags: string[];
  link?: string;
  featured: boolean;
  image?: string;
  icon?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  published: boolean;
}

export interface NowSection {
  title: string;
  content: string;
  tags: string[];
}

export interface NowData {
  lastUpdated: string;
  sections: NowSection[];
}

export interface BioSection {
  id: string;
  title: string;
  content: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface BioData {
  intro: {
    title: string;
    subtitle: string;
    content: string;
  };
  sections: BioSection[];
  skills: SkillCategory[];
}

export interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
  tags: string[];
}

export interface ProjectItem {
  year: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface HonorItem {
  year: string;
  title: string;
  organization: string;
  description: string;
  link?: string;
}

export interface CVData {
  education: TimelineItem[];
  experience: TimelineItem[];
  projects: ProjectItem[];
  honors: HonorItem[];
  skills: {
    technical: string[];
    languages: string[];
  };
}

// Helper function to get the data directory path
function getDataPath(filename: string): string {
  return path.join(process.cwd(), 'public', 'data', filename);
}

// Helper function to read and parse JSON files
function readJsonFile<T>(filename: string): T {
  const filePath = getDataPath(filename);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

// Projects
export function getAllProjects(): Project[] {
  return readJsonFile<Project[]>('projects.json');
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter(project => project.featured);
}

export function getProjectById(id: string): Project | undefined {
  return getAllProjects().find(project => project.id === id);
}

export function getProjectsByCategory(category: string): Project[] {
  return getAllProjects().filter(project => project.category === category);
}

// Blog Posts
export function getAllBlogPosts(): BlogPost[] {
  const posts = readJsonFile<BlogPost[]>('blog.json');
  return posts
    .filter(post => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getRecentBlogPosts(limit: number = 3): BlogPost[] {
  return getAllBlogPosts().slice(0, limit);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return getAllBlogPosts().find(post => post.slug === slug);
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  return getAllBlogPosts().filter(post => post.tags.includes(tag));
}

// Now Page
export function getNowData(): NowData {
  return readJsonFile<NowData>('now.json');
}

// Bio/About Page
export function getBioData(): BioData {
  return readJsonFile<BioData>('bio.json');
}

// CV Page
export function getCVData(): CVData {
  return readJsonFile<CVData>('cv.json');
}

// Get all unique tags from projects and blog posts
export function getAllTags(): { projectTags: string[]; blogTags: string[] } {
  const projects = getAllProjects();
  const blogPosts = getAllBlogPosts();

  const projectTags = [...new Set(projects.flatMap(p => p.tags))].sort();
  const blogTags = [...new Set(blogPosts.flatMap(p => p.tags))].sort();

  return { projectTags, blogTags };
}
