// import React, { useState } from 'react'
// import { toast } from 'react-toastify';

// const BMICalculator = () => {
//   const [height, setHeight] = useState("");
//   const [weight, setWeight] = useState("");
//   const [gender, setGender] = useState("");
//   const [bmi, setBmi] = useState("");
//   const [bmiMessage, setBmiMessage] = useState("");

//   const calculateBMI = (e)=>{
//     e.preventDefault();

//     if(!height || !weight || !gender){
//       toast.error("Kindly Enter Valid Height, Weight or Gender !");
//       return;
//     }

//     const heightInMeters = height / 100;
//     const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
//     setBmi(bmiValue);

//     let message = "";
//     if (bmiValue < 18.5) {
//       message = "You are Underweight. Consider seeking advice from our healthcare provider.";
//       toast.warning(message);
//     } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
//       message = "You have a Normal weight. Keep maintaining a healthy lifestyle.";
//       toast.success(message);
//     } else if (bmiValue >= 24.9 && bmiValue < 29.9) {
//       message = "You are overweight. Consider seeking advice from our healthcare provider.";
//       toast.warning(message);
//     } else {
//       message = "You are in the obese range. It is recommended to seek advice from our healthcare specialist.";
//       toast.error(message);
//     }
//     setBmiMessage(message);
//   };
  
  
//   return (<>
//   <section className='bmi'>
//     <h1>BMI CALCULATOR</h1>
//     <div className="container">
//       <div className="wrapper">
//         <form onSubmit={calculateBMI}>
//           <div>
//             <label>Height (cms)</label>
//             <input type="number" value={height} onChange={(e)=> setHeight(e.target.value)} required/>
//           </div>
//           <div>
//             <label>Weight (kg)</label>
//             <input type="number" value={weight} onChange={(e)=> setWeight(e.target.value)} required/>
//           </div>
//           <div>
//             <label>Gender</label>
//               <select value={gender} onChange={(e)=> setGender(e.target.value)}>
//                 <option value="">Select Gender</option>
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option>
//               </select>
//           </div>
//           <button type='submit' style={{cursor:"pointer", fontFamily:"sans-serif", color:"teal"}}>Calculate BMI</button>
//         </form>
//       </div>
//       <div className="wrapper">
//         <img src="/bmi.jpg" alt="bmi" />
//       </div>
//       <div className="result-wrapper">
//             <img src="/bmi.jpg" alt="BMI" />
//             {bmi && (
//               <div className="bmi-result">
//                 <h2>Your BMI: {bmi}</h2>
//                 <p>{bmiMessage}</p>
//               </div>
//             )}
//           </div>
//     </div>
//   </section>
//   </>
//   )
// }

// export default BMICalculator


// import React, { useState } from 'react';
// import { toast } from 'react-toastify';

// const BMICalculator = () => {
//   const [height, setHeight] = useState("");  // Height in cm
//   const [weight, setWeight] = useState("");  // Weight in kg
//   const [gender, setGender] = useState("");
//   const [bmi, setBmi] = useState("");
//   const [bmiMessage, setBmiMessage] = useState("");
  
//   const calculateBMI = (e) => {
//     e.preventDefault();

//     // Convert inputs to numbers
//     const heightInCm = parseFloat(height);
//     const weightInKg = parseFloat(weight);

//     // Validate input
//     if (isNaN(heightInCm) || isNaN(weightInKg) || !gender) {
//       toast.error("Kindly Enter Valid Height, Weight, and Gender!");
//       return;
//     }

//     // Convert height from cm to meters
//     const heightInMeters = heightInCm / 100;
//     // Calculate BMI
//     const bmiValue = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);
    
//     setBmi(bmiValue);

//     // Determine BMI category and set message
//     let message = "";
//     if (bmiValue < 18.5) {
//       message = "Underweight. Seek advice from our healthcare provider.";
//       toast.warning(message);
//     } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
//       message = "Normal weight. Keep maintaining a healthy lifestyle.";
//       toast.success(message);
//     } else if (bmiValue >= 25 && bmiValue < 29.9) {
//       message = "Overweight. Seek advice from our healthcare provider.";
//       toast.warning(message);
//     } else if (bmiValue >= 30) {
//       message = "Obese. Seek advice from our healthcare specialist.";
//       toast.error(message);
//     }
//     setBmiMessage(message);
//   };

//   return (
//     <>
//       <section className='bmi'>
//         <h1>BMI Calculator</h1>
//         <div className="container">
//           <div className="wrapper">
//             <form onSubmit={calculateBMI}>
//               <div className="input-group">
//                 <label>Height (cm)</label>
//                 <input
//                   type="number"
//                   value={height}
//                   onChange={(e) => setHeight(e.target.value)}
//                   required
//                   placeholder="Enter height in cm"
//                 />
//               </div>
//               <div className="input-group">
//                 <label>Weight (kg)</label>
//                 <input
//                   type="number"
//                   value={weight}
//                   onChange={(e) => setWeight(e.target.value)}
//                   required
//                   placeholder="Enter weight in kg"
//                 />
//               </div>
//               <div className="input-group">
//                 <label>Gender</label>
//                 <select
//                   value={gender}
//                   onChange={(e) => setGender(e.target.value)}
//                   required
//                 >
//                   <option value="">Select Gender</option>
//                   <option value="Male">Male</option>
//                   <option value="Female">Female</option>
//                 </select>
//               </div>
//               <button
//                 type='submit'
//               >
//                 Calculate BMI
//               </button>
//               {bmi && (
//                 <div className="bmi-message">
//                   <h2 style={{ color: "orange" }}>Your BMI = {bmi}</h2>
//                   <p>{bmiMessage}</p>
//                 </div>
//               )}
//             </form>
//           </div>
//           <div className="wrapper">
//             <img src="/bmi.jpg" alt="BMI illustration" />
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default BMICalculator;



import React, { useState } from 'react';
import { toast } from 'react-toastify';

const BMICalculator = () => {
  const [height, setHeight] = useState("");  // Height in cm
  const [weight, setWeight] = useState("");  // Weight in kg
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState("");
  const [bmiMessage, setBmiMessage] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();

    // Convert inputs to numbers
    const heightInCm = parseFloat(height);
    const weightInKg = parseFloat(weight);

    // Validate input
    if (isNaN(heightInCm) || isNaN(weightInKg) || !gender) {
      toast.error("Kindly Enter Valid Height, Weight, and Gender!");
      return;
    }

    // Convert height from cm to meters
    const heightInMeters = heightInCm / 100;
    // Calculate BMI
    const bmiValue = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);
    
    setBmi(bmiValue);

    // Determine BMI category and set message
    let message = "";
    if (bmiValue < 18.5) {
      message = "Underweight. Seek advice from our healthcare provider.";
      toast.warning(message);
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      message = "Normal weight. Keep maintaining a healthy lifestyle.";
      toast.success(message);
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      message = "Overweight. Seek advice from our healthcare provider.";
      toast.warning(message);
    } else if (bmiValue >= 30) {
      message = "Obese. Seek advice from our healthcare specialist.";
      toast.error(message);
    }
    setBmiMessage(message);
  };

  return (
    <>
      <section className='bmi'>
        <h1 style={{marginBottom:"50px", marginTop:"-15px", color:"wheat"}}>BMI Calculator</h1>
        <div className="container">
          <div className="wrapper">
            <form onSubmit={calculateBMI}>
              <div className="input-group">
                <label>Height (cm)</label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  required
                  placeholder="Enter height in cm"
                />
              </div>
              <div className="input-group">
                <label>Weight (kg)</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  required
                  placeholder="Enter weight in kg"
                />
              </div>
              <div className="input-group">
                <label>Gender</label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <button
                type='submit'
              >
                Calculate BMI
              </button>
              {bmi && (
                <div className="bmi-message">
                  <h2 style={{ color: "orange" }}>Your BMI = {bmi}</h2>
                  <p style={{ color: getColorBasedOnBMI(bmi) }}>{bmiMessage}</p>
                </div>
              )}
            </form>
          </div>
          <div className="wrapper">
            <img src="/bmi.jpg" alt="BMI illustration" />
          </div>
        </div>
      </section>
    </>
  );
};

// Helper function to get color based on BMI value
const getColorBasedOnBMI = (bmi) => {
  const bmiValue = parseFloat(bmi);
  if (bmiValue < 18.5) {
    return "orange"; // Underweight
  } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
    return "green"; // Normal weight
  } else if (bmiValue >= 25 && bmiValue < 29.9) {
    return "orange"; // Overweight
  } else if (bmiValue >= 30) {
    return "red"; // Obese
  }
  return "black"; // Default color
};

export default BMICalculator;
