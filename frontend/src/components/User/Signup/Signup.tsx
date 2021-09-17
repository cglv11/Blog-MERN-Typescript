import React, { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { User } from "../User";
import  * as userService from '../UserService'
import { useHistory } from 'react-router-dom'

const Signup = () => {

  const history = useHistory()

  const initialState = {
    name: "",
    email: "",
    password: "",
    confirm_password: ""
  }

  const [signup, setSignup] = useState<User>(initialState)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSignup({...signup, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if((signup.name).length <= 0){
      toast.error('Please insert your name', { autoClose: 8000} )
    }
    if((signup.email).length <= 0){
      toast.error('Please insert your email', { autoClose: 8000} )
    }
    if((signup.password) !== (signup.confirm_password))
    {
      toast.error('Password do not match', { autoClose: 8000} )
    }
    if((signup.password).length < 4)
    {
      toast.error('Password must be at least 4 characters', { autoClose: 8000} )
    }
    await userService.signUp(signup);
    toast.success(`Welcome ${signup.name}`)
    history.push('/')
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-4 mx-auto">
          <div className="card">
            <div className="card-header"><h1>Account register</h1></div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Name"
                    onChange={handleInputChange}
                    // value={signup.name}
                  />
                </div>

                <div className="form-group mt-3">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    // value={signup.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group mt-3">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="Password"
                    // value={signup.password}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group mt-3">
                  <input
                    type="password"
                    className="form-control"
                    name="confirm_password"
                    placeholder="Confirm password"
                    // value={signup.confirm_password}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group mt-3">
                  <button type="submit" className="btn btn-secondary btn-block btn-lg">
                    SignUp
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
