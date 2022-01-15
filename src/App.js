import './App.css';
import react from 'react';
import { BrowserRouter } from 'react-router-dom';
import AuthForm from './components/Auth/AuthForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthForm />
      </BrowserRouter>
    </div>
  );
}

export default App;
