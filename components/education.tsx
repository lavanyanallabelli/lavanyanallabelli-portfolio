import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export default function Education() {
  const educationData = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Pace University",
      location: "New York, USA",
      period: "Expected Dec 2025",
      description:
        "Advanced coursework in software engineering, algorithms, data structures, and system design with focus on modern development practices.",
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Krishna University",
      location: "India",
      period: "Graduated May 2022",
      description:
        "Comprehensive computer science program with strong foundation in programming, mathematics, and engineering principles.",
    },
  ]

  return (
    <section id="education" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My academic background and qualifications
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {educationData.map((edu, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-primary/10 p-6 flex items-center gap-4">
                    <div className="bg-primary/20 p-3 rounded-full">
                      <GraduationCap className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold">{edu.degree}</h3>
                      <p className="text-muted-foreground">
                        {edu.institution} - {edu.location}
                      </p>
                      <div className="flex gap-4 mt-1">
                        <span className="text-sm text-muted-foreground">{edu.period}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground">{edu.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
