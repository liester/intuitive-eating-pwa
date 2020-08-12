import React from 'react'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Icon from '@material-ui/core/Icon';

import axios from './axios'

export default function MealEntry() {

    const handleInputChange = (name) => ({target}) => {
        const value = target.value
        if(value ===""){
            setValues({...values, [name]: target.value})
        }
        if(target.type === "number"){
            if(Number(target.value) > Number(target.max) || Number(target.value) < Number(target.min)){
                return;
            }
        }
        setValues({...values, [name]: target.value})
    }
    const [error, setError] = React.useState()
    const initialFormState = {"mood": "", "hungerRatingBefore": "", "whatDidYouEat": "", "whatDidYouDrink": "", "satietyRatingAfter": "", "thinking": "", "feeling": "", "digestion": ""}
    const [values, setValues] = React.useState(initialFormState);
    return (
        <Box display={'flex'} flexDirection={'column'}>
            <TextField label={"Hunger rating before eating? (1-10)"} name={`hungerRatingBefore`} inputProps={{ min: 1, max: 10}} value={values["hungerRatingBefore"]} fullWidth type="number"
                onChange={handleInputChange("hungerRatingBefore")}/>
            <TextField label={"What did you eat?"} name={`whatDidYouEat`} value={values["whatDidYouEat"]} fullWidth multiline onChange={handleInputChange("whatDidYouEat")}/>
            <TextField label={"What did you drink?"} name={`whatDidYouDrink`} value={values["whatDidYouDrink"]} fullWidth multiline onChange={handleInputChange("whatDidYouDrink")}/>
            <TextField label={"Satiety rating after? (1-10)"} name={`satietyRatingAfter`} inputProps={{ min: 1, max: 10}} value={values["satietyRatingAfter"]} fullWidth type="number" onChange={handleInputChange("satietyRatingAfter")}/>
            <TextField label={"Current thoughts?"} name={`thinking`} value={values["thinking"]} fullWidth multiline onChange={handleInputChange("thinking")}/>
            <TextField label={"How are you feeling?"} name={`feeling`} value={values["feeling"]} fullWidth multiline onChange={handleInputChange("feeling")}/>
            <TextField label={"What is your digestion like?"} name={`digestion`} value={values["digestion"]} fullWidth multiline onChange={handleInputChange("digestion")}/>
            <TextField label={"How would you rate your mood? (1-10)"} name={`mood`} inputProps={{ min: 1, max: 10}} value={values["mood"]} fullWidth multiline type="number" onChange={handleInputChange("mood")}/>
            <Button
                disabled={Object.keys(values).length === 0}
                title="Save Meal"
                variant="contained" color="primary"
                onClick={() => {
                    // console.log(JSON.stringify({...values, time: new Date().toISOString()}))
                    axios.post('/meals', {...values, time: new Date().toISOString()})
                        .then(() => setValues(initialFormState))
                        .catch(e => {
                            try{
                                e.response.data.message && setError(e.response.data.message)
                            }catch{
                                setError(e)
                            }
                        })
                }}
            >Save</Button>
            {error && <div style={{color: 'red'}}>{JSON.stringify(error)}</div>}
        </Box>
    )
}
