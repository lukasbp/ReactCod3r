import React from 'react'

export const compA = props =>
    <h1>Primeiro diz: {props.valor}</h1>
    

export const compB = props =>
    <h1>Segundo diz: {props.valor}</h1>

export default compA

// export default function(){
//     return <p>teste</p>
// }
// export {compA,compB}
