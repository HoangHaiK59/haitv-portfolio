import {
    Card,
    CardTitle,
    CardHeader,
    CardContent
} from "@/components/ui/card";

export const AboutMe = ( ) => {
    return (
        <Card className="mb-6">
            <CardHeader>
                <CardTitle>About Me</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">
                    {/* Write 1-2 sentences about yourself */}
                    I am a Frontend Developer passionate about building scalable and efficient web applications with a
                    focus on performance, accessibility, and user experience. Proficient in modern technologies like
                    HTML, CSS, JavaScript, and frameworks such as ReactJS, Angular or Vue.js, I thrive on turning designs into
                    functional, responsive interfaces. I enjoy collaborating with cross-functional teams to deliver
                    clean, maintainable code and stay updated with the latest industry trends to ensure innovative and
                    high-quality solutions.
                </p>
            </CardContent>
        </Card>
    )
}