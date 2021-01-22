import React from "react";

export default function Saludar(props){
    console.log(props);
    // const saludar = () => {
    //     console.log("Hola JL")
    //   }
      const saludarfn = (name) => {
        console.log("Hola JL"+ name)
      }
    return (
        <div>
            <p>Hola {props.userInfo.nombre} {props.userInfo.apellido} tiene {props.userInfo.edad} años y le gusta el color {props.userInfo.color}.</p>
            <button onClick={props.saludarFn}>Saludar</button>
        </div>
        
    );
}    
