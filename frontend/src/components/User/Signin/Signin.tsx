import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { User } from "../User";
import  * as userService from '../UserService'
import { useHistory } from 'react-router-dom'

const Login = () => {

    const history = useHistory()

    const initialState = {
    name: "",
    email: "",
    password: "",
    confirm_password: ""
  }  

  const [signin, setSignin] = useState<User>(initialState);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSignin({...signin, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await userService.signIn(signin);
    
    toast.success(`Hello ${signin.name}`)
    history.push('/')
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-4 mx-auto">
          <div className="card">
            <div className="card-header">
              <h1>Account Login</h1>
            </div>
            <img
              src="/logo.png"
              className="rounded-circle mx-auto d-block m-4 w-50"
              alt="Logo"
            />
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    autoFocus
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group d-grid gap-2 col-6 mx-auto mt-3">
                  <button className="btn btn-primary" type="submit">
                    Sign in
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

export default Login;
