"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Khareedo.com",
      description:
        "A full-stack microservice based e-commerce platform built with the MERN stack featuring user authentication, product management, cart functionality, and payment integration.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Nextjs", "Node.js" , "Nestjs" , "MongoDB", "Redux", "Stripe"],
      liveLink: "https://www.youtube.com/watch?v=0AAF0iWVw8c",
      githubLink: "https://github.com/Kunal-Sharma816/kharido-app.git",
    },
    {
      title: "AI-Powered Content Generator",
      description:
        "An application that leverages AI to generate content based on user prompts. Integrates with OpenAI's API and includes user authentication and content management.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "OpenAI API", "Node.js", "MongoDB", "Tailwind CSS"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      title: "AI-powered Resume Analysis and Text Summarization",
      description:
      "An AI-powered tool for resume classification with integrated text summarization using the Hugging Face API and a web-based interface",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["HTML", "JavaScript", "CSS", "Huggingface API", "Data Visualization", "RandomForest" , "Flask" , "Python"],
      liveLink: "https://ai-powered-resumeandtextsummarization.onrender.com/",
      githubLink: "https://github.com/Kunal-Sharma816/DAA-Project.git",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30 bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2 text-white">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-white max-w-2xl mx-auto">
            Explore my portfolio of projects showcasing my skills in MERN stack development, Data Science, and AI/ML.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-white">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow bg-gray-200">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 ">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-4">
                    <Button size="sm" asChild>
                      <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
                      </Link>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" /> Code
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
