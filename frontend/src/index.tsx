import React from 'react';
import ReactDOM from 'react-dom';

import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import PublicationList from './components/Publications/PublicationList';
import PublicationForm from './components/Publications/PublicationForm';
import Navbar from './components/Navbar/Navbar';

import 'react-toastify/dist/ReactToastify.css';
import 'bootswatch/dist/cosmo/bootstrap.min.css'
import './index.css';
import MainPage from './components/MainPage';
import Github from './components/Github/Github';
import Footer from './components/Footer/Footer';
import Signin from './components/User/Signin/Signin';
import Signup from './components/User/Signup/Signup';
import Counter from './components/Counter';
import Login from './components/Login';
import Usuarios from './components/Usuarios/Usuarios';
import Formularios from './components/Formularios';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <div className="container p-4">
        <Switch>
          <Route exact path="/" component={MainPage}></Route>
          <Route exact path="/publications" component={PublicationList}></Route>
          <Route path="/new-publication" component={PublicationForm}></Route>
          <Route path="/update/:id" component={PublicationForm}></Route>
          <Route path="/github" component={Github}></Route>
          <Route path="/users/signin" component={Signin}></Route>
          <Route path="/users/signup" component={Signup}></Route>
          <Route path="/counter" component={Counter}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/usuarios" component={Usuarios}></Route>
          <Route path="/formularios" component={Formularios}></Route>
        </Switch>
        <ToastContainer />
      </div>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
