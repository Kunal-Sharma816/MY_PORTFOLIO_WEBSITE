'use client'

import Hero from "@/components/hero";
import Skills from "@/components/skills";
import Project from "@/components/projects"

export default function Home() {
  return ( 
    <main className="pt-12">
      <Hero/>
      <Skills/>
      <Project/>
    </main>   
      
    
  );
}
