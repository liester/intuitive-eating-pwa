import React from 'react'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import axios from './axios'

export default function MealEntry() {
    const handleInputChange = e => {
        const {name, value} = e.target
        setValues({...values, [name]: value})
    }
    const [error, setError] = React.useState()
    const initialFormState = {"mood": "", "hungerRatingBefore": "", "whatDidYouEat": "", "whatDidYouDrink": "", "satietyRatingAfter": "", "thinking": "", "feeling": "", "digestion": ""}
    const [values, setValues] = React.useState(initialFormState);
    return (
        <Box display={'flex'} flexDirection={'column'}>
            <TextField label={"Hunger rating before eating? (1-10)"} name={`hungerRatingBefore`} value={values["hungerRatingBefore"]} fullWidth type="number"
                onChange={handleInputChange}/>
            <TextField label={"What did you eat?"} name={`whatDidYouEat`} value={values["whatDidYouEat"]} fullWidth multiline onChange={handleInputChange}/>
            <TextField label={"What did you drink?"} name={`whatDidYouDrink`} value={values["whatDidYouDrink"]} fullWidth multiline onChange={handleInputChange}/>
            <TextField label={"Satiety rating after? (1-10)"} name={`satietyRatingAfter`} value={values["satietyRatingAfter"]} fullWidth type="number" onChange={handleInputChange}/>
            <TextField label={"Current thoughts?"} name={`thinking`} value={values["thinking"]} fullWidth multiline onChange={handleInputChange}/>
            <TextField label={"How are you feeling?"} name={`feeling`} value={values["feeling"]} fullWidth multiline onChange={handleInputChange}/>
            <TextField label={"What is your digestion like?"} name={`digestion`} value={values["digestion"]} fullWidth multiline onChange={handleInputChange}/>
            <TextField label={"How would you rate your mood? (1-10)"} name={`mood`} value={values["mood"]} fullWidth multiline type="number" onChange={handleInputChange}/>
            <Button
                disabled={Object.keys(values).length === 0}
                title="Save Meal"
                variant="contained" color="primary"
                onClick={() => {
                    console.log(JSON.stringify({...values, time: new Date().toISOString()}))
                    axios.post('/meals', {...values, time: new Date().toISOString()})
                        .then(() => setValues(initialFormState))
                        .catch(e => setError(e))
                }}
            >Save</Button>
            {error && <div style={{color: 'red'}}>{JSON.stringify(error.message)}</div>}
        </Box>
    )
}
