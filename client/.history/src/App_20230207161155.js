import { Route, Switch } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Profile from "./components/Profile/Profile";
import SignupDetails from "./components/SingupDetails/SignupDetails";
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "./contexts/AuthContext";
import EditProduct from "./components/editProduct/EditProduct";
import { Provider } from "react-redux";
import store from "./redux/store";
import Search from "./components/Search/Search";
import SellProduct from "./components/SellProduct/SellProduct";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Provider store={store}>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <PrivateRoute exact path="/" component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/product" component={EditProduct} />
            <Route path="/cart" component={Cart} />
            <Route path="/profile" component={Profile} />
            <Route path="/signup-details" component={SignupDetails} />
            <Route path="/sell" component={SellProduct} />
            <Route path="/shop" component={Shop} />
          </Switch>
        </Provider>
      </AuthProvider>
    </div>
  );
}

export default App;
