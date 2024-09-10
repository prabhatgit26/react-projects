// import React from 'react';
// import data from '../restApi.json'

// const Qualities = () => {
//   return (<>
//     <section className='qualities' id='qualities'>
//         <div className="container">
//             {
//                 data[0].ourQualities.map(element=>(
//                     <div className='card' key={element.id}>
//                         <img src={element.image} alt={element.title} />
//                         <p className='title'>{element.title}</p>
//                         <p className='description'>{element.description}</p>
//                     </div>
//                 ))
//             }
//         </div>
//     </section>
//   </>
//   );
// };

// export default Qualities;




import React from 'react';
import data from '../restApi.json'; // Ensure this path is correct

const Qualities = () => {
  // Safely access the `ourQualities` array
  const ourQualities = data.data && data.data[0] ? data.data[0].ourQualities : [];

  return (
    <section className='qualities' id='qualities'>
      <div className="container">
        {
          ourQualities.length > 0 ? (
            ourQualities.map(element => (
              <div className='card' key={element.id}>
                <img src={process.env.PUBLIC_URL + '/' + element.image} alt={element.title} />
                <p className='title'>{element.title}</p>
                <p className='description'>{element.description}</p>
              </div>
            ))
          ) : (
            <p>No qualities available</p>
          )
        }
      </div>
    </section>
  );
};

export default Qualities;
