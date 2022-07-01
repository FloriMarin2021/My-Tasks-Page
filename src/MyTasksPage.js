import React from 'react';
import NavigationMeniu from './NavigationMeniu/NavigationMeniu';
import Header from './Header/Header';
import TaskForm from './TaskForm/TaskForm';
import TaskTable from './TaskTable';


class MyTasksPage extends React.Component{ 
   constructor(props) {
      super(props);
     
  
      this.state = {
        tasks: [
         {
             nr: '1',
             description:'task nr 1',
             date:'22.12.2022',
             status:[ { id: 'open', label:'open' },
                      { id: 'in progress', label:'in progress'},
                      {  id: 'done', label:'done' }
                    ],
             action: ['o', 'e', 'd']
           },     
           {
             nr: '2',
             description:'task nr 2',
             date:'10.05.2021',
             status:[ { id:'open', label:'open' },
                      { id: 'inprogress', label:'inprogress'},
                      {  id: 'done', label:'done' }
                    ],
             action: ['o', 'e', 'd']
           },    
           {
            nr: '3',
             description:'task nr 3',
             date:'14.03.2020',
             status:[ { id: 'open', label:'open' },
                      { id: 'in progress', label:'in progress'},
                      {  id: 'done', label:'done' }
                    ],
             action: ['o', 'e', 'd']
           }
                 
        ]
      }
    
    }

/*
   
  handleDeleted(id) {
    const [list, setList] = React.useState(myTasks); 
    const newList=list.filter((item)=>item.id!==id);
          setList(newList); 

        return (
           <List list={list} onRemove={handleDeleted}/>
            );
    }
handleDeleted={this.handleDeleted}
*/


   render() {
   
       return (
        <div className='MyTasksPage'>
       
           <TaskTable   tasks={this.state.tasks}/>  
           <NavigationMeniu />
           <Header />
           <TaskForm/>
            
                          
        </div>   
       );
   }
}


export default MyTasksPage;