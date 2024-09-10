import React from 'react';
import data from '../restApi.json'; // Adjust the path as needed

const Menu = () => {
  // Access the dishes array from the data object
  const dishes = data?.data[0]?.dishes || [];
  console.log('Dishes:', dishes); // Debugging output
  console.log("Full Data" , data)

  return (
    <>
      <section className='menu' id='menu'>
        <div className="container">
          <div className="heading_section">
            <h1 className='heading'>POPULAR DISHES</h1>
            <p>Whether you're in the mood for a hearty dinner or a light breakfast, our diverse menu promises to tantalize your taste buds and elevate your dining journey. Explore our popular dishes today and experience the art of fine dining redefined."</p>
          </div>
          <div className="dishes_container">
            {
              dishes.length > 0 ? (
                dishes.map(element => (
                  <div className='card' key={element.id}>
                    <img src={element.image} alt={element.title} />
                    <h3>{element.title}</h3>
                    <button>{element.category}</button>
                  </div>
                ))
              ) : (
                <p>No dishes available! Please wait</p>
              )
            }
          </div>
        </div>
      </section>
    </>
  );
}

export default Menu;
