import React, { Component } from 'react';
import './css/pure-min.css';
import './css/side-menu.css';
import './App.css';
import $ from 'jquery'

class App extends Component {

  constructor() {
    super();
    this.state = {
      lista: [],
      first: undefined,
      email: undefined,
      address: undefined,
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
      success: function(data) {
        console.log(data);
        this.setState({ lista: data });
      }.bind(this)
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
    this.setState({ first: evento.target.value});
    console.log(evento.target.value);

  }
  
  setEmail(evento){
    this.setState({ email: evento.target.value});
    console.log(evento.target.value);

  }
  
  setAddress(evento){
    this.setState({address: evento.target.value});
    console.log(evento.target.value);

  }

  handleSendForm(e) {
    e.preventDefault();

    const { novaLista, first, email, address } = this.state;
    novaLista.push(first, email, address);
    console.log(novaLista);


  }


  render() {
    const { first, email, address } = this.state;

    return (

    <div id="layout">
        <a href="#menu" id="menuLink" className="menu-link">        
            <span></span>
        </a>

        <div id="menu">
            <div className="pure-menu">
                <a className="pure-menu-heading" >Company</a>
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
                  <div className="pure-control-group">
                    <label htmlFor="first">Nome</label> 
                    <input id="first" type="text" name="first" value={first} onChange={this.setNome} />                  
                  </div>
                  <div className="pure-control-group">
                    <label htmlFor="email">Email</label> 
                    <input id="email" type="email" name="email" value={email} onChange={this.setEmail} />                  
                  </div>
                  <div className="pure-control-group">
                    <label htmlFor="endereco">Endereço</label> 
                    <input id="endereco" type="text" name="endereco" value={address}  onChange={this.setAddress} />                                      
                  </div>
                  <div className="pure-control-group">                                  
                    <label></label> 
                    <button type="submit" className="pure-button pure-button-primary" >Gravar</button>                                    
                  </div>
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
                  { this.renderList()}
                </table> 
              </div>             
            </div>
        </div>            
    </div>

    );
  }
}

export default App;
