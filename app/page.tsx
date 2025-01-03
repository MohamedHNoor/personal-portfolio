import { Hero } from '@/components/hero/Hero'
import Skills from '@/components/skills/Skills'
import Services from '@/components/services/Services'
import Projects from '@/components/projects/Projects'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Skills />
      <Projects />
    </main>
  )
}
