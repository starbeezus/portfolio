import { Header } from '@/components/Header'
import { Strings } from '@/resources/strings'
import TechStack from '@/components/aboutMe/TechStack'
import CurrentProjects from '@/components/aboutMe/currentProjects/CurrentProjects'

export default function AboutMe() {
  return (
    <div>
      <main>
        <div className="m-10 text-justify">{Strings.AboutMe.summary}</div>
        <Header optionalName="Current Tech Stack" size="header" />
        <div className="mb-10">
          <TechStack />
        </div>
        <Header optionalName="Current Projects" size="header" />
        <div>
          <CurrentProjects />
        </div>
      </main>
    </div>
  )
}
