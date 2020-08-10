import React from 'react'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import axios from './axios'

export default function MealEntry(){
    const handleInputChange = e => {
        const {name, value} = e.target
        setValues({...values, [name]: value})
    }
    const [values, setValues] = React.useState({
        "time": "1:00pm",
        "hungerRatingBefore": "110",
        "whatDidYouEat": "Pizza",
        "whatDidYouDrink": "Water",
        "satietyRatingAfter": "9",
        "thinking": "I love pizza.",
        "feeling": "I ate just the right amount.",
        "digestion": "Maybe too much hot sauce",
        "mood": "Great"
    });
    return(
        <Box display={'flex'} flexDirection={'column'}>
            <div>Hunger rating before eating?</div>
            <TextField name={`hungerRatingBefore`} onChange={handleInputChange}/>
            <div>What did you eat?</div>
            <TextField name={`whatDidYouEat`} onChange={handleInputChange}/>
            <div>What did you drink?</div>
            <TextField name={`whatDidYouDrink`}  onChange={handleInputChange}/>
            <div>Satiety rating after?</div>
            <TextField name={`satietyRatingAfter`} onChange={handleInputChange}/>
            <div>Current thoughts?</div>
            <TextField name={`thinking`} onChange={handleInputChange}/>
            <div>How are you feeling?</div>
            <TextField name={`feeling`} onChange={handleInputChange}/>
            <div>What is your digestion like?</div>
            <TextField name={`digestion`} onChange={handleInputChange}/>
            <div>How is your mood?</div>
            <TextField name={`mood`}  onChange={handleInputChange}/>
            <Button
                title="Save Meal"
                onClick={() => {
                    console.log(JSON.stringify({...values}))
                    axios.post('/meals', {...values, time: new Date().toISOString()})
                        .catch(e=> console.log(e))
                }}
            >Save</Button>
        </Box>
    )
}
