import './App.css';
import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { logout, getUser } from './services/users';
import Auth from './views/Auth/Auth';
import ProductsCard from './components/Products/ProductsCard';
import ProductPage from './views/Product/ProductPage';
import ProductDetails from './views/Product/ProductDetails';
// import AddProduct from './views/Product/AddProduct';
// import EditProduct from './views/Product/EditProduct';
// import EditUser from './views/User/EditUser';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './views/Footer/Footer';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());

  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
  };

  return (
    <div className="App">
      <div className="background">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={(routeProps) => <ProductPage {...routeProps} user={currentUser} />}
            ></Route>
            <Route exact path="/auth">
              {currentUser && (
                <>
                  <ProductsCard />
                  <button onClick={logoutUser}>Log Out</button>
                </>
              )}
              {!currentUser && <Auth setCurrentUser={setCurrentUser} />}
            </Route>
            <Route exact path="/product/:id">
              <ProductDetails user={currentUser} />
            </Route>

            {/* <ProtectedRoute exact path="/add" currentUser={currentUser}>
              <AddProduct user={currentUser} />
            </ProtectedRoute> */}

            {/* <ProtectedRoute exact path="/add/:id" currentUser={currentUser}>
            <EditProduct user={currentUser} />
          </ProtectedRoute> */}

            {/* Protected or not */}
            {/* <ProtectedRoute exact path="/profile/:id" currentuser={currentUser}>
            <EditUser user={currentUser} />
          </ProtectedRoute> */}

            <Route exact path="/aboutus">
              <AboutUs />
            </Route>

            {/* Need to create Categories views
          <Route exactpath="/categories">
            <Categories />
          </Route> */}
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    </div>
  );
}

export default App;
