import { Header } from '@/components/Header'
import { Strings } from '@/resources/strings'
export default function AboutMe() {
  return (
    <div>
      <main>
        <div className="m-10 text-justify">{Strings.AboutMe.summary}</div>
        <Header optionalName="TechStack" size="header" />
        <Header optionalName="Areas of Expertise" size="header" />
      </main>
    </div>
  )
}
