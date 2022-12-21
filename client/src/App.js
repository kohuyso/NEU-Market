import { Route, Switch } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Product from "./components/Product/Product";
import Profile from "./components/Profile/Profile";
import PrivateRoute from "./PrivateRoute";
import { Provider } from "react-redux";
import store from "./store";
import ShopP from "./components/Shop/ShopP";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/product" component={Product} />
          <Route path="/cart" component={Cart} />
          <Route path="/profile" component={Profile} />
          <Route path="/shop" component={ShopP} />
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
