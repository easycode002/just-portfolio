import React from 'react'
import Image from 'next/image'

// Define props for this card
interface ICard{
    image:string;
    title:string;
    description:string;
}

const Card:React.FC<ICard> = ({image,title,description}) => {
  return (
    <div className='flex flex-col w-[200px] h-[130px] justify-center items-center space-y-1 border-2 border-gray-900 rounded-2xls'>
        {/* Icon card */}
        <Image src={image} alt='Image for card in about me' className='w-16 h-16 rounded-fulls'/>
        {/* Title card */}
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
  )
}

export default Card