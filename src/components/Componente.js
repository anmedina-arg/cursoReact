//import { Component } from "react"; --> Esto se usa para definir los componentes de clases;

/*******COMPONENTE FUNCIONAL como funcion EXPRESADA*******/

const Componente = (props) => {
  return <h2>{props.msg}</h2>
}

/*

*******COMPONENTE FUNCIONAL como funcion DECLARADA*******

function Componente(props) {
  return <h2>{props.msg}</h2>
}

*/


/*

*******COMPONENTE BASADO EN CLASES*******

class Componente extends Component {
  render() {
    return <h2>{this.props.msg}</h2>
  }
}
*/
export default Componente;