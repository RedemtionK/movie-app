import React, { useEffect } from 'react'

const Dashboard = () => {
    useEffect(()=>{

        if(localStorage.getItem("email"))

        {

            localStorage.removeItem("email")

        }

    })
  return (
    <div>
      <h1>You have logged in</h1>
    </div>
  )
}

export default Dashboard
