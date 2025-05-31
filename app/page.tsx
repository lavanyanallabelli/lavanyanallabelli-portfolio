import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Contact from "@/components/contact"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Lavanya Nallabelli | Full Stack Developer",
  description:
    "Portfolio of Lavanya Nallabelli, a Full Stack Developer specializing in React.js, Node.js, TypeScript, MongoDB, and PostgreSQL.",
}

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </div>
  )
}
