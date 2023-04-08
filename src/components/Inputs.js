import React from 'react';
import '../components/inputs.css';
import { useState } from 'react';

const Inputs = ({ label, icon, placeholder, type, name, value }) => {

	const [inputs, setInputs] =useState({});
  console.log(inputs);

  const handleChange = (event) => {
    const names = event.target.name;
    const values = event.target.value;
    setInputs(val => ({val, [names]: values}))
  }

	return (
		<div className='box'>
			<label htmlFor='firstName' className='fl fontLabel'>{label}</label>
			<div className='new icon'>{icon}</div>
			<div className='fr'><input type={type} name={name} value={inputs.value || ''} /*placeholder={placeholder}*/ className='textBox' onChange={handleChange} required/></div>
			<div className='clr'></div>
		</div>
	)
}

export default Inputs;