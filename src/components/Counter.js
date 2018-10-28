import React, { Component } from 'react';

class Counter extends Component{
    state = {
        angka: 0
    };

    tambah=()=>{
        this.setState({
            angka: this.state.angka + 1
        });
        console.log(this.state.angka);
    };

    kurang=()=>{
        this.setState({
            angka: this.state.angka - 1
        });
        console.log(this.state.angka);
    };

    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
                <h1>{this.state.angka}</h1>
                <button onClick={()=>this.tambah()}>Tambah</button>
                <button onClick={()=>this.kurang()}>Kurang</button>
            </div>
        );
    }
}

export default Counter;