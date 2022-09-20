import React from 'react';
import './Input.css';

const Input = (props) => {
  let inputElement = null;
  const inputClassess = ["input-element"];

  let validationError = null;
  if (props.invalid && props.shouldValidate && props.touched) {
    inputClassess.push("invalid");
    validationError = <p className="error">{props.errorMsg}</p>
  }

  switch (props.elementType) {
    case 'input':
      inputElement = <input
        className={inputClassess.join(" ")}
        {...props.config}
        value={props.value}
        onChange={props.changed} />;
      break;
    case 'textarea':
      inputElement = <textarea
        className={inputClassess.join(" ")}
        {...props.config}
        value={props.value}
        onChange={props.changed} />;
      break;
    case 'select':
      inputElement = (
        <select className={inputClassess.join(" ")}
          value={props.value}
          onChange={props.changed}>
          {props.config.options.map(option => (
            <option selected={option.selected ? true : false} key={option.value} value={option.value}>{option.displayValue}</option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = <input
        className={inputClassess.join(" ")}
        {...props.config}
        value={props.value}
        onChange={props.changed} />;
      break;
  }

  return (
    <div className="input">
      <label className='label'>{props.label}</label>
      {inputElement}
      {validationError}
    </div>
  );
}

export default Input;