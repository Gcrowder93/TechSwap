import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { logout, getUser } from './services/users';
import Auth from './views/Auth/Auth';
import ProductsCard from './components/Products/ProductsCard';
import ProductPage from './views/Product/ProductPage';

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
          <Route
            exact
            path="/ProductPage"
            render={(routeProps) => <ProductPage {...routeProps} user={currentUser} />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
