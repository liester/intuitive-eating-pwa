import React, {useEffect} from 'react'

export default function LogOut({setUser}){
    useEffect(()=>{
        localStorage.setItem('user', null)
        setUser(null)
        window.location = '/'
    })
    return(
        <div>Logging Out</div>
    )
}
