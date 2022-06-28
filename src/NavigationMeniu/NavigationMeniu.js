import './NavigationMeniu.css';


const NavigationMeniu=()=>{
    return (
      <div className='NavigationMeniu'>
        <button className="btn1"> Home</button>
        <button className="btn2"> My tasks</button>
        <button className="btn3">Graph </button>
        <button className="btn4"> Help</button>
      </div>
    );
}


export default NavigationMeniu

// the class names for buttons should be navigation-menu__btn,
// this is the BEM rule parent-class__child-class
// also you can have the same class for all buttons,
// no need to add different classes. And if they are not defined in
// the css file, we can remove them from this file