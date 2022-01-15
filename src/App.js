import './App.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AuthForm from './components/Auth/AuthForm';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthForm />
        <Route exact path="/about-us">
          <AboutUs />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
