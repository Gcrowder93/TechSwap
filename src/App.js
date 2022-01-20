import './App.css';
import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { logout, getUser, getUserById } from './services/users';
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
import ProtectedRoute, { ProtectedAuthRoute } from './utils/ProtectedRoute';
import EditProduct from './views/Product/EditProduct';
import EditUserView from './views/User/EditUserView';
import UserView from './views/User/UserView';
import { getProductUserId } from './services/products';
import { useEffect } from 'react';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());
  const [currentProduct, setCurrentProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState();

  useEffect(() => {
    const productId = async () => {
      const userIdResp = await getUserById(currentUser.user.id);
      // console.log('look here', userId);
      setUserId(userIdResp);
      const resp = await getProductUserId(userIdResp.id);
      setCurrentProduct(resp);
      setLoading(false);
      // console.log(resp);
    };
    productId();
  }, []);

  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
    setCurrentProduct(null);
  };

  if (loading) return <div>loading</div>;

  return (
    <div className="App">
      <div className="background">
        <button onClick={logoutUser}>Log Out</button>
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

            {/* GABE LOOK HERE */}
            {/* <ProtectedAuthRoute
              exact
              path="/edit/:id"
              currentUser={currentUser}
              currentProduct={currentProduct}
              userId={userId}
            >
              <EditProduct user={currentUser} product={currentProduct} />
            </ProtectedAuthRoute> */}

            {/* View Profile/ Edit own Profile */}
            <ProtectedRoute exact path="/profile/:id/edit" currentuser={currentUser}>
              <EditUserView user={currentUser} />
            </ProtectedRoute>

            {/* Profile */}
            <Route exact path="/profile/:id">
              <UserView path="/profile/:id" currentUser={currentUser} />
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
