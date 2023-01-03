import { Route, Switch } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Profile from "./components/Profile/Profile";
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "./contexts/AuthContext";
import EditProduct from "./components/editProduct/EditProduct";
import { Provider } from "react-redux";
import store from "./store";
import Search from "./components/Search/Search";
import SignupDetails from "./components/SignupDetails/SignupDetails";

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
            <Route path="/signup/details" component={SignupDetails} />
          </Switch>
        </Provider>
      </AuthProvider>
    </div>
  );
}

export default App;
