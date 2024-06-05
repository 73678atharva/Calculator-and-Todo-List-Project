import Display from './Components/Display.jsx'
import styles from './App.module.css'
import ButtonContainer from './Components/ButtonContainer.jsx'
import { useState } from 'react'
function App() {

  const [value,setValue] = useState("");

  const onButtonClick = (event)=>{
    const newValue = event.target.innerText;
    if(newValue === 'C'){
     setValue(" ")
    }else if(newValue === '='){
      const result = eval(value);
      setValue(result);
    }
    else{
      setValue(value + newValue);
    }
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.AppContainer}>
        <Display display = {value}/>
        <ButtonContainer onButtonClick = {onButtonClick}/>
      </div>
    </div>
  )
}

export default App
