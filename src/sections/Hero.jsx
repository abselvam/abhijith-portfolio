import { Button } from "../components/Button";
import { ArrowRight, Download } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { SiGithub } from "react-icons/si";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Redux Tool Kit",
  "GraphQL",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Tailwind CSS",
  "Vapi",
  "Clerk",
  "TanstackQuery",
  "Prisma",
  "Figma",
  "Git",
  "GitHub Actions",
];

export const Hero = () => {
  return (
    <section className="realtive min-h-screen flex items-center overflow-hidden">
      {/* bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* green dots */}
      <div className="absolute  inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full  opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${
                15 + Math.random() * 20
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Engineering{" "}
                <span className="text-primary glow-text">elegant</span>
                <br />
                solutions,
                <br />
                <span className="font-serif italic font-normal text-white">
                  line by line.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Hi, I'm Abhijith Selvam - a Software Engineer specializing in
                React, Node.js, Javascript, Next.js, and TypeScript. I build
                scalable, performant web applications that users love.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a href="#contact">
                <Button size="lg">
                  Contact Me <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                <a
                  href="/Abhijith_Selvam_Software_Engineer.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV
                </a>
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-lg text-muted-foreground">
                Check out my Github:{" "}
              </span>
              {[{ icon: SiGithub, href: "https://github.com/abselvam" }].map(
                (social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                  >
                    {<social.icon className="w-8 h-8" />}
                  </a>
                )
              )}
            </div>
          </div>
          <div className="relative animate-fade-in animation-delay-300 group">
            <div className="relative max-w-md mx-auto">
              {/* Multiple Glowing Vectors for Depth */}
              <div className="absolute -inset-4 overflow-hidden rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                {/* Glow Layer 1 */}
                <div className="absolute inset-0 bg-linear-to-br from-primary/40 via-transparent to-purple-500/30 blur-xl animate-pulse-slow" />
                {/* Glow Layer 2 */}
                <div className="absolute inset-0 bg-linear-to-tr from-blue-500/20 via-transparent to-cyan-400/20 blur-2xl animate-pulse-slower" />
                {/* Glow Layer 3 - Moving effect */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-primary/10 to-transparent animate-shimmer" />
              </div>

              {/* Main Container */}
              <div
                className="relative glass rounded-3xl p-2 
                            border-2 border-transparent 
                            group-hover:border-primary/30 
                            group-hover:shadow-2xl group-hover:shadow-primary/20
                            transition-all duration-500"
              >
                {/* Image with hover transition */}
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="/abhijith-pfp.jpg"
                    alt="Abhijith Selvam"
                    className="w-full aspect-4/5 object-cover 
                                brightness-90 contrast-110 
                                group-hover:brightness-100 group-hover:contrast-100
                                group-hover:scale-105
                                transition-all duration-700 ease-out"
                  />
                  {/* Subtle overlay that fades on hover */}
                  <div
                    className="absolute inset-0 bg-black/20 rounded-2xl 
                                group-hover:bg-transparent 
                                transition-all duration-500"
                  ></div>
                </div>

                {/* Floating Badge */}
                <div
                  className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 
                              animate-float group-hover:opacity-0 
                              transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with :
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-linear-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-linear-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors hover:cursor-default">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div> */}
    </section>
  );
};
