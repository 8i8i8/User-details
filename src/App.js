import "./App.css";
import * as mdb from "mdb-ui-kit"; // lib
import userData from "./userData";
import SignIn from "./pages/signIn";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Voting from "./pages/voting";
import authentication from "./authentication";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={authentication() ? <Navigate to="/user" /> : <SignIn />}
          />
          <Route
            exact
            path="/user"
            element={authentication() ? <Voting /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
