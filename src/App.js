import './App.css';
import freeCodeCampLogo from './imagenes/FreeCodeCamp_logo.svg.png';
import Boton from './components/Boton.js';
import Contador from './components/Contador';
import { useState } from 'react';


function App() {

  const [numClicks, setNumClicks] = useState(0);
  const manageClick = () => {
    setNumClicks(numClicks+1);
  };
  const resetCounter = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo freecodecamp' />
      </div>
      <div className='contenedor-principal'>
        <Contador
          numClicks={numClicks} />
        <Boton
          texto='Click'
          isButtonClick={true}
          managerClic={manageClick} />
        <Boton
          texto='Reset'
          isButtonClick={false}
          managerClic={resetCounter} />
      </div>
    </div>
  );
}

export default App;
