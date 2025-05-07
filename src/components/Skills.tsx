import {
    Card,
    CardTitle,
    CardHeader,
    CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skills = ["TypeScript",
    "JavaScript",
    "SQL",
    "HTML",
    "CSS",
    "TailwindCSS",
    "Angular",
    "NextJS",
    "ReactJS",
    "NodeJS",
    "Ruby on Rails",
    "FastAPI",
    "MongoDB",
    "PostgreSQL",
    "Git",
    "Docker",
    "NestJS",
    "VueJS",
    "NuxtJS",
    "Angular",
    "ReactNative"
]

export const Skills = () => {
    return (
        <Card className="mt-6">
            <CardHeader>
                <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-2">
                    {skills.map((s, i) => (
                        <Badge key={i} variant="secondary">
                            {s}
                        </Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}