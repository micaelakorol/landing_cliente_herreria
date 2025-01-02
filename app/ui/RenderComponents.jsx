import React from 'react'
import Navigation from './components/Navigation/Navigation'
import MainPresentation from './components/Presentation/MainPresentation'
import Services from './components/Services/Services'
import Footer from './components/Footer/Footer'
import CardJobs from './components/Carousel/CardJobs'

const RenderComponents = () => {
  return (
    <>
     <Navigation />
      <MainPresentation/>
      <Services />
      <CardJobs />
      <Footer />
    </>
  )
}

export default RenderComponents