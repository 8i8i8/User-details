import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Navigate } from "react-router-dom";
import authentication from "../authentication";
import userData from "../userData";

function SignIn() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(false);

  const changeUsername = (e) => {
    setUsername(() => e.target.value);
  };
  const changePassword = (e) => {
    setPassword(() => e.target.value);
  };
  const submit = () => {
    if (username && password) {
      const user = userData.find(
        (a) => a.username === username && a.password === password
      );

      if (user) {
        setStatus(() => true);
        localStorage.setItem(
          "loggedIn",
          JSON.stringify({ name: user.username })
        );
        <Navigate to="/user" />;
      }
    }
  };

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="Phone image"
            />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form>
              <div className="form-outline  mb-4">
                <input
                  type="text"
                  value={username}
                  onChange={changeUsername}
                  className="form-control form-control-lg "
                />
                <label className="form-label">Username</label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  value={password}
                  onChange={changePassword}
                  className="form-control form-control-lg"
                />
                <label className="form-label">Password</label>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
                onClick={submit}
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
