import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Register = () => {

  const history = useNavigate();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",

  });
  function submitHandler(evt) {

    evt.preventDefault()
    console.log(JSON.stringify(user))
    fetch("https://backend-movie26.herokuapp.com/users", {

      method: "POST",

      headers: {

        "Content-Type": "application/json"

      },

      body: JSON.stringify(user)

    }

    )

      .then((response) => {

        console.log(response)

        if (response.status === 200) {

          alert("User have been succesfuly registered !")
          history("/dishboard")

        }

      }).catch((err) => {

        console.log(`Error:${err}`)

      })
  }

  const changeHandler = (event) => {

    const name = event.target.name;

    const value = event.target.value;

    setUser(user => ({ ...user, [name]: value }))

  }
  return (
    <div className='form'>
      <form onSubmit={submitHandler} noValidate autoComplete='off'>
        <h3>Register</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            value={user.firstName}
            name="firstName"
            onChange={changeHandler}
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" value={user.lastName} name="lastName" onChange={changeHandler} />
        </div>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={user.email}
            name="email"
            onChange={changeHandler}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={user.password}
            name="password"
            onChange={changeHandler}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <Link to="/log-in">sign in?</Link>
        </p>
      </form>
    </div>
  )
}

export default Register
