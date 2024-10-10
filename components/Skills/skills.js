import React from 'react';
import "./skills.css";

const Skills = () => {
  return (
    <section id="skills">
      
      <span className='skillTitle'>What I do</span>
      <span className='skillDesc'>I am a skilled and passionate FullStack Web Developer</span>

      <div className='skillBars'>
        <div className='skillBar'>
            <div className='skillBarText'>
            <h2 className='skillStyle'>Frontend Technologies</h2>
            <p>Html,Css,Bootstrap,Java Script,React Js</p>
            </div>
        </div>

        <div className='skillBar'>
            <div className='skillBarText'>
            <h2 className='skillStyle'> Backend Technologies</h2>
            <p> Python, Node Js, Express Js</p>
            </div>
        </div>

        <div className='skillBar'>
            <div className='skillBarText'>
            <h2 className='skillStyle'> Database Technologies</h2>
            <p> Sql and Mongo Db</p>
            </div>
        </div>

        <div className='skillBar'>
            <div className='skillBarText'>
            <h2 className='skillStyle'>Tools</h2>
            <p> Git,Github,VS code,Pycharm and Notepad</p>
            </div>
        </div>


      </div>




    </section>
  )
}

export default Skills
