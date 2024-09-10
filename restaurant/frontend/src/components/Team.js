// import React from 'react'
// import data from "../restApi.json";
// const Team = () => {
//   return (<>
//     <section className='team' id='team'>
//         <div className="container">
//             <div className="heading_section">
//                 <h1>OUR TEAM</h1>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum doloribus eveniet impedit accusantium animi aut veniam obcaecati ipsa excepturi quidem.</p>
//             </div>
//             <div className="team_container">
//                 {
//                     data[0].team.map(element=>{
//                         return(
//                             <div className='card' key={element.id}>
//                                 <img src={element.image} alt={element.name} />
//                                 <h3>{element.name}</h3>
//                                 <p>{element.designation}</p>
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </div>
//     </section>
//   </>
//   )
// }

// export default Team;




// import React from 'react';
// import data from '../restApi.json'; // Use test JSON file

// const Team = () => {
//   // Access the team data from the test data structure
//   const teamData = data && data.team;
//   console.log(data.team); // Log testData to verify its structure

//   // Check if teamData is available and is an array
//   if (!teamData || !Array.isArray(teamData) || teamData.length === 0) {
//     return (
//       <section className='team' id='team'>
//         <div className="container">
//           <div className="heading_section">
//             <h1>OUR TEAM</h1>
//             <p>No team data available.</p>
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className='team' id='team'>
//       <div className="container">
//         <div className="heading_section">
//           <h1 className='heading'>OUR TEAM</h1>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum doloribus eveniet impedit accusantium animi aut veniam obcaecati ipsa excepturi quidem.</p>
//         </div>
//         <div className="team_container">
//           {
//             teamData.map((element) => (
//               <div className='card' key={element.id}>
//                 <img src={element.image} alt={element.name} />
//                 <h3>{element.name}</h3>
//                 <p>{element.designation}</p>
//               </div>
//             ))
//           }
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Team;



import React from 'react';

// Define static team data
const teamData = [
  {
    "id": 1,
    "image": "./team_member_1.png",
    "name": "JOHNATHAN TYLER",
    "designation": "Founder & Head Chef"
  },
  {
    "id": 2,
    "image": "./team_member_2.png",
    "name": "WADE WARREN",
    "designation": "Sous Chef"
  },
  {
    "id": 3,
    "image": "./team_member_3.png",
    "name": "JHON DOE",
    "designation": "Fast Food Chef"
  },
  {
    "id": 4,
    "image": "./team_member_4.png",
    "name": "ALEX COAL",
    "designation": "Senior Chef"
  }
];

const Team = () => {
  // No need to access data from an external source; use the static teamData array
  console.log('Static team data:', teamData);

  // Check if teamData is available and is an array
  if (!teamData || !Array.isArray(teamData) || teamData.length === 0) {
    return (
      <section className='team' id='team'>
        <div className="container">
          <div className="heading_section">
            <h1>OUR TEAM</h1>
            <p>No team data available.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className='team' id='team'>
      <div className="container">
        <div className="heading_section">
          <h1 className='heading'>OUR TEAM</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum doloribus eveniet impedit accusantium animi aut veniam obcaecati ipsa excepturi quidem.</p>
        </div>
        <div className="team_container">
          {
            teamData.map(element => (
              <div className='card' key={element.id}>
                <img src={element.image} alt={element.name} />
                <h3>{element.name}</h3>
                <p>{element.designation}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
}

export default Team;

