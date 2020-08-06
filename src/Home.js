import React from 'react'
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

export default function Home(){
    return(
        <Box display={'flex'}>
            <Button primary title={`Enter Meal`}>Enter Meal</Button>
        </Box>
    )
}
