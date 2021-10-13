import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { CSVReader } from "react-papaparse";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import DashBoard from './Dashboard';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import 'font-awesome/css/font-awesome.min.css';

class DataParser extends Component {
  constructor(props){
    super(props);
    this.openFAQ = this.openFAQ.bind(this);
  }

  handleOnDrop = data => {
    //ToDo: passar data para nova classe e fazer import (será a pagina das estatisticas) e colocar o bootstrap
    let elemento = <DashBoard csv={data}/>
    console.log(data)
    ReactDOM.render(elemento, document.getElementById('root'));   
  };

  handleOnError = (err, file, inputElem, reason) => { 
    const MySwal = withReactContent(Swal);
        MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Check console logs</a>'
      })
      console.log(err);
    };

  openFAQ(){
    const MySwal = withReactContent(Swal);
    MySwal.fire({
    showCancelButton: false,
    showConfirmButton: false,
    icon: 'question',
    title: 'FAQ',
    text: 'Deve inserir o .csv adquirido por "Export All Pages"',
    footer: '<a href="https://www.cert.rcts.pt/pt/" target="_blank" >CERT RCTS</a>'
  })
  }

  render() {
    // Your render function
    return(
      <div style={{width: '100vw', height: '100vh'}}>
        <div 
        style={{
          position: 'absolute', left: '50%', top: '20%',
          transform: 'translate(-50%, -80%)'
      }}>
        <h1>Eramba CSV Dashboard</h1>
      </div>
        <div
    style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }}
    >
      <CSVReader
      onDrop={this.handleOnDrop}
      onError={this.handleOnError}
      removeButtonColor='#659cef'
      style={{
        dropArea: {
          borderColor: "#467cf0",
          borderRadius: 20,
          width: 540,
          height: 300,
        },
      }}
    >
     <i className="fa fa-plus fa-5x" />
    </CSVReader>
    
    </div>      
    <div 
        style={{
          position: 'absolute', left: '50%', top: '80%',
          transform: 'translate(-50%, -20%)'
      }}>

        <button className="btn-example" onClick={this.openFAQ}>FAQ</button>
        </div>
    </div>
    )
  }
}

export default DataParser;