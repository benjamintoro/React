import React from "react";
class Micomponente extends React.Component{
    render(){
        let vehiculo ={
            automovil: ['5 puertas', 'automatico','Full equipo'],
            Marca: 'Mercedez Benz',
            precio: 450000000
        }
        return(
            <div className="mi-componente">
                <h1>{'Marca del vehiculo : ' +vehiculo.Marca}</h1>
                <h1>{'Precio del vehiculo : ' +vehiculo.precio}</h1>
            </div>
        )
    }
}


export default Micomponente; 