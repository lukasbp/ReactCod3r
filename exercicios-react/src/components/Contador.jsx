import React, { Component } from 'react'

export default class Contador extends Component {
    state = {
        numero: this.props.numeroInicial
    }
    
    maisUm = () => {
        this.alterarNumero(+1)
        // this.setState({numero: this.state.numero + 1})
        //this.state.numero = this.state.numero + 1
    }
    menosUm = () => {
        this.alterarNumero(-1)
        // this.setState({numero: this.state.numero - 1})
    }

    alterarNumero = diferenca => {
        this.setState({
            numero: this.state.numero + diferenca
        })
    }

    render() {
        return (
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={() => this.maisUm()}>Incrementar</button>
                <button onClick={() => this.menosUm()}>Decrementar</button>
                <button onClick={() => this.alterarNumero(10)}>Incrementar 10</button>
                <button onClick={() => this.alterarNumero(-10)}>Decrementar 10</button>
            </div>
        )
    }
}

//solução 1 bind
// constructor(props){
//     super(props)
//     this.maisUm = this.maisUm.bind(this)
// }

//solução 2 arrow com click
/* <button onClick={() => this.maisUm()}>Incrementar</button> */ 

//solução 3 arrow
// maisUm = () => {
//     this.props.numero++
// }