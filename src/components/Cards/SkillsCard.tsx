import React from 'react'

type SkillsCardProps = {
  image:string
  text:string
}

const SkillsCard:React.FC<SkillsCardProps> = ({
  image,
  text
}) => {
  return (
    <>
      <div className='w-full flex items-center justify-center'>
        <div className=' w-16 md:w-20 h-full flex flex-col items-center justify-center'>
          <img className='w-full h-full object-contain' src={image} alt={text} />
          <span className='text-gray whitespace-nowrap text-sm'>{text}</span>
        </div>
      </div>
    </>
  )
}

export default SkillsCard;