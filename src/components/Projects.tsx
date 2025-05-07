import Link from "next/link";
import { cn } from "@/lib/utils";

import { Card, CardContent } from "@/components/ui/card";

export const projects = [
    {
        title: "Studiosity",
        description: "Studiosity offers personal study help anytime, anywhere, partnering with universities worldwide to enhance student success through AI and peer support.",
        tech: "ReactJS, AI, CoffeeScript, Ruby on Rails, EmberJS",
        link: "#",
    },
    {
        title: "MAX EC",
        description: "A contract-based glasses and hearing aid rental system built with many different services, using technologies such as: Ruby on Rails, ReactJS, PowerBI, .NET, SSO,...",
        tech: "ReactJS",
        link: "#",
    },
    {
        title: "Others",
        description: "Develop products within the company's ecosystem or outsource",
        tech: "Angular, .NET, WordPress, NextJS, NuxtJS, ReactJS, Ruby on Rails,...",
        link: "#",
    },
    {
        title: "Yeowubie",
        description: "A marketing agency",
        tech: "NuxtJS",
        link: "#",
    },
    {
        title: "HPA Healthcare",
        description: "A medical blockchain application built with React Native, VueJS, NestJS, MongoDB and private blockchains",
        tech: "React Native",
        link: "#",
    },
    {
        title: "QTI IoT",
        description: "An IoT sauna system built with Vue JS, Node JS, Flutter",
        tech: "VueJS",
        link: "#",
    },
    {
        title: "DMTP",
        description: "Web3 Communication Protocol",
        tech: "ReactJS",
        link: "#",
    },
    {
        title: "Goen",
        description: "An application for token investment, staking pool",
        tech: "NuxtJS, NodeJS",
        link: "#",
    },
    {
        title: "Mirana Market",
        description: "An application for selling NFTs",
        tech: "NextJS, NodeJS",
        link: "#",
    },
    {
        title: "ASD True E-Logistics",
        description: "A E-Logistics system built with ReactJS, NodeJS, GraphQL and designed as micro services structure",
        tech: "ReactJS",
        link: "#",
    },
    {
        title: "KSB Banking",
        description: "A banking application using Angular, Java",
        tech: "Angular",
        link: "#",
    },
    {
        title: "S-Housing",
        description: "A system for managing contracts and contract execution progress in the real estate sector",
        tech: "Angular, .NET",
        link: "#",
    },
    {
        title: "S-Services",
        description: "Vehicle management system in and out of buildings, electricity and water services,...",
        tech: "Angular, .NET",
        link: "#",
    },
    {
        title: "JMUP",
        description: "An application for Ingenico POS devices",
        tech: "JavaScript, HTML, C++",
        link: "#",
    },
]

const techColors = {
    "ReactJS": "bg-blue-500",
    "React Native": "bg-green-500",
    "VueJS": "bg-purple-500",
    "Python": "bg-yellow-500",
    "Angular": "bg-red-600"
}

export const Projects = () => {
    return (
        <>
            <h2 className="text-xl font-bold mb-4">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {projects.map((p, i) => (
                    <Card key={i}>
                        <CardContent className="pt-6 h-full">
                            <div className="flex flex-col h-full">
                                <Link
                                    href={p.link}
                                    className="font-semibold text-primary hover:underline"
                                >
                                    {p.title}
                                </Link>
                                <p className="text-sm text-muted-foreground mt-1 mb-4">
                                    {p.description}
                                </p>
                                <div className="mt-auto flex items-center justify-between">
                                    <div className="flex items-center space-x-2">
                                        <div
                                            className={cn(
                                                "size-4 rounded-full",
                                                techColors[p.tech as keyof typeof techColors]
                                            )}
                                        />
                                        <span className="text-xs font-medium text-muted-foreground">
                                            {p.tech}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    )
}