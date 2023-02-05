import React from "react";

function Experiencia(){
    const [experiencia, setExperiencia] = React.useState(false)
    const onClickExp = ()=>{
        setExperiencia(!experiencia)
    }
    return(
        <div>
            <h3 onClick={onClickExp}>Experiencia <span>{experiencia?"-":"+"}</span></h3>
            { experiencia && <div>
            <p><b>Analista de desarrollo</b> CADENA.S.A 5 años: Generación de documentos a partir de data en diferentes estructuras y formatos, haciendole estructuración, agrupamientos y formateo. Diseño de los documentos. Automatización de los procesos. Optimización de procesos. Desarrollo de proyectos: Nuevas facturas EPM, CENS, ESA, factura dinámica EPM. Generación de comunicaciones: email, impresas, sms, presentación digital</p>
            <p><b>Analista funcional</b> CADENA.S.A 2 años: implementar a traves de proveedores de desarrollo requerimientos y necesidades tecnologicas para la compañia, enfocado en un gran porcentaje en SQL y metodología Scrum</p>
            </div>}
        </div>
    )
}

export {Experiencia}