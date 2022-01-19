import './App.css';
import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { logout, getUser } from './services/users';
import Auth from './views/Auth/Auth';
import ProductsCard from './components/Products/ProductsCard';
import ProductPage from './views/Product/ProductPage';
import ProductDetails from './views/Product/ProductDetails';
import AddProduct from './views/Product/AddProduct';
// import EditProduct from './views/Product/EditProduct';
// import EditUser from './views/User/EditUser';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './views/Footer/Footer';
import Categories from './views/Product/Categories';
import Header from './views/Header/Header';
import ProtectedRoute from './utils/ProtectedRoute';
import EditProduct from './views/Product/EditProduct';
import EditUserView from './views/User/EditUserView';
import UserView from './views/User/UserView';

// import Autocomplete from './AutoComplete';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());

  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
  };

  return (
    <div className="App">
      <div className="background">
        <button onClick={logoutUser}>Log Out</button>
        <br></br>
        {/* <br></br>
        <br></br>
        <section>
          <div className="searchbarsearch">
            <Autocomplete Products={ProductsCard} />
          </div>
        </section> */}
        <BrowserRouter>
          {/* HOME page */}
          <Switch>
            <Route
              exact
              path="/"
              render={(routeProps) => <ProductPage {...routeProps} user={currentUser} />}
            ></Route>
            {/* SIGN IN/SIGN UP */}
            <Route exact path="/sign-in">
              {currentUser && (
                <>
                  <Redirect to="/" />
                </>
              )}
              {!currentUser && <Auth setCurrentUser={setCurrentUser} />}
            </Route>
            {/* View Product */}
            <Route exact path="/products/:id">
              <ProductDetails user={currentUser} />
            </Route>
            {/* Add Page */}
            <ProtectedRoute exact path="/add" currentUser={currentUser}>
              <AddProduct user={currentUser} />
            </ProtectedRoute>

            {/* Edit Product */}
            <ProtectedRoute exact path="/edit/:id" currentUser={currentUser}>
              <EditProduct user={currentUser} />
            </ProtectedRoute>

            {/* View Profile/ Edit own Profile */}
            <ProtectedRoute exact path="/profile/:id/edit" currentuser={currentUser}>
              <EditUserView user={currentUser} />
            </ProtectedRoute>
            <Route exact path="/profile/:id">
              <UserView currentUser={currentUser} />
            </Route>
            {/* About Us */}
            <Route exact path="/aboutus">
              <AboutUs />
            </Route>
            {/* Need to create Categories views */}
            <Route exact path="/categories">
              <Categories />
            </Route>
          </Switch>
        </BrowserRouter>
        <Header />
        {/* <EditUser /> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
