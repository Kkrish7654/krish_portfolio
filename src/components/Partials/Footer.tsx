import React from 'react'

const Footer:React.FC = () => {
  return (
   <>
    <footer className='mt-5 p-3 text-center flex flex-col gap-2 m-2 bg-white/10 rounded-lg'>
      <span className='text-gray whitespace-nowrap'>Copyright © 2023 all rights reserved</span>
      <span className='text-gray text-xs'>Made with ❤️ by Krish Vishwakarma</span>
    </footer>
   </>
  )
}

export default Footer;