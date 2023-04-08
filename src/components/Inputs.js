import React from 'react';
import '../components/inputs.css';

const Inputs = ({ label, icon, placeholder, type, name, value }) => {
	return (
		<div className="box">
			<label htmlFor="firstName" className="fl fontLabel">{label}</label>
			<div className="new icon">{icon}</div>
			<div className="fr"><input type={type} name={name}  value={value} placeholder={placeholder} className="textBox" autoFocus="on" required/></div>
			<div className='clr'></div>
		</div>
	)
}

export default Inputs;