import { Route, Switch } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Product from "./components/Product/Product";
import Profile from "./components/Profile/Profile";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute exact path="/" component={Home} />
          <Route path="/product" component={Product} />
          <Route path="/cart" component={Cart} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </AuthProvider>
    </div>
  );
}

export default App;
