import React from 'react'
import RenderComponents from './ui/RenderComponents';
// acá vamos a renderizar todos los componentes porque no hay más de una ruta. Solo "/"
const page = () => {
  return (
    <>
      <RenderComponents />
    </>
  )
}

export default page