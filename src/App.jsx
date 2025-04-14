import React, { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  const calcBmi = (event) => {
    event.preventDefault();

    if (!weight || !height || weight <= 0 || height <= 0) {
      alert("Please enter valid weight and height!");
      return;
    }

    const heightInMeters = height / 39.37; // Convert inches to meters
    const weightInKg = weight / 2.205;     // Convert lbs to kg
    const bmiValue = weightInKg / (heightInMeters * heightInMeters);

    setBmi(bmiValue.toFixed(2));

    if (bmiValue < 18.5) {
      setMessage('You are underweight');
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setMessage('You are normal');
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setMessage('You are overweight');
    } else {
      setMessage('You are obese');
    }
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="App">
        <div className='container'>
          <h1>BMI Calculator</h1>
          <form onSubmit={calcBmi}>
            <div>
              <label htmlFor="weight">Weight (lbs)</label>
              <input
                type="number"
                id="weight"
                placeholder='Enter your weight'
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="height">Height (in)</label>
              <input
                type="number"
                id="height"
                placeholder='Enter your height'
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div>
              <button type="submit" className='btn btn-success'>Calculate BMI</button>
              <button type="button" className='btn btn-danger' onClick={reload}>Reset</button>
            </div>
            <div className='center'>
              <p id="bmi">BMI: {bmi}</p>
              <p>{message}</p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
