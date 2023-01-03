import { Route, Switch } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Profile from "./components/Profile/Profile";
import PrivateRoute from "./PrivateRoute";
<<<<<<< HEAD
import EditProduct from "./components/editProduct/EditProduct";
import Search from "./components/Search/Search";
=======
>>>>>>> 317d9699bd0d4531c3ad3f3cdf1eb916343257a1

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/product" component={EditProduct} />
          <Route path="/cart" component={Cart} />
          <Route path="/profile" component={Profile} />
          <Route path="/shop" component={ShopP} />
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
