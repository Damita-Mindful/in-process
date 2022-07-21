import './App.css';
import Textos from './components/Textos'

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>La pachamama y el ejemplo de sus fascinantes criaturas</h1>
      <Textos 
        nombre = 'Guacamayos'
        pais = 'todas partes del mundo'
        frase = 'Un alma libre siempre va ser aquella que ama sin miedo.'
        texto = 'Los guacamayos son una especie fascinante en su forma de vivir en pareja. En la naturaleza estos animales viven en grandes bandadas, son sumamente fieles y una vez que han escogido a su compañero permanecen con él toda la vida.'
        img = '01' />
      <Textos
      nombre = 'Abejas'
      pais = 'todas partes del mundo'
      frase = 'Ninguna abeja vive si no es para servir a las demás. Siendo una, todas progresan.'
      texto = 'Las abejas son un gran ejemplo de trabajo en equipo debido a su labor grupal, trabajan para el beneficio del grupo no por el beneficio de cada una. Generando un alineamiento, donde cada uno de los esfuerzos individuales generan una dirección en común.'
      img = '02' />
      </div>
    </div>
  );
}

export default App;
