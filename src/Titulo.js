import React from "react";
import logo from './itm2.png';
function Titulo(){
    return (
        
            <div className="titulo">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="titulo-txt">
                    <h1 className='name'>
                      Jeferson Rivas
                    </h1>
                    <h3>
                      Desarrollador web
                    </h3>
                </div>
            </div>
        
    )
}

export {Titulo}