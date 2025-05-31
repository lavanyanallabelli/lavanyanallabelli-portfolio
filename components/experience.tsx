import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Skills from "./skills-content"

export default function Experience() {
  const experiences = [
    {
      title: "Software Developer",
      company: "Capgemini",
      period: "Dec 2022 - Jan 2024",
      location: "Bangalore, India",
      achievements: [
        "Developed secure RESTful APIs and full stack features with React.js and Node.js",
        "Automated 85% of testing workflows using Selenium and TestNG, reducing release time by 60%",
        "Collaborated in Agile teams across 15+ releases, integrating Jenkins CI and Git workflows",
        "Contributed to backend services with authentication, session logic, and role-based access",
        "Implemented comprehensive testing strategies improving code quality and reliability",
      ],
    },
    {
      title: "Software Developer Intern",
      company: "Mindtree",
      period: "Mar 2022 - Jun 2022",
      location: "Hyderabad, India",
      achievements: [
        "Built BiteTrack, a real-time food delivery platform with GraphQL APIs, Redis, and hybrid databases",
        "Secured the system with JWT + Google OAuth and role-based access for four user types",
        "Containerized services with Docker and automated builds using GitHub Actions",
        "Designed scalable microservice architecture for handling high-volume transactions",
        "Implemented real-time features using WebSocket connections and event-driven architecture",
      ],
    },
    {
      title: "Software Engineering Intern – J.P. Morgan ",
      company: "J.P. Morgan",
      period: "Jun 2024 - August 2024",
      location: "Remote",
      achievements: [
        "Built a React.js dashboard with Perspective to visualize live market data in sortable, streaming tables",
        "Optimized frontend performance and interactivity through modular design and advanced data handling",
        "Applied secure data handling, REST API integration, and client-server communication best practices",
        "Gained hands-on experience with Python, React, Perspective, Bootstrap, and JSON/CSV processing",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My professional journey and key accomplishments
            </p>
          </div>

          <div className="space-y-8 mt-12 max-w-4xl mx-auto">
            {experiences.map((experience, index) => (
              <div key={index} className="timeline-item">
                <Card className="border-l-4 border-l-primary transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{experience.title}</h3>
                        <p className="text-muted-foreground">{experience.company}</p>
                      </div>
                      <div className="mt-2 md:mt-0 flex flex-col md:items-end">
                        <Badge variant="outline" className="mb-1 md:mb-0">
                          {experience.period}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{experience.location}</span>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <div className="mt-20" id="skills">
            <div className="max-w-4xl mx-auto">
              <Skills />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
