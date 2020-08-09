import React, {useEffect} from 'react'

export default function LogOut({setUser}){
    useEffect(()=>{
        localStorage.clear('user', null)
        setUser(null)
        window.location = '/'
    })
    return(
        <div>Logging Out</div>
    )
}
