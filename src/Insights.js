import React, { useEffect, useRef, useState} from 'react'
import Box from "@material-ui/core/Box";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import instance from "./axios";
import moment from 'moment'

export default function Insights(){
    const [meals, setMeals] = useState([]);
    const [data, setData] = useState([]);
    useEffect(() => {
        instance.get('/meals')
            .then(({data}) => {
                setMeals(data);
            })
            .catch(error => {
                console.log('Error:', error);
            });
    }, [])

    useEffect(()=>{
        const graphData = meals.map(meal => {
            return {
                name: moment(meal.time).format('MM/DD h:mm'),
                "Hunger Rating Before": meal.hungerRatingBefore,
                "Mood": meal.mood
            }
        })
        setData(graphData)
    }, [meals])
    const pageRef = useRef()
    return(
        <Box ref={pageRef} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
            <LineChart
                width={(pageRef.current && pageRef.current.offsetWidth)}
                height={300}
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Hunger Rating Before" stroke="#8884d8" strokeWidth="5" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Mood" stroke="#82ca9d" strokeWidth="5"/>
            </LineChart>
        </Box>
    )
}
