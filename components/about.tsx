import { Card, CardContent } from "@/components/ui/card"
import { Code2, Globe, Server, Users } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: <Code2 className="h-10 w-10 text-primary" />,
      title: "Full Stack Development",
      description: "Expertise in React.js, TypeScript, Node.js, Express.js, and REST APIs",
    },
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: "Backend Architecture",
      description: "Proficient with PostgreSQL, MongoDB, Redis, JWT, OAuth, and Docker",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Testing Expertise",
      description: "Advanced skills in Selenium, TestNG, Cucumber, Cypress, and Jest",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Cloud & CI/CD",
      description: "Experience with Firebase, Render, GitHub Actions, and Jenkins",
    },
  ]

  return (
    <div className="w-full bg-muted/30">
      <section id="about" className="py-20 w-full">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Full Stack Developer with 3+ years of hands-on experience in building scalable web applications using
                React.js, Node.js, TypeScript, MongoDB, and PostgreSQL.
              </p>
            </div>

            <div className="mx-auto max-w-3xl text-center">
              <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                With a strong foundation in software engineering and testing, I specialize in designing secure
                authentication systems, building robust APIs, and developing responsive UI/UX. My work spans real-time
                collaboration platforms, SaaS apps, and e-commerce systems. I thrive in Agile environments, contribute
                across product lifecycles, and deploy production-ready code with CI/CD pipelines. Currently pursuing a
                Master's in Computer Science at Pace University.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="animate-in">
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className="p-2 rounded-full bg-primary/10">{feature.icon}</div>
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
