import React from 'react';

export default function Card(props) {
  // acá va tu código
  return <div>
    <h4>{props.name}</h4>
    <button onClick={props.onClose}>X</button>
    <p> MIN <br/> {props.min - 273.15 + "°"}</p> 
    <p> MAX <br/> {props.max - 273.15 + "°"}</p>
    <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="" />
  </div>
};