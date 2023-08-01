import { Hero } from './components/Hero'
import { SideNav } from './components/SideNav'
import { WorkTimeline } from './components/work/WorkTimeline'

export const App = () => {
  return (
    <>
      <SideNav />
      <Hero />
      <WorkTimeline />
    </>
  )
}
