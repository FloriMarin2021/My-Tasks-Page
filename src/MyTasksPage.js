import React from 'react';
import Header from './Header/Header';
import NavigationMeniu from './NavigationMeniu/NavigationMeniu';
import TaskForm from './TaskForm/TaskForm';
 // import './MyTasksPage.css';


const MyTasksPage=()=>{

    const list_array=[
        {
          id: 'open',
          label:'open'
        },

        {
          id: 'inProgress',
          label:'inProgress'
        },

        {
          id: 'done',
          label:'done'
        }
      ]

    return (

            <div className='MyTasksPage'>
               <NavigationMeniu />
               <Header />
               <TaskForm />

            </div>

    );
}

export default MyTasksPage;

 // should line 5 be commented? because the style is not applied

 // list_array can be renamed to something more specific like "myTasks" and
 // it should be in state and we have two options for that:
 // we can define this component as a class component
 // ex: class MyTasksPage extends React.Component {} and inside
 // brackets we can define in the contructor the state of the component
//  this.state = {
//   myTaks: array here...........
//  }
// or we can use hooks and use state, but i'd prefer to start with the class component first

// remove line 33 (the empty one)

// the label property from the array is what the user will see on the screen later
// so there's no need to write them with camel case, just "Open, In progress, Done"
// the ids are ok, we'll use them later in the project for different verifications