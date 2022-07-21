import React from "react";
import '../stylesheets/Textos.css';

function Textos(props) {
  return (
    <div className="contenedor-text">
      <img className="img-text" src={require(`../img/especie-${props.img}.jpg`)}  alt='Foto de guacamayos' />
      <div className="contenedor01">
        <p className="nombre"> <strong>{props.nombre}</strong> en {props.pais} </p>
        <p className="frase"> "{props.frase}" </p>
        <p className="text"> {props.texto} </p>
      </div>
    </div>
  );
}

export default Textos;