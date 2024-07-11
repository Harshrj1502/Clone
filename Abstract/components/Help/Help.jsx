import React from 'react'
import { RxQuestionMarkCircled } from "react-icons/rx";

const Help = () => {
  return (
    <div className='flex items-center justify-center bg-primary text-white gap-2 cursor-pointer w-[110px] p-3 rounded-full fixed right-4 bottom-4 font-medium'>
      <RxQuestionMarkCircled size={20} />
      Help
    </div>
  )
}

export default Help
