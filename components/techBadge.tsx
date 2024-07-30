import { Badge } from "./ui/badge";

export default function TechBadge({ technologies }: { technologies: string[] }) {
    return (
      <div className="flex gap-x-1 flex-wrap flex-shrink-0 gap-y-1">
        {technologies.map((technology) => (
          <Badge key={technology} className="hover:bg-primary">
            {technology}
          </Badge>
        ))}
      </div>
    )
}