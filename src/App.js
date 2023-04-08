import Inputs from './components/Inputs';
import { BsFillPersonFill, BsFillEnvelopeFill, BsFillKeyFill, BsFillTelephoneFill } from "react-icons/bs";
import './app.css';
import { useState } from 'react';


function App(props) {

  const [inputs, setInputs] =useState({});
  console.log(inputs);

  const handleChange = (event) => {
    const names = event.target.name;
    const values = event.target.value;
    setInputs(val => ({...val, [names]: values}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }


  return (
    <main className="container">
      <form onSubmit={handleSubmit}>
        <Inputs label={'First Name: '} icon={<BsFillPersonFill />} /*placeholder={'First Name'}*/ type={'text'} name={'firstName'} value={'firstName'} />
        <Inputs label={'last Name: '}  icon={<BsFillPersonFill />} /*placeholder={'Last Name'}*/ type={'text'} name={'lastName'} value={'lastName'} />
        <Inputs label={'Email: '}  icon={<BsFillEnvelopeFill />} /*placeholder={'Email Name'}*/ type={'email'} name={'email'} value={'email'} />
        <Inputs label={'Password: '}  icon={<BsFillKeyFill />} /*placeholder={'Password'}*/ type={'password'} name={'password'} value={'password'} />
        <Inputs label={'Mobile Number: '}  icon={<BsFillTelephoneFill />} /*placeholder={'Mobile Name'}*/ type={'tel'} name={'tel'} value={'tel'} />
        <div className="box radio">
				  <label htmlFor='gender' className="fl fontLabel"> Gender: </label>
          <div className='flexRadio'>
				    <span><input type="radio" name="female" value={inputs.female || ''} onChange={handleChange} required /> Female</span> 
				    <span><input type="radio" name="male" value={inputs.male || ''} onChange={handleChange} required /> Male</span>
          </div>
		    </div>
        <div className='box terms'>
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
