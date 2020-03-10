import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeiroComponente from './components/PrimeiroComponente'
// import A, {compB as B} from './components/DoisComponentes'
// import MultiElementos from './components/MultiElementos'
// import FamiliaSilva from './components/FamiliaSilva'
// import Familia from './components/Familia'
// import Membro from './components/Membro'
// import ComponenteComFuncao from './components/ComponenteComFuncao'
import Pai from './components/Pai'


const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <Pai/>
        {/* <ComponenteComFuncao/> */}
        {/* <Familia sobrenome="Pereira">
            <Membro nome="Andre" />
            <Membro nome="Pedro" />
        </Familia> */}
        {/* <FamiliaSilva/> */}
        {/* <MultiElementos/>
        <A valor="Olá eu sou o A"/>
        <B valor="B na área"/> */}
        {/* <primeiroComponente /> */}
    </div>
, elemento)