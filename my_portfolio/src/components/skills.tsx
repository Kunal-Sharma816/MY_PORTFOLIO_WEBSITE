"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Database, Server, Code, Braces, LineChart, Brain, Globe, Layers } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="h-8 w-8 text-primary" />,
      skills: ["React.js", "Next.js", "HTML5", "CSS3", "JavaScript", "TypeScript", "Tailwind CSS", "ShadCN"],
    },
    {
      title: "Backend Development",
      icon: <Server className="h-8 w-8 text-primary" />,
      skills: ["Node.js", "Express.js", "REST API", "MySQL", "Authentication", "Authorization"],
    },
    {
      title: "Database",
      icon: <Database className="h-8 w-8 text-primary" />,
      skills: ["MongoDB", "Mongoose", "SQL",  "Database Design"],
    },
    {
      title: "Programming Languages",
      icon: <Braces className="h-8 w-8 text-primary" />,
      skills: ["JavaScript", "TypeScript", "Python", "C++"],
    },
    {
      title: "Data Science",
      icon: <LineChart className="h-8 w-8 text-primary" />,
      skills: ["Data Analysis", "Data Visualization", "Pandas", "NumPy", "Jupyter Notebooks" , "Machine Learning", "Computer Vision"],
    },
    {
      title: "DevOps & Tools",
      icon: <Layers className="h-8 w-8 text-primary" />,
      skills: ["Git", "GitHub", "AWS", "Vercel", "Netlify"],
    },
    {
      title: "Other",
      icon: <Globe className="h-8 w-8 text-primary" />,
      skills: ["RESTful APIs", "Agile Methodology", "Problem Solving", "Team Collaboration", "Technical Writing"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-white max-w-2xl mx-auto text-xl">
            A comprehensive overview of my technical skills and expertise in various domains.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {category.icon}
                    <h3 className="text-xl font-semibold ml-3">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li key={skill} className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                        <span className="text-muted-foreground">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
