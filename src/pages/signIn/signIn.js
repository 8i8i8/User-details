import { useState } from "react";

import userData from "../../storage/userData";
import submit from "./components/submit";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const changeUsername = (e) => {
    setUsername(() => e.target.value);
  };
  const changePassword = (e) => {
    setPassword(() => e.target.value);
  };
  return (
    <>
      <div>
        <header className=" header d-flex  justify-content-between">
          <a className=" " href="mailto:ar7617@srmist.edu.in">
            <h2 className=" cursor text-start m-3 font">Web developer</h2>
          </a>
        </header>
        <h3 className="text-center title">voting</h3>
      </div>
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
                <div className=" mb-4">
                  <label className="form-label footer">Username</label>
                  <input
                    type="text"
                    value={username}
                    onChange={changeUsername}
                    className="form-control form-control-lg "
                  />
                </div>

                <div className=" mb-4">
                  <label className="form-label footer">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={changePassword}
                    className="form-control form-control-lg"
                  />
                </div>

                <button
                  type="text"
                  className="btn btn-lg btn-block complete"
                  onClick={() => submit(username, password, userData)}
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignIn;
