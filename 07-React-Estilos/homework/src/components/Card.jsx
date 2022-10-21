import React from "react";
import style from "./Card.module.css";

export default function Card(props) {
  // acá va tu código
  return (
    <div className={style.container}>
      <div className={style.title}>
        <h4>{props.name}</h4>
        <button onClick={props.onClose}>X</button>
      </div>
      <div className={style.temp}>
        <div>
          <p> MIN </p>
          <div>
            <p>{props.min - 273.15 + "°"}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-arrow-bar-to-down"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="4" y1="20" x2="20" y2="20" />
              <line x1="12" y1="14" x2="12" y2="4" />
              <line x1="12" y1="14" x2="16" y2="10" />
              <line x1="12" y1="14" x2="8" y2="10" />
            </svg>
          </div>
        </div>
        <div>
          <p> MAX </p>
          <div>
            <p>{props.max - 273.15 + "°"}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-arrow-bar-to-up"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="12" y1="10" x2="12" y2="20" />
              <line x1="12" y1="10" x2="16" y2="14" />
              <line x1="12" y1="10" x2="8" y2="14" />
              <line x1="4" y1="4" x2="20" y2="4" />
            </svg>
          </div>
        </div>
        <img
        src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
        alt=""
      />
      </div>
      
    </div>
  );
}
