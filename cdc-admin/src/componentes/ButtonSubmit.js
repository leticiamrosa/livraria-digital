import React from 'react';
import '../css/pure-min.css';
import '../css/side-menu.css';

const ButtonSubmit = ({
    text,
}) => (
    <div className="pure-control-group">                                  
    <label></label> 
    <button type="submit" className="pure-button pure-button-primary" >{text}</button>                                    
  </div>
);

export default ButtonSubmit;
