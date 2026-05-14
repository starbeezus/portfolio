import { Strings } from '@/resources/strings'
import {
  FaHtml5 as Html,
  FaCss3Alt as Css,
  FaReact as React,
  FaNodeJs as Node,
} from 'react-icons/fa6'
import { BsTypescript as Ts } from 'react-icons/bs'
import { GrGraphQl as GQL } from 'react-icons/gr'
import { PiFileSql as Sql } from 'react-icons/pi'
import {
  RiNextjsLine as Next,
  RiTailwindCssFill as Tailwind,
} from 'react-icons/ri'

export default function TechStack() {
  const programmingArray = Strings.Skills.technicalSkills.programming
  const iconArray = [Html, Css, Tailwind, Ts, GQL, Sql, React, Next, Node]
  return (
    <div className="flex flex-row flex-wrap justify-evenly">
      {programmingArray.map((title, i) => {
        const Icon = iconArray[i]
        return (
          <div
            key={i}
            className="group flex flex-col items-center justify-center w-32 h-16 rounded-lg cursor-pointer transition-colors duration-300 hover:bg-amber-300/50"
          >
            <Icon
              className="
          text-amber-300/80 text-4xl transition-opacity duration-300 group-hover:opacity-0
        "
            />
            <div
              className="
          absolute text-white text-lg font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100 
        "
            >
              {title}
            </div>
          </div>
        )
      })}
    </div>
  )
}
