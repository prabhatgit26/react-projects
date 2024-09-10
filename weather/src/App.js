import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [city, setCity] = useState("Mumbai");
  const [weatherData, setWeatherData] = useState(null);
  const audioRef = useRef(new Audio('/bgmusic.wav'));     // Use ref for audio element
  const [isPlaying, setIsPlaying] = useState(false);

  const currentDate = new Date();
  const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

  const month = months[currentDate.getMonth()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();
  const formetedDate = `${month} ${day}, ${year}`;

  const API_KEY = "e286c57f657428ce9214d740682e6741";

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
          q: city,
          appid: API_KEY,
          units: 'metric'
        }
      });
      console.log(response.data);
      setWeatherData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setCity(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeatherData();

    // Play audio when the Get button is clicked
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error('Error playing audio:', error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const getWeatherIconUrl = (main) => {
    switch (main) {
      case "Clouds":
        return "/thunder.png";
      case "Rain":
        return "/rain_with_cloud.png";
      case "Mist":
        return "/Tornado.png";
      case "Haze":
        return "/sun.png";
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <header>
        <h5 className='h5'>Weather Wise | Storm & Shine</h5>
      </header>
      <div className='container'>
        {weatherData ? (
          <>
            <h1 className="container_date">{formetedDate}</h1>
            <div className='weather_data'>
              <h2 className='container_city'>{weatherData.name}</h2>

              {/* Check if weatherData.weather is available */}
              {weatherData.weather && weatherData.weather[0] && (
                <img className='container_img' src={getWeatherIconUrl(weatherData.weather[0].main)} alt="" width="180px" />
              )}

              <h2 className='container_degree'>{weatherData.main ? Math.round(weatherData.main.temp) + '°C' : 'N/A'}</h2>
              <h2 className='container_per'>{weatherData.weather ? weatherData.weather[0].main : 'N/A'}</h2>
              <h6 className='h6_1'>Humidity : {weatherData.main ? weatherData.main.humidity + ' %rh' : 'N/A'}</h6>
              <h6 className='h6_2'>Sea Level : {weatherData.main ? weatherData.main.sea_level + ' MAMSL' : 'N/A'}</h6>
              <h6 className='h6_5'>Max Temp. : {weatherData.main ? weatherData.main.temp_max + '°C ' : 'N/A'}</h6>
              <h6 className='h6_4'>Min Temp. : {weatherData.main ? weatherData.main.temp_min + '°C ' : 'N/A'}</h6>

              <form className='form' onSubmit={handleSubmit}>
                <input type="text" className='input' placeholder='Enter city name' onChange={handleInputChange} />
                <button className='btn_get' type='submit'>Get</button>
              </form>
            </div>
          </>
        ) : (
          <p>Loading...</p> // Optional: Display loading text if weatherData is not yet available
        )}
      </div>
      <div className='div_h6_3'>
        <h6 className='h6_3' style={{ color: "white", opacity: "1", marginLeft: "10px", fontSize:"19px" }}>
          Embrace the weather, whatever it may be; it's the world's way of keeping things interesting.
        </h6>
      </div>
      {/* <button className='btn_audio' onClick={handleSubmit}>
        {isPlaying ? '||' : '▶'}
      </button> */}
    </div>
  );
}

export default App;



// import React, { useEffect, useState, useRef } from 'react';
// import './App.css';

// function App() {
//   const [city, setCity] = useState("Mumbai");
//   const [weatherData, setWeatherData] = useState(null);
//   const audioRef = useRef(new Audio('/bgmusic.wav')); // Use ref for audio element
//   const [isPlaying, setIsPlaying] = useState(false);

//   const currentDate = new Date();
//   const months = ["January", "February", "March", "April", "May", "June", "July",
//     "August", "September", "October", "November", "December"];

//   const month = months[currentDate.getMonth()];
//   const day = currentDate.getDate();
//   const year = currentDate.getFullYear();
//   const formetedDate = `${month} ${day}, ${year}`;

//   const API_KEY = "e286c57f657428ce9214d740682e6741";

//   const fetchWeatherData = async () => {
//     try {
//       const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
//       const data = await response.json();
//       console.log(data);
//       setWeatherData(data);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   useEffect(() => {
//     fetchWeatherData();
//   }, [city]);

//   const handleInputChange = (event) => {
//     console.log(event.target.value);
//     setCity(event.target.value);
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     fetchWeatherData();

//     // Play audio when the Get button is clicked
//     if (audioRef.current) {
//       if (isPlaying) {
//         audioRef.current.pause();
//       } else {
//         audioRef.current.play().catch(error => {
//           console.error('Error playing audio:', error);
//         });
//       }
//       setIsPlaying(!isPlaying);
//     }
//   }

//   const getWeatherIconUrl = (main) => {
//     switch (main) {
//       case "Clouds":
//         return "/thunder.png";
//       case "Rain":
//         return "/rain_with_cloud.png";
//       case "Mist":
//         return "/Tornado.png";
//       case "Haze":
//         return "/sun.png";
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="App">
//       <header>
//         <h5 className='h5'>WeatherWise | Storm & Shine</h5>
//       </header>
//       <div className='container'>
//         {weatherData ? (
//           <>
//             <h1 className="container_date">{formetedDate}</h1>
//             <div className='weather_data'>
//               <h2 className='container_city'>{weatherData.name}</h2>

//               {/* Check if weatherData.weather is available */}
//               {weatherData.weather && weatherData.weather[0] && (
//                 <img className='container_img' src={getWeatherIconUrl(weatherData.weather[0].main)} alt="" width="180px" />
//               )}

//               <h2 className='container_degree'>{weatherData.main ? Math.round(weatherData.main.temp) + '°C' : 'N/A'}</h2>
//               <h2 className='container_per'>{weatherData.weather ? weatherData.weather[0].main : 'N/A'}</h2>
//               <h6 className='h6_1'>Humidity : {weatherData.main ? weatherData.main.humidity + ' %rh' : 'N/A'}</h6>
//               <h6 className='h6_2'>Sea Level : {weatherData.main ? weatherData.main.sea_level + ' MAMSL' : 'N/A'}</h6>

//               <form className='form' onSubmit={handleSubmit}>
//                 <input type="text" className='input' placeholder='Enter city name' onChange={handleInputChange} />
//                 <button className='btn_get' type='submit'>Get</button>
//               </form>
//             </div>
//           </>
//         ) : (
//           <p>Loading...</p> // Optional: Display loading text if weatherData is not yet available
//         )}
//       </div>
//       <div className='div_h6_3'>
//         <h6 className='h6_3' style={{ color: "white", opacity: "1", marginLeft: "10px", fontFamily: "cursive" }}>
//           Embrace the weather, whatever it may be; it's the world's way of keeping things interesting.
//         </h6>
//       </div>
//       {/* <button className='btn_audio' onClick={handleSubmit}>
//         {isPlaying ? '||' : '▶'}
//       </button> */}
//     </div>
//   );
// }

// export default App;





