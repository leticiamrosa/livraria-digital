import React, { Component } from 'react';
import './css/pure-min.css';
import './css/side-menu.css';
import './App.css';
import $ from 'jquery'

import InputForm from './componentes/InputForm';
import ButtonSubmit from './componentes/ButtonSubmit';

class App extends Component {

  constructor() {
    super();
    this.state = {
      lista: [],
      name: '',
      email: '',
      address: '',
      novaLista: [],
    };
    this.setNome = this.setNome.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setAddress = this.setAddress.bind(this);
  }

  componentWillMount() {
    $.ajax({
      url: 'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole',
      dataType: 'json',
      success: (data) => {
        console.log(data);
        this.setState({ lista: data });
      }, 
      error: (error) => {
        console.log(error);
      },
    });
  }


  renderList() {
    const { lista } = this.state;
    const renderLista = lista.map(autor => {
      return (
      <tr key={autor.address}>
        <td>{autor.first} {autor.last}</td>
        <td>{autor.email}</td>
        <td>{autor.address}</td>
      </tr>
      );
    });
    return renderLista;
  }

  setNome(evento){
    this.setState({ name: evento.target.value});
    // console.log(evento.target.value);

  }
  
  setEmail(evento){
    this.setState({ email: evento.target.value});
    // console.log(evento.target.value);

  }
  
  setAddress(evento){
    this.setState({address: evento.target.value});
    // console.log(evento.target.value);

  }

  handleSendForm(e) {
    e.preventDefault();

    const { novaLista, name, email, address } = this.state;
    novaLista.push(name, email, address);
    console.log(novaLista);


  }


  render() {
    const { name, email, address } = this.state;

    return (

    <div id="layout">
        <a href="#menu" id="menuLink" className="menu-link">        
            <span></span>
        </a>

        <div id="menu">
            <div className="pure-menu">
                <a className="pure-menu-heading">Company</a>
                <ul className="pure-menu-list">
                    <li className="pure-menu-item"><a className="pure-menu-link">Home</a></li>
                    <li className="pure-menu-item"><a className="pure-menu-link">Autor</a></li>
                    <li className="pure-menu-item"><a className="pure-menu-link">Livro</a></li>
                </ul>
            </div>
        </div>
        <div id="main">
            <div className="header">
              <h1>Cadastro de Autores</h1>
            </div>
            <div className="content" id="content">
              <div className="pure-form pure-form-aligned">

                <form className="pure-form pure-form-aligned" onSubmit={this.handleSendForm.bind(this)} >
                  <InputForm label="Nome:" value={name} onChange={this.setNome} />
                  <InputForm label="Email:" value={email} onChange={this.setEmail} />
                  <InputForm label="Endereço:" value={address} onChange={this.setAddress} />

                  <ButtonSubmit text="Enviar"/>

                </form>             


              </div>  
              <div>            
                <table className="pure-table">
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>email</th>
                      <th>Endereço</th>
                    </tr>
                  </thead>
                  <tbody>
                  { this.renderList()}
                  </tbody>
                </table> 
              </div>             
            </div>
        </div>            
    </div>

    );
  }
}

export default App;
