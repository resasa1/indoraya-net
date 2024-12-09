import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Dashboard() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <Badge variant="secondary" className="rounded-full">
            GitHub Issues
          </Badge>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Project planning
            <br />
            for developers
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Create issues, break them into tasks, track relationships, add custom fields, and have conversations. Visualize large projects as tables, boards, or roadmaps, and automate everything with code.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg">
              Get started
            </Button>
            <Button size="lg" variant="outline">
              Contact sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

