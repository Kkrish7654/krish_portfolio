import React from 'react'
import SkillsCard from '../Cards/SkillsCard'

const SoftSkills:React.FC = () => {
  return (
    <>
      <section className="h-auto mt-[4rem] ">
        <div>
          <h2 className="text-[3rem] text-gray uppercase font-semibold ">
            soft skills
          </h2>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 space-y-4 gap-4 mt-[1.5rem]">
          <SkillsCard image='/assets/react.png' text='React Js'/>
        </div>
      </section>
    </>
  )
}

export default SoftSkills