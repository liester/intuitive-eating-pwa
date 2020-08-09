import React, {useEffect, useState} from 'react'
import instance from './axios';

export default function MealHistory({user}){
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        instance.get('/meals?userId=36')
            .then((response) => {
                setMeals(response);
            })
            .catch(error => {
                console.log('Error:', error);
            });
    }, [])

    return(
        <React.Fragment>
            <div>Lies</div>
            <div>{JSON.stringify(meals)}</div>
        </React.Fragment>
    )
}
