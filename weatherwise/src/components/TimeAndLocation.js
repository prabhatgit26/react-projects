import React from 'react'

const TimeAndLocation = ({ weather }) => {
  // Provide default values if weather is null or properties are missing
  const formattedLocalTime = weather?.formattedLocalTime || 'Loading...';
  const name = weather?.name || 'Loading location...';
  const country = weather?.country || '';
  return (
    <div>
        <div className='flex items-center justify-center my-6'>
            <p className='text-xl font-extralight'>{formattedLocalTime}</p>
        </div>

        <div className='flex items-center justify-center my-3'>
            <p className='text-3xl font-medium'>{`${name}, ${country}`}</p>
        </div>
    </div>
  )
}

export default TimeAndLocation;
