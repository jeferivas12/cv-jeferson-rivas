import React from "react";

function Educacion(){
    const [educacion, setEducacion] = React.useState(false)
    const onClickEdu = ()=>{
        setEducacion(!educacion)
    }
    return(
        <div className="educacion">
            <h3 onClick={onClickEdu}>Educación <span>{educacion?"-":"+"}</span></h3>
            {educacion && <ul>
                <li>Tecnologo en sistemas de información. ITM</li>
                <li>Javascript. Platzi</li>
                <li>React. Platzi</li>
                <li>FrontEnd Developer. Platzi</li>
            </ul>}
        </div>
    )
}

export {Educacion}