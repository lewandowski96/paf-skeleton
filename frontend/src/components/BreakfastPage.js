import React, { useState } from 'react';
import eggImage from '../assets/egg.jpeg';
import oatMealImage from '../assets/Strawberry Banana Oatmeal.jpeg';
import StartRating from './StartRating';
import RecipeForm from './RecipeForm';




const breakfastCard = [
  {
    title: 'Egg and Cheese Sandwich',
    icon: <img src={eggImage} alt="breakfast" className="card--cover--2" />,
    rating:<StartRating/>
  },
  {
    title: 'Strawberry Banana Oatmeal',
    icon: <img src={oatMealImage} alt="breakfast" className="card--cover--2" />,
    rating:<StartRating/>
  },
];

const BreakfastPage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <div className='background-container--2'>
        <div className='card--container--2'>
          {breakfastCard.map((item, index) => (
            <div className="card--2" key={index}>
              <div className="card--cover--2">{item.icon}</div>
              <div className="rating">{item.rating}</div>
              <div className="card--title--2"><h3>{item.title && (<button className="card--title--2" onClick={togglePopup}>{item.title}</button>)}</h3>
              </div>
            </div>
          ))}
        </div>
          {showPopup && (
            <div className="popup">
              <div className="popup-inner">
                <h1>{breakfastCard[1].title}</h1>
                <RecipeForm/>
                <br></br>
                <button onClick={togglePopup}>close</button>
              </div>
            </div>
          )}
      </div>
    </div>
    
  )
}

export default BreakfastPage;
