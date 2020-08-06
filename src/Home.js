import React from 'react'
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

export default function Home(){
    return(
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
            <Link to={'/meal-entry'}>
                <Button variant="contained" color="primary">Enter Meal</Button>
            </Link>
            <Link to={'/meal-history'}>
                <Button variant="contained" color="primary">View Meal History</Button>
            </Link>
        </Box>
    )
}
