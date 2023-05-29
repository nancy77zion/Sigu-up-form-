import React from 'react';
import '../components/details.css';

const Details = ({ label, icon, placeholder, type, name, onChange}) => {

	return (
		<div className='box'>
			<label htmlFor={name} className='fl fontLabel'>{label}</label>
			<div className='new icon'>{icon}</div>
			<div className='fr'>
				<input type={type}
					name={name}
					placeholder={placeholder}
					onChange={onChange}
					className='textBox' 
					required/>
				</div>
			<div className='clr'></div>
		</div>
	)
}

export default Details;