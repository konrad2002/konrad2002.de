# Konrad's Portfolio Website - Project Brief

## Overview
Portfolio website for Konrad (konrad2002 on GitHub), a CS Master student and software developer.

## About Konrad
- CS Master student
- Software developer (freelance/personal projects)
- Creates websites for customers and personal use
- Develops tools (mostly web apps)
- Works on personal software products

## Website Structure & Pages

### 1. Home/Overview Page (`/`)
- Entry point showing the most important and latest content from all sections
- Featured projects (latest/most important)
- Latest blog posts
- Current status/now update preview
- Quick navigation to all sections

### 2. Projects Page (`/projects`)
- Showcase of all projects, possibly grouped by category:
  - Customer websites
  - Personal websites
  - Web apps/tools
  - Personal software products
- Each project should have description, tech stack, and links

### 3. Now Page (`/now`)
- Following nownownow.com convention
- Current activities and focus areas
- What Konrad is working on right now
- Regular updates about current projects and interests

### 4. Bio/About Page (`/me` or `/about`)
- Personal background
- Previous activities and experience
- Journey to CS and software development
- Skills and technologies
- Interests and hobbies

### 5. Blog Page (`/blog`)
- Articles about various topics
- Technical posts
- Personal thoughts and experiences
- Project write-ups and learnings

### 6. CV Page (`/cv`)
- Interactive curriculum vitae
- Education history
- Work experience
- Skills and competencies
- Timeline or interactive visualization

## Technical Details
- Framework: Next.js (App Router)
- TypeScript for type safety
- CSS Modules for styling
- Responsive design for all devices

### Data Management
Content is stored in JSON files located in `/src/data/`:
- `projects.json` - All project information
- `blog.json` - Blog posts with metadata
- `now.json` - Current activities and focus
- `bio.json` - Personal background and skills
- `cv.json` - Education, experience, and timeline data

Data is loaded via utility functions in `/src/lib/data.ts`:
- `getAllProjects()` - Get all projects
- `getFeaturedProjects()` - Get featured projects only
- `getAllBlogPosts()` - Get all published blog posts (sorted by date)
- `getRecentBlogPosts(limit)` - Get recent blog posts
- `getNowData()` - Get current activities
- `getBioData()` - Get biography data
- `getCVData()` - Get CV/timeline data
- Various helper functions for filtering by tag, category, etc.

These functions use Node.js `fs` module and work in both development and production (server-side only).

## Design Principles
- Clean, professional dark theme
- No rounded corners or glowing effects
- Easy navigation
- Focus on content
- Showcase technical skills through the website itself
- Mobile-friendly
- Lightweight and fast

## Component Library

The website uses a set of reusable components for consistent design:

### Layout Components

#### Container (`/src/components/Container/`)
- Purpose: Provides consistent max-width and padding for page content
- Variants: `small` (720px), `medium` (960px), `large` (1200px), `full` (100%)
- Usage: Wrap page content for proper spacing and alignment

#### Grid (`/src/components/Grid/`)
- Purpose: Responsive grid layout for displaying multiple items
- Props: `columns` (1-4), `gap` (small/medium/large)
- Usage: Projects grid, blog post listings, any multi-column layouts
- Responsive: Auto-adjusts columns on smaller screens

#### Section (`/src/components/Section/`)
- Purpose: Consistent section spacing with optional title/subtitle
- Props: `title`, `subtitle`, `children`, `id`
- Usage: Organizing content into distinct sections on pages

### Display Components

#### Card (`/src/components/Card/`)
- Purpose: Generic card container with hover effects
- Props: `children`, `href` (optional link), `className`
- Usage: Base component for wrapping any content in a card style
- Features: Subtle background, border on hover, clickable when href provided

#### ProjectCard (`/src/components/ProjectCard/`)
- Purpose: Specialized card for displaying project information
- Props: `title`, `description`, `tags`, `link`, `year`, `category`
- Usage: Projects page, featured projects on home page
- Features: Displays metadata, tech stack badges, hover animation

#### BlogPostCard (`/src/components/BlogPostCard/`)
- Purpose: Card for blog post previews
- Props: `title`, `excerpt`, `date`, `tags`, `slug`, `readTime`
- Usage: Blog listing page, latest posts on home page
- Features: Date display, read time, tag filtering

#### Hero (`/src/components/Hero/`)
- Purpose: Large section header for page introductions
- Props: `title`, `subtitle`, `children`, `centered`
- Usage: Top of pages for main heading and intro text
- Features: Responsive typography, optional content area

#### Timeline (`/src/components/Timeline/`)
- Purpose: Visual timeline for chronological information
- Props: `items` (array of timeline entries)
- Usage: CV page for education/work history
- Features: Connected dots and lines, year markers, tag support

### UI Elements

#### Badge (`/src/components/Badge/`)
- Purpose: Small tag/label for technologies, categories, etc.
- Props: `children` (text), `variant` (default/accent/secondary)
- Usage: Tech stack tags, blog categories, any labeling needs
- Features: Hover effect, multiple visual variants

#### Button (`/src/components/Button/`)
- Purpose: Clickable button or link styled as button
- Props: `children`, `href`, `onClick`, `variant`, `type`
- Variants: `primary`, `secondary`, `ghost`
- Usage: Call-to-action, navigation, form submissions
- Features: Works as both Link and button element

## Component Usage Guidelines

### Home Page (`/`)
- Hero component for main title
- Section components for "Featured Projects", "Latest Posts", "Current Focus"
- Grid with ProjectCard for featured projects
- Grid with BlogPostCard for recent blog posts
- Buttons for "View All Projects", "Read More Posts"

### Projects Page (`/projects`)
- Hero for page introduction
- Container for consistent width
- Grid with ProjectCard for all projects
- Badges for filtering by technology/category

### Blog Page (`/blog`)
- Hero for page title
- Container for content
- Grid with BlogPostCard for all posts
- Section components for grouping posts by category/date

### Now Page (`/now`)
- Container (small) for focused reading
- Section components for different "now" topics
- Badges for current technologies/interests

### About/Me Page (`/me`)
- Container (small) for biography
- Section components for different life phases
- Card components for highlighting key experiences

### CV Page (`/cv`)
- Container (medium) for CV content
- Timeline component for education/work history
- Section components for Skills, Projects, etc.
- Badges for skills and technologies
- Grid for skill categories or project highlights

## Future Enhancements
- Blog post filtering/categories using Badge components
- Project filtering by technology
- Search functionality
- RSS feed for blog
- Analytics
- Animations on scroll
- Project detail pages
- Blog post pages with MDX support
