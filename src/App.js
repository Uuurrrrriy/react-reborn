import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

// const Button = ({value,isDisabled,onClick})=> {
//
//     const innerClickHandler = ()=>{
//       onClick('some data from child button')
//     };
//
//     return (
//         <div onClick={innerClickHandler} className={`btnClass ${isDisabled && 'disabled'}`}>
//             {value}
//         </div>
//     )
// };

// value
// onClickHandler
// is disabled
// classname

const Switcher = ({onClick})=>{
    const [isOn,setIsOn] = useState(false);

    const toggleSwitcher = () => {
        setIsOn(!isOn)
    };

    return (
      <div className={`switcher ${ isOn ? 'isOn' : 'isOff' }`} onClick={toggleSwitcher}>
        <div className={`tumbler`}/>
      </div>
  )
};

function App() {
    // const [val,setVal] = useState('');
    //
    // const onClickFromParent = data=> console.log(data, 'called in app');

  return (
    <div className="App">
        <Switcher/>
        {/*<input type='text' value={val}  onChange={ ({target: {value}})=>setVal(value) }/>*/}
         {/*//  <Button value='345' isDisabled={val.length < 10} onClick={onClickFromParent}/>*/}
    </div>
  );
}

export default App;
