// import React from 'react'
// import data from "../restApi.json";

// const WhoAreWe = () => {
//   return (<>
//     <section className='who_are_we' id='who_are_we'>
//         <div className="container">
//             <div className="text_banner">
//                 {
//                     data[0].who_we_are.slice(0,2).map(element=>{
//                         return(
//                             <div className='card' key={element.id}>
//                                 <h1 style={{fontWeight:"300"}} className='heading'>{element.number}</h1>
//                                 <p>{element.title}</p>
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//             <div className="img_banner">
//                 <img src="/center.svg" alt="center" className="gradient_bg"/>
//                 <img src="/whoweare.png" alt="who" />
//             </div>
//         </div>
//     </section>
  
//   </>
//   )
// }

// export default WhoAreWe

const testData = {
    "data": [
      {
        "who_we_are": [
          { "id": 1, "number": "14", "title": "Restaurants" },
          { "id": 2, "number": "20", "title": "Chef In Kitchen" },
          {
            "id": 3,
            "number": "08",
            "title": "Years Of Experience"
        },
        {
            "id": 4,
            "number": "200",
            "title": "Food Dishes"
        }
        ]
      }
    ]
  };
  
  const WhoAreWe = () => {
    const whoAreWeData = testData.data[0]?.who_we_are || [];
    console.log("Test Data Who We Are:", whoAreWeData);
  
    return (<>
        <section className='who_are_we' id='who_are_we'>
            <div className="container">
                <div className="text_banner">
                    {
                        whoAreWeData.length > 0 ? (
                        whoAreWeData.slice(0, 2).map(element => (
                        <div className='card' key={element.id}>
                            <h1 style={{ fontWeight: "300" }} className='heading'>{element.number}</h1>
                            <p>{element.title}</p>
                        </div>
                        ))
                        ) : (
                        <p>No data available</p>
                        )
                    }
                </div>
                <div className="image_banner">
                    <img src="/center.svg" alt="center" className="gradient_bg"/>
                    <img src="/whoweare.png" alt="who" />
                </div>
                <div className="text_banner">
                    {
                        whoAreWeData.length > 0 ? (
                        whoAreWeData.slice(2).map(element => (
                        <div className='card' key={element.id}>
                            <h1 style={{ fontWeight: "300" }} className='heading'>{element.number}</h1>
                            <p>{element.title}</p>
                        </div>
                        ))
                        ) : (
                        <p>No data available</p>
                        ) 
                    }
                </div>
            </div>
      </section>
      </>
    );
  }
  
  export default WhoAreWe;
  