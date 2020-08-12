import React, { useEffect, useRef, useState} from 'react'
import Box from "@material-ui/core/Box";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import instance from "./axios";
import moment from 'moment'

// const data = [
//     {
//         name: 'Page A', uv: 1, pv: 2400,
//     },
//     {
//         name: 'Page B', uv: 3000, pv: 1398,
//     },
//     {
//         name: 'Page C', uv: 2000, pv: 9800,
//     },
//     {
//         name: 'Page D', uv: 2780, pv: 3908,
//     },
//     {
//         name: 'Page E', uv: 1890, pv: 4800,
//     },
//     {
//         name: 'Page F', uv: 2390, pv: 3800,
//     },
//     {
//         name: 'Page G', uv: 3490, pv: 4300,
//     },
// ];

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
                width={(pageRef.current && pageRef.current.offsetWidth) || '500'}
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
