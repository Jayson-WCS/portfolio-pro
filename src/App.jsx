import { Hero } from './components/Hero'
import { SideNav } from './components/SideNav'
import { ProjectsDisplay } from './components/projects/ProjectsDisplay'
import { WorkTimeline } from './components/work/WorkTimeline'

export const App = () => {
  return (
    <>
      <SideNav />
      <Hero />
      <WorkTimeline />
      <ProjectsDisplay />
    </>
  )
}
