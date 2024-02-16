import React, { Children } from 'react'

const CustomLink = ({href, className,children,rel}) => {
  return (
   <a href={href} target='_blank' className={className} rel={rel}>{children}</a>
  )
}

export default CustomLink