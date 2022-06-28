import React from 'react';
import ReactDOM from 'react-dom';
import MyTasksPage from './MyTasksPage';


const App=()=>{

        return (
        <div>
         <MyTasksPage/>
        </div>
        );
    }



//take the react component and show it on the screen
ReactDOM.render(<App/>, document.getElementById('root'));

// check the indentation from return, it should look more like
// return (
//     <div>
//         <MyTasksPage/>
//     </div>
// );