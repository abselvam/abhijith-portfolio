import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "Enterprise Level Inventory Management App",
    description:
      "Enterprise-grade AI dental appointment SaaS platform with role-based admin and patient domains, real-time and transaction-safe scheduling, subscription-gated voice AI interactions, and a scalable, serverless full-stack architecture built for production use.",
    image: "projects/ai-dental-saas.png",
    tags: [
      "Next.js",
      "Typescript",
      "PostgreSQL(Neon)",
      "Prisma",
      "Vapi",
      "Tanstack Query",
      "Clerk",
      "ShadcnUI",
    ],
    link: "https://ai-dental-saas.onrender.com",
    github: "https://github.com/abselvam/ai-dental-saas",
  },
  {
    title: "Enterprise Level Inventory Management App",
    description:
      "Designed and built a scalable, enterprise-grade inventory management platform using Next.js and TypeScript, featuring role-based access, normalized PostgreSQL schemas, and Prisma-powered data integrity. Implemented predictable global state management with Redux RTK, deployed on AWS, and optimized workflows for real-world operational scale.",
    image: "projects/inventory-management.png",
    tags: ["Next.js", "Typescript", "PostgreSQL", "Prisma", "AWS"],
    link: "#",
    github: "https://github.com/abselvam/inventory-management-app",
  },
  {
    title: "Netflix-clone",
    description:
      "Built a full-stack Netflix-style streaming application using the MERN stack with secure JWT authentication, Zustand state management, and a responsive Tailwind CSS UI. Implemented scalable REST APIs, protected routes, and deployed the application on Render with production-ready architecture.",
    image: "/projects/netflix.png",
    tags: ["React", "Javascript", "MongoDB", "TailwindCss", "Node.js"],
    link: "https://netflix-clone-cime.onrender.com",
    github: "https://github.com/abselvam/netflix-clone",
  },
  {
    title: "Twitter-clone",
    description:
      "Built a full-stack Twitter-like application using the MERN stack with JWT-based authentication, secure password hashing, and real-time-style feed interactions. Implemented scalable API design, state management with Zustand, and deployed the application on Render with a responsive UI using Tailwind CSS.",
    image: "/projects/twitter.png",
    tags: ["React", "Javascript", "MongoDB", "TailwindCss", "Node.js"],
    link: "https://small-twitter-clone.onrender.com",
    github: "https://github.com/abselvam/small-twitter-clone",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-12 relative overflow-hidden mt-8">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            My
            <span className="font-serif italic font-normal text-white">
              {" "}
              Projects.
            </span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-linear-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
      </div>
    </section>
  );
};
