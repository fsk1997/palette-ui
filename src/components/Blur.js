import React from 'react'

export const Blur = ({className, sizeClassName, colorClassName}) => {
    return(
        <div className={`${className} ${sizeClassName ? sizeClassName : "w-[75vw] h-[75vw]"} ${colorClassName ? colorClassName : "bg-brand-magenta mix-blend-color-burn" } rounded-full blur-3xl`}/>
    )
} 

// absolute z-0 top-12 left-0 