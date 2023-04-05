import React from 'react';
import { FcContacts, FcCellPhone,  FcCalendar, FcFeedback } from "react-icons/fc";
import '../components/inputs.css';

const Inputs = (props) => {
	
	return (
	<div className="box">
		<Label />
		<Icon />
		<InputBox />
		<ClrBox />
	</div>
  )
}


export const Label = () => <label htmlFor="firstName" className="fl fontLabel"> First Name: </label>
export const Icon = () => { return (
	<div className="new icon"><FcContacts /></div>)
}
export const InputBox = () => {
	<div className="fr"><input type="text" name="firstName" placeholder="First Name" className="textBox" autoFocus="on" required/></div>
}
export const ClrBox = () =>  <div className="clr"></div>


export default Inputs;