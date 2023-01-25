import logo from './logo.svg';
import './App.css';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <section>
          <Componente msg='Hola soy un Componente Funcional Expresado desde una prop' />
          <hr />
          <Propiedades
            cadena='esto es una cadena de texto'
            numero={19}
            booleano={true}
            arreglo={[1, 2, 3]}
            objeto={{
              nombre: 'andres',
              apellido: 'medina',
            }}
            funcion={(num) => num * num}
            elementoReact={<i>Esto es un elemento de React</i>}
            componenteReac={<Componente msg='Hola soy un componente de react pasado como propiedad' />}
          />
        </section>
      </header>
    </div>
  );
}

export default App;
