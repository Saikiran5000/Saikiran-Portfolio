
import React from 'react';
import Navbar from './components/Navbar/navbar';
import Intro from './components/Intro/intro';
import Skills from './components/Skills/skills';
import Works from './components/Works/works';
import Contact from './components/Contact/contact';
const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Contact/>
      
    </div>
  )
}












export default App;
