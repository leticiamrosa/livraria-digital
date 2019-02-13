import React from 'react';
import '../css/pure-min.css';
import '../css/side-menu.css';

const InputForm = ({
    label, inputValue, onChange
}) => (
    <div className="pure-control-group">
        <label>{label}</label> 
        <input type="text" name={inputValue} value={inputValue} onChange={onChange} />                  
    </div>
);

export default InputForm;
