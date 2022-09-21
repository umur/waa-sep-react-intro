import React, { useState } from 'react';

export const Input = (props) => {
  const [hidden, setHidden] = useState(true);
  const { floating, type, className, label, value, invalid } = props;

  return (
    <div className={`mb-3 ${floating ? 'form-floating' : ''} ${className ? className : ''} ${type==='password' ? 'input-group' : ''}`}>
      {
        floating && 
        <input
          type={type === 'password' ? (hidden ? 'password' : 'text') : type}
          className={`form-control ${invalid ? 'is-invalid' : ''}`}
          id={props.id}
          placeholder={props.placeholder}
          disabled={props.disabled ? true : false}
          readOnly={props.readOnly ? true : false}
          value={value}
          name={props.name}
          onChange={props.changed}
        />
      }
      {
        floating && type === 'password' &&
        <span className="input-group-text" onClick={() => setHidden(hidden => !hidden)}>{hidden ? 'Show' : 'Hide'}</span>
      }
      <label
        htmlFor={props.id}
        className={floating ? '' : 'form-label'}
      >{label}</label>
      {
        !floating &&
        <input
          type={type === 'password' ? (hidden ? 'password' : 'text') : type}
          className={`form-control ${invalid ? 'is-invalid' : ''}`}
          id={props.id}
          placeholder={props.placeholder}
          disabled={props.disabled ? true : false}
          readOnly={props.readOnly ? true : false}
          value={value}
          name={props.name}
          onChange={props.changed}
        />
      }
      {
        !floating && type === 'password' &&
        <span className="input-group-text" onClick={() => setHidden(hidden => !hidden)}>{hidden ? 'Show' : 'Hide'}</span>
      }
      {
        invalid &&
        <div
          className="invalid-feedback">
          {props.errorMsg}
        </div>
      }
    </div>
  );
};