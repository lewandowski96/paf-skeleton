import React from 'react'
import { Link } from 'react-router-dom';
import breakfastImage from '../assets/breakfast-modified.png';
import lunchImage from '../assets/lunch-modified.png';
import dinnerImage from '../assets/dinner-modified.png';
import healthyDrinksImage from '../assets/healthy-dinks-modified.png';
import freshFruitsImage from '../assets/fresh-fruits-modified.png';
import dietTipsImage from '../assets/diet-tips.jpeg'

const Card = [
{
    title:<button className='card--title-1'>Breakfast</button>,
    icon:<img src={breakfastImage} alt="breakfast" className="card--cover-1"/>,
    path:'/breakfast'
},
{
    title:<button className='card--title-1'>Lunch</button>,
    icon:<img src={lunchImage} alt="breakfast" className="card--cover-1"/>,
    path:'/lunch'
},
{
    title:<button className='card--title-1'>Dinner</button>,
    icon:<img src={dinnerImage} alt="breakfast" className="card--cover-1"/>,
    path:'/dinner'
},
{
    title:<button className='card--title-1'>Healthy Drinks</button>,
    icon:<img src={healthyDrinksImage} alt="breakfast" className="card--cover-1"/>,
    path:'/healthydirnks'
},
{
    title:<button className='card--title-1'>Fresh Fruits</button>,
    icon:<img src={freshFruitsImage} alt="breakfast" className="card--cover-1"/>,
    path: '/freshfruits'
},
{
    title:<button className='card--title-1'>Diet tips</button>,
    icon:<img src={dietTipsImage} alt="breakfast" className="card--cover-1"/>,
    path:'/diettips'
},
];

const Recipe = () => {
   return (
    <div className='background-container-1'>
        <div className='card--container-1'>
            {Card.map((item)=>(
            <div className="card-1">
                <div className="card--cover-1">{item.icon}</div>
                <div className="card--title-1">
                <Link to={item.path} className='card--button-1'>{item.title}</Link>
                </div>
            </div>
        ))}
        </div>
    </div>
    )
}

export default Recipe;





