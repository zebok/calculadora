import './App.css';
import Tecla from './components/Tecla.js'
import Clear from './components/Clear.js'
import Pantalla from './components/Pantalla.js'
import { useState } from 'react';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = (valor) => (
          setInput(input + valor)
  );

  const calcularResultado = () => {
        if (input){
                setInput(eval(input))
        }
          
  };

  const limpiarPantalla = () => (
          setInput('')
  )


  return (
      <div className='calculadora'>
        
                <Pantalla input={input || " "} />
        
        <div className='contenedor-teclas'>
          <div className='fila-calculadora'>
                  <Tecla clic={agregarInput} >9</Tecla>
                  <Tecla clic={agregarInput}>8</Tecla>
                  <Tecla clic={agregarInput}>7</Tecla>
                  <Tecla clic={agregarInput}>/</Tecla>
          </div>
          <div className='fila-calculadora'>
                  <Tecla clic={agregarInput}>6</Tecla>
                  <Tecla clic={agregarInput}>5</Tecla>
                  <Tecla clic={agregarInput}>4</Tecla>
                  <Tecla clic={agregarInput}>*</Tecla>
          </div>
          <div className='fila-calculadora'>
                  <Tecla clic={agregarInput}>3</Tecla>
                  <Tecla clic={agregarInput}>2</Tecla>
                  <Tecla clic={agregarInput}>1</Tecla>
                  <Tecla clic={agregarInput}>-</Tecla>
          </div>
          <div className='fila-calculadora'>
                  <Tecla clic={agregarInput}>0</Tecla>
                  <Tecla clic={calcularResultado}>=</Tecla>
                  <Tecla clic={agregarInput}>.</Tecla>
                  <Tecla clic={agregarInput}>+</Tecla>
          </div>
                  <Clear clic={limpiarPantalla}>Limpiar</Clear>
        </div>
      </div>
  );
}

export default App;
