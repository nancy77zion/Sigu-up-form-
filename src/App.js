import Inputs from './components/Inputs';
import { BsFillPersonFill, BsFillEnvelopeFill, BsFillKeyFill, BsFillTelephoneFill } from "react-icons/bs";
import './app.css';
import { useState } from 'react';


function App(props) {

  const [inputs, setInputs] =useState({});
  console.log(inputs);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }


  return (
    <main className="container">
      <form onSubmit={handleSubmit}>
        <Inputs label={'First Name: '} icon={<BsFillPersonFill />} placeholder={'First Name'} type={'text'} name={'firstName'} value={inputs.firstName || ''} onChange={handleChange}/>
        <Inputs label={'last Name: '}  icon={<BsFillPersonFill />} placeholder={'Last Name'} type={'text'} name={'lastName'} value={inputs.lastName || ''} onChange={handleChange}/>
        <Inputs label={'Email: '}  icon={<BsFillEnvelopeFill />} placeholder={'Email Name'} type={'email'} name={'email'} value={inputs.email || ''} onChange={handleChange}/>
        <Inputs label={'Password: '}  icon={<BsFillKeyFill />} placeholder={'Password'} type={'password'} name={'password'} value={inputs.password || ''} onChange={handleChange}/>
        <Inputs label={'Mobile Number: '}  icon={<BsFillTelephoneFill />} placeholder={'Mobile Name'} type={'tel'} name={'tel'} value={inputs.tel || ''} onChange={handleChange}/>
        <div className="box radio">
				  <label for="gender" class="fl fontLabel"> Gender: </label>
				  <span><input type="radio" name="female" value={inputs.female || ''} onChange={handleChange} required /> Female</span> 
				  <span><input type="radio" name="male" value={inputs.male || ''} onChange={handleChange} required /> Male</span>
		    </div>
        <div className="box terms">
				  <span><input type="checkbox" name="terms" required/> I accept the terms and conditions</span>
			  </div>
			  <div className="box btn">
				  <input type="submit" name="submit" id="submit" class="submit" />
			  </div>
      </form>
    </main>
  )
}

export default App;
