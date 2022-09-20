import React from 'react';
import './Spinner.css';

const Spinner = (props) => {
  <div className={["loader", props.className].join(" ")}>Loading...</div>
}

export default Spinner;