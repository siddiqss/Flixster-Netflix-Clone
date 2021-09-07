import Home from "./Pages/Home/Home";
import "./app.scss";
import Watch from "./Pages/Watch/Watch";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import {AuthContext} from "./authContext/AuthContext";

const App = () => {
  const {user} = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route path='/register'>
          {!user ? <Register /> : <Redirect to='/' />}
        </Route>
        <Route path='/login'>{!user ? <Login /> : <Redirect to='/' />}</Route>
        <Route exact path='/'>
          {user ? <Home /> : <Redirect to='register' />}
        </Route>
        {user && (
          <>
            <Route path='/movies'>
              <Home type='movie' />
            </Route>
            <Route path='/series'>
              <Home type='series' />
            </Route>
            <Route path='/watch'>
              <Watch />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
};

export default App;
