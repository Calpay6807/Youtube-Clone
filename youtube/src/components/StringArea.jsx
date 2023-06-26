import React, { useState } from 'react'

const StringArea = ({text,max}) => {
    const [showFullText, setShowFullText] = useState(false)

    const handleClick = () =>{
        setShowFullText(!showFullText)
     }

    // eğerki bizim yazımız uzun ise belli kısmını al ve sonuna 3 nokta koy 
    //değilse olduğu gibi kal
    let shortText = text
    if(text.length > max && !showFullText){
        shortText = text.substring(0, max) + '...'
    }
    console.log(shortText)

 
  return (
    <p onClick={handleClick}>
      {shortText}
    </p>
  )
}

export default StringArea;
