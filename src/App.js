import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { logout, getUser } from './services/users';
import Auth from './views/Auth/Auth';
import ProductsCard from './components/Products/ProductsCard';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());

  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {currentUser && (
              <>
                <ProductsCard />
                <button onClick={logoutUser}>Log Out</button>
              </>
            )}
            {!currentUser && <Auth setCurrentUser={setCurrentUser} />}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
