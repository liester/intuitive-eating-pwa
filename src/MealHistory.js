import React, {useEffect, useState} from 'react'
import instance from './axios';
import TextField from "@material-ui/core/TextField";
import moment from 'moment'

export default function MealHistory({user}) {
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        instance.get('/meals')
            .then(({data}) => {
                setMeals(data);
            })
            .catch(error => {
                console.log('Error:', error);
            });
    }, [])

    return (
        <React.Fragment>
            {meals.length ? meals.map(meal => {
                return <MealEntryItem meal={meal} key={meal.id}/>
            }) : <div>No Meals Recorded</div>}
        </React.Fragment>
    )
}

const MealEntryItem = ({meal}) => {
    const {
        digestion,
        feeling,
        hungerRatingBefore,
        mood,
        satietyRatingAfter,
        thinking,
        time,
        whatDidYouDrink,
        whatDidYouEat
    } = meal
    return (<div className={"meal-item"}>
        <div className={'meal-time'}>{moment(time).format('MMM Do LTS')}</div>
        <div>Hunger rating before eating? (1-10)</div>
        <TextField value={hungerRatingBefore} fullWidth disabled name={`hungerRatingBefore`} type="number"/>
        <div>What did you eat?</div>
        <TextField value={whatDidYouEat} fullWidth multiline disabled name={`whatDidYouEat`}/>
        <div>What did you drink?</div>
        <TextField value={whatDidYouDrink} fullWidth multiline disabled name={`whatDidYouDrink`}/>
        <div>Satiety rating after? (1-10)</div>
        <TextField value={satietyRatingAfter} fullWidth disabled name={`satietyRatingAfter`} type="number"/>
        <div>Current thoughts?</div>
        <TextField value={thinking} fullWidth multiline disabled name={`thinking`}/>
        <div>How are you feeling?</div>
        <TextField value={feeling} fullWidth multiline disabled name={`feeling`}/>
        <div>What is your digestion like?</div>
        <TextField value={digestion} fullWidth multiline disabled name={`digestion`}/>
        <div>How would you rate your mood? (1-10)</div>
        <TextField value={mood} fullWidth multiline disabled name={`mood`} type="number"/>
    </div>)
}
