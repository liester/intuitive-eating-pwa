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

    const [error, setError] = React.useState()
    const [values, setValues] = React.useState({});
    return(
        <Box display={'flex'} flexDirection={'column'}>
            <div>Hunger rating before eating? (1-10)</div>
            <TextField name={`hungerRatingBefore`} fullWidth type="number" onChange={handleInputChange}/>
            <div>What did you eat?</div>
            <TextField name={`whatDidYouEat`} fullWidth multiline  onChange={handleInputChange}/>
            <div>What did you drink?</div>
            <TextField name={`whatDidYouDrink`} fullWidth multiline   onChange={handleInputChange}/>
            <div>Satiety rating after? (1-10)</div>
            <TextField name={`satietyRatingAfter`} fullWidth type="number" onChange={handleInputChange}/>
            <div>Current thoughts?</div>
            <TextField name={`thinking`} fullWidth multiline  onChange={handleInputChange}/>
            <div>How are you feeling?</div>
            <TextField name={`feeling`} fullWidth multiline  onChange={handleInputChange}/>
            <div>What is your digestion like?</div>
            <TextField name={`digestion`} fullWidth multiline  onChange={handleInputChange}/>
            <div>How would you rate your mood? (1-10)</div>
            <TextField name={`mood`} fullWidth multiline  type="number" onChange={handleInputChange}/>
            <Button
                disabled={Object.keys(values).length === 0}
                title="Save Meal"
                variant="contained" color="primary"
                onClick={() => {
                    console.log(JSON.stringify({...values}))
                    axios.post('/meals', {...values, time: new Date().toISOString()})
                        .catch(e=> setError(e))
                }}
            >Save</Button>
            {error && <div style={{color: 'red'}}>{JSON.stringify(error)}</div>}
        </Box>
    )
}
