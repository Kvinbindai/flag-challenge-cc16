import React from 'react'

export default function FlagList(props) {
const { data , handleClick , currentIndex } = props

  const afterClick = 'max-w-20 max-h-10 cursor-pointer border-blue-500 border-2'
  const beforeClick = 'max-w-20 max-h-10 cursor-pointer'

  return (
    <div className={currentIndex === data.id  ? afterClick : beforeClick} >
        <img src={data.flags.png} className='size-full' onClick={(e)=>handleClick(data)} />
    </div>
  )
}
