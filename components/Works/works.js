import React from 'react';
import "./works.css"

const Works = () => {
  return (
    < >
    
    <section id="works">
    <h1 className='head'>Projects</h1>

        <div  className='proj'>
        

        <h1 className='bank'>Banking Application</h1>
        <p className='para'>I have build a banking application using Html,Css,Java Script,React JS and redux. In these project i have done Balance deposit and withdraw trasaction and updating in table and many more....</p>
        
        <div className='linkStyle'>
        <h3>Github Link :</h3>

        <a className="white" href="https://github.com/Saikiran5000/Bank-Transaction.git" target="_blank">
        https://github.com/Saikiran5000/Bank-Transaction.git
      </a>
      </div>

        <h1 className='bank'>To-do list website</h1>
        <p className='para'>I have build these todo application using html,css and java script.Todo list is used for organizing tasks. In these i applied CRUD operation to make it dynamically.. </p>
        <div className='linkStyle'>
        
        <h3>Github Link :</h3>
        <a  className='white' href="https://github.com/Saikiran5000/TODO-LIST-1.git" target="_blank">
         https://github.com/Saikiran5000/TODO-LIST-1.git
      </a>
      </div>


        <h1 className='bank'>Food Much Website</h1>
        <p className='para'>Food much is a responsive website where you can see list of food items navbar and different sections that navigate to it..</p>
        <div className='linkStyle'>
          <h3>Github Link :</h3>
        <a className="white" href="https://github.com/Saikiran5000/ADD-MEAL.git" target="_blank">
        https://github.com/Saikiran5000/ADD-MEAL.git
      </a>
      </div>
        </div>
    </section>
    </>
  )
}

export default Works
