import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "SkillSync - Skill Exchange Platform",
      description:
        "Real-time booking platform with Google Meet integration, role-based access, messaging, calendar sync, and admin dashboard.",
      tags: ["MERN", "TypeScript", "GoogleCalander API", "PostgreSQL", "JWT"],
      codeLink: "https://github.com/lavanyanallabelli/skillshare-sync-connect",
      liveLink: null,
    },
    {
      title: "E-Commerce Platform",
      description:
        "Microservice architecture with modular services for products, users, orders, and payments. Features role-based dashboards and full test coverage.",
      tags: ["MERN", "Styled Components", "Docker", "CI/CD"],
      codeLink: "https://github.com/lavanyanallabelli/E-Commerce",
      liveLink: null,
    },
    {
      title: "NYC Taxi Trip Duration Prediction",
      description:
        "Deep learning project using TensorFlow to predict taxi trip durations in NYC based on geospatial, temporal, and weather features.",
      tags: ["Python", "TensorFlow", "Keras", "EDA", "Regression"],
      codeLink: "https://github.com/lavanyanallabelli/NYC_Yellow_Taxi_Trip_Duration_Prediction",
      liveLink: null,
    },
    {
      title: "AJIO Automation Framework",
      description:
        "Java + Selenium + Cucumber test framework for e-commerce flows with 85% coverage and Jenkins integration.",
      tags: ["Java", "Selenium", "Cucumber", "Maven", "Jenkins"],
      codeLink: "https://github.com/lavanyanallabelli/Ajio_Cucumber",
      liveLink: null,
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A selection of my personal and professional projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <Card className="overflow-hidden h-full flex flex-col">
                  <CardContent className="project-content flex-1 flex flex-col p-5">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 flex-1">{project.description}</p>
                    <div className="project-tags mt-3">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="project-links mt-4">
                      <Button size="sm" variant="outline" asChild>
                        <Link href={project.codeLink} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-1 h-4 w-4" /> Code
                        </Link>
                      </Button>
                      {project.liveLink && (
                        <Button size="sm" variant="outline" asChild>
                          <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-1 h-4 w-4" /> Live
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Certifications Section - Commented out as requested
          <div className="mt-20">
            <div className="space-y-4 text-center">
              <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Certifications</h3>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed">
                Professional certifications and achievements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {[
                "J.P. Morgan Software Engineering Simulation – Forage",
                "Blockchain Specialization – Coursera",
                "Agile Software Development – Coursera",
                "Selenium + Automation Testing (Capgemini)",
                "INSPIRE Certification – Pace University",
              ].map((cert, index) => (
                <Card key={index} className="h-full">
                  <CardContent className="p-4 text-center">
                    <div className="mb-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm font-medium">{cert}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          */}
        </div>
      </div>
    </section>
  )
}
