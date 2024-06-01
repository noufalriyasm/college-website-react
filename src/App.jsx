import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programme from './Components/Programes/Programme'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <div className="container">
        <Title subtitle="Our Programe" title="What we Offer"></Title>
      <Programme></Programme>
      <About></About>
      <Title subtitle="Gallery" title="Campus Photos"></Title>
      <Campus></Campus>
      <Title subtitle="Testimonials" title="What Student Says"></Title>
      <Testimonials></Testimonials>
      <Title subtitle="Contact us" title="Get In Touch"></Title>
      <Contact></Contact>
      <Footer></Footer>
      </div>
      
    </div>
  )
}

export default App
