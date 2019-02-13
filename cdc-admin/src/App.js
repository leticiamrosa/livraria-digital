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
    };
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
        <tr>
        <td>{autor.first} {autor.last}</td>
        <td>{autor.email}</td>
      </tr>
      );
    });
    return renderLista;
    
  }

  render() {

    return (

    <div id="layout">
        <a href="#menu" id="menuLink" className="menu-link">        
            <span></span>
        </a>

        <div id="menu">
            <div className="pure-menu">
                <a className="pure-menu-heading" href="#">Company</a>

                <ul className="pure-menu-list">
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Home</a></li>
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Autor</a></li>
                    <li className="pure-menu-item"><a href="#" className="pure-menu-link">Livro</a></li>
                </ul>
            </div>
        </div>
        <div id="main">
            <div className="header">
              <h1>Cadastro de Autores</h1>
            </div>
            <div className="content" id="content">
              <div className="pure-form pure-form-aligned">
                <form className="pure-form pure-form-aligned">
                  <div className="pure-control-group">
                    <label htmlFor="nome">Nome</label> 
                    <input id="nome" type="text" name="nome" value=""  />                  
                  </div>
                  <div className="pure-control-group">
                    <label htmlFor="email">Email</label> 
                    <input id="email" type="email" name="email" value=""  />                  
                  </div>
                  <div className="pure-control-group">
                    <label htmlFor="senha">Senha</label> 
                    <input id="senha" type="password" name="senha"  />                                      
                  </div>
                  <div className="pure-control-group">                                  
                    <label></label> 
                    <button type="submit" className="pure-button pure-button-primary">Gravar</button>                                    
                  </div>
                </form>             

              </div>  
              <div>            
                <table className="pure-table">
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>email</th>
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
