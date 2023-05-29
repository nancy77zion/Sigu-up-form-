import Details from './components/Details';
import { BsFillPersonFill, BsFillEnvelopeFill, BsFillKeyFill, BsFillTelephoneFill } from "react-icons/bs";
import './app.css';
import { useState } from 'react';


function App(props) {

  const [inputs, setInputs] =useState({});
  console.log(inputs);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(inputs));
    
  }

  const handleChange = (event) => {
    const names = event.target.name;
    const values = event.target.value;
    setInputs((val) => ({...val, [names]: values}))
  }

 


  return (
    <main className="container">
      <form onSubmit={handleSubmit}>
        <Details 
          label="First Name: "
          icon={<BsFillPersonFill />} 
          placeholder="First Name"
          type="text"
          name="firstName"
          onChange={handleChange} />
        <Details 
          label="last Name: " 
          icon={<BsFillPersonFill />} 
          placeholder="Last Name"
          type="text"
          name="lastName"
          onChange={handleChange} />
        <Details 
          label="Email: "
          icon={<BsFillEnvelopeFill />}
          placeholder="Email Name"
           type="email"
          name="email"
          onChange={handleChange} />
        <Details
         label="Password: "
          icon={<BsFillKeyFill />}
          placeholder="Password"
          type="password"
          name="password"
          onChange={handleChange} />
        <Details
           label="Mobile Number: "
           icon={<BsFillTelephoneFill />}
           placeholder="Mobile Name"
           type="tel"
           name="tel"
           onChange={handleChange} />

        <div className="box radio">
				  <label htmlFor="gender" className="fl fontLabel"> Gender: </label>
          <div className="flexRadio">
				    <span><input type="radio" name="gender" onChange={handleChange} required /> Female</span> 
				    <span><input type="radio" name="gender" onChange={handleChange} required /> Male</span>
          </div>
		    </div>
        <div className="box terms">
				  <span style={{ marginLeft: "80px" }}><input type="checkbox" name="terms" required/> I accept the terms and conditions</span>
			  </div>
			  <div className="box btn">
				  <input type="submit" name="submit" id="submit" className="submit" />
			  </div>
      </form>
    </main>
  )
}

export default App;
