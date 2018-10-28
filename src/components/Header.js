import React, {Component} from 'react';

//component class
class HeaderClass extends Component {
    handleClick=()=>{
      alert('yah diklik');
    };
  
    render() {
      return (
        <div>
          <h1>Nama : {this.props.nama}</h1>
          <h1>Kelas : {this.props.kelas}</h1>
          {/* <h2>Ini merupakan header Class Component, dan ini isi state {this.state.angka}</h2> */}
          <button onClick={()=>this.handleClick()}> Jangan diklik!</button>
        </div>
      );
    }
  }
  
//   //component functional
//   const Header =()=>{
//     return <h1>yang ini Header Functional Component</h1>;
//   }

  export default HeaderClass;