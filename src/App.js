import "./App.css";
import SignIn from "./pages/signIn/signIn";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Voting from "./pages/voting/voting";
import authentication from "./components/authentication";
import Result from "./pages/Results/Results";
import { useState } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
function App() {
  const [auth, setAuth] = useState(authentication());
  const logout = () => {
    localStorage.removeItem("loggedIn");
    setAuth(false);
  };
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            auth ? (
              <Navigate to="/user" />
            ) : (
              <ErrorBoundary>
                <SignIn />
              </ErrorBoundary>
            )
          }
        />
        <Route
          exact
          path="/user"
          element={
            !auth ? (
              <Navigate to="/" />
            ) : (
              <ErrorBoundary>
                <Voting logout={logout} />
              </ErrorBoundary>
            )
          }
        />
        <Route
          exact
          path="/result"
          element={
            !auth ? (
              <Navigate to="/" />
            ) : (
              <ErrorBoundary>
                <Result logout={logout} />
              </ErrorBoundary>
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
