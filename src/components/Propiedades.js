//en un componente funcional, puedo pasarle propiedades por defecto. Para ello se utiliza la propiedad 'defaultProps' que tiene el prototipo de un componente

Propiedades.defaultProps = {
  porDefecto: 'Las props',
}

function Propiedades(props) {
  return (
    <div>
      <h2>{props.porDefecto}</h2>
      <ul>
        <li>{props.cadena}</li>
        <li>{props.numero}</li>
        <li>{props.booleano ? 'Verdadero' : 'Falso'}</li>
        <li>{props.arreglo.join(', ')}</li>
        <li>{props.objeto.nombre + ' - ' + props.objeto.apellido}</li>
        <li>{props.arreglo.map(props.funcion).join(', ')}</li>
        <li>{props.elementoReact}</li>
        <li>{props.componenteReac}</li>
      </ul>
    </div>
  )
}


export default Propiedades;