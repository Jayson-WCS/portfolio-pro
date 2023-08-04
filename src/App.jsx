import { Hero } from './components/Hero'
import { SideNav } from './components/SideNav'
import { AboutMe } from './components/AboutMe'
import { WorkTimeline } from './components/work/WorkTimeline'
import { ProjectsDisplay } from './components/projects/ProjectsDisplay'
import { ContactForm } from './components/ContactForm'

export const App = () => {
  return (
    <>
      <SideNav />
      <Hero />
      <AboutMe />
      <ProjectsDisplay />
      <WorkTimeline />
      <ContactForm />
    </>
  )
}
