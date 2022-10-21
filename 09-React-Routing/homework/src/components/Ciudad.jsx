import React from 'react';


export default function Ciudad({ciudadJSX}){
    return (
        <div className="ciudad">
                <div className="container">
                    <h2>{ciudadJSX.name}</h2>
                    <div className="info">
                        <div>Temperatura: {ciudadJSX.temp} ºC</div>
                        <div>Clima: {ciudadJSX.weather}</div>
                        <div>Viento: {ciudadJSX.wind} km/h</div>
                        <div>Cantidad de nubes: {ciudadJSX.clouds}</div>
                        <div>Latitud: {ciudadJSX.latitud}º</div>
                        <div>Longitud: {ciudadJSX.longitud}º</div>
                    </div>
            </div>
        </div>
    )
}