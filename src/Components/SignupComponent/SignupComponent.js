import React, { Component } from 'react'

export class SignupComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        firstName : "",
        lastName : "",
        email : "",
        password : "",
      }
    }

    firstNameHandler = (event) =>{
        this.setState({
            firstName : event.target.value
        })
    }

    lastNameHandler = (event) =>{
        this.setState({
            lastName : event.target.value
        })
    }

    emailHandler = (event) =>{
        this.setState({
            email : event.target.value
        })
    }

    passwordHandler = (event) =>{
        this.setState({
            password : event.target.value
        })
    }

    formSubmitHandler = (event) =>{
        event.preventDefault()
        console.log(
            this.state.firstName,
            this.state.lastName,
            this.state.email,
            this.state.password
        )

    }

  render() {
    const {firstName, lastName, email, password} = this.state
    return (
      <form onSubmit={this.formSubmitHandler} >
        <h1>Sign UP</h1>

        <div className='mb-3'>
            <label>First Name</label>
            <input 
                type='text'
                className='form-control'
                placeholder='Enter your first name'
                value={firstName}
                onChange={this.firstNameHandler}
                required
            />
        </div>

        <div className='mb-3'>
            <label>Last Name</label>
            <input
                type='text'
                className='form-control'
                placeholder='Enter your last name'
                value={lastName}
                onChange={this.lastNameHandler}
                required
            />
        </div>

        <div className='mb-3'>
            <label>Email</label>
            <input
                type='email'
                className='form-control'
                placeholder='Enter your email address'
                value={email}
                onChange={this.emailHandler}
                required
            />
        </div>

        <div className='mb-3'>
            <label>Password</label>
            <input
                type='password'
                className='form-control'
                placeholder='Enter your password'
                value={password}
                onChange={this.passwordHandler}
                required
            />
        </div>

        <div className='d-grid'>
            <button type='submit' className='btn btn-primary' >Submit</button>
        </div>

        <p className='forgot-password text-right'>
            Already registered, <a href='/login'>Sign in here?</a>
        </p>

      </form>
    )
  }
}

export default SignupComponent