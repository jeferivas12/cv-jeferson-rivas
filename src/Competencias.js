import React from "react";

function Competencias(){
    const [competencia, setCompetencia] = React.useState(false)
    const onClicComp = ()=>{
        setCompetencia(!competencia)
    }
    return(
        <div className="competencias">
            <h3 onClick={onClicComp}>Competencias <span>{competencia?"-":"+"}</span></h3>
            { competencia && <ul>
                <li>Desarrollo web</li>
                <li>Javascript</li>
                <li>React js</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>SQL</li>
                <li>scrum</li>
                <li>S3</li>
            </ul>}
        </div>
    )
}

export {Competencias}