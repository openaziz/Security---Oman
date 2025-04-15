import type { LucideIcon } from "lucide-react"

interface CodeProps {
  icon?: LucideIcon
  name: string
  command: string
  description: string
}

export function Code({ icon: Icon, name, command, description }: CodeProps) {
  return (
    <div className="rounded-md bg-muted p-4">
      <div className="flex items-center gap-2">
        {Icon && <Icon className="h-5 w-5 text-foreground" />}
        <h3 className="font-medium">{name}</h3>
      </div>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      <pre className="mt-2 rounded-md bg-black p-2 font-mono text-sm text-green-500">{command}</pre>
    </div>
  )
}
