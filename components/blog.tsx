import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function Blog() {
  return (
    <section id="blog" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Blog</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Thoughts, tutorials, and insights on full stack development
            </p>
          </div>

          <div className="flex flex-col items-center">
            <Card className="w-full max-w-2xl">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Coming Soon</h3>
                <p className="text-muted-foreground mb-6">
                  I'm working on creating content about React.js, Node.js, TypeScript, testing strategies, and full
                  stack development best practices. Stay tuned for upcoming articles and tutorials!
                </p>
                <Button disabled>
                  <ExternalLink className="mr-2 h-4 w-4" /> Blog Coming Soon
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
