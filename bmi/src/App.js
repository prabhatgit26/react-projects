// import React, { useState } from 'react';

// function App() {
//   const [weight, setweight] = useState(0);
//   const [height, setHeight] = useState(0);
//   const [bmi, setBmi] = useState('');
//   const [message, setMessage] = useState('');

// //logic

// let calcBmi = (e)=>{
  
//   e.preventDefault();
//   if(weight === 0 || height === 0){
//     alert('Please Enter Valid Weight and height');
//   }
//   else{
//     let bmi = (weight/(height*height)*703);
//     setBmi(bmi.toFixed(1))


//     //message logic
//     if(bmi<25){
//       setMessage('You Are Underweight.');
//     }
//     else if(bmi>=25 && bmi<30){
//       setMessage('You Are Healthy Weight.');
//     }
//     else{
//       setMessage('You Are Overweight.');
//     }
//   }
// }

// let reload =()=>{
//   window.location.reload()
// }

//   return (
//       <div className='App'>
//         <div className='container'>
//           <h2>BMI Calculator</h2>
//           <form onSubmit={calcBmi}>
//             <div>
//               <label>Weight (lbs)</label>
//               <input type="text" placeholder='Enter Your Weight' value={weight} onChange={(e)=> setweight(e.target.value)}/>
//             </div>

//             <div>
//               <label>Height (inch)</label>
//               <input type="text" placeholder='Enter Your Height' value={height} onChange={(e)=> setHeight(e.target.value)}/>
//             </div>

//             <div>
//               <button className='btn' type='submit'>Submit</button>
//               <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
//             </div>

//             <div className='center'>
//               <h3>Your Body Mass Index :{bmi}</h3>
//               <p>{message}</p>
//             </div>
//           </form>
//         </div>
//       </div>
   
//   );
// }

// export default App;




import React, { useState } from 'react';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  // Logic to calculate BMI
  const calcBmi = (e) => {
    e.preventDefault();
    if (weight <= 0 || height <= 0) {
      alert('Please enter valid weight and height.');
    } else {
      // Convert height from cm to meters for the BMI formula
      const heightInMeters = height / 100;
      const bmi = weight / (heightInMeters * heightInMeters);
      setBmi(bmi.toFixed(1));

      // Set the message based on BMI value
      if (bmi < 18.5) {
        setMessage('You are underweight.');
      } else if (bmi >= 18.5 && bmi < 25) {
        setMessage('You are at a healthy weight.');
      } else if (bmi >= 25 && bmi < 30) {
        setMessage('You are overweight.');
      } else {
        setMessage('You are obese.');
      }
    }
  };

  // Reload the page
  const reload = () => {
    window.location.reload();
  };

  return (
    <div className='App'>
      <div className='container'>
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label className='label'>Weight (kg)</label>
            <input
              type="number"
              placeholder='Enter Your Weight'
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              min="0"
            />
          </div>

          <div>
            <label className='label' style={{marginTop:"19px"}}>Height (cm)</label>
            <input
              type="number"
              placeholder='Enter Your Height'
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              min="0"
            />
          </div>

          <div>
            <button className='btn' type='submit' >Submit</button>
            <button className='btn btn-outline' onClick={reload} type='button' style={{marginLeft:"5px"}}>Reload</button>
          </div>

          <div className='center'>
            <h3>YOUR BODY MASS INDEX : {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
