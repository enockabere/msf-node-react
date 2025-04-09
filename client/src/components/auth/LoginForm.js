import React from "react";

const LoginForm = () => {
  return (
    <>
      <form className="my-4" action="index.html">
        <div className="form-group mb-2">
          <label className="form-label" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            placeholder="Enter username"
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="userpassword">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="userpassword"
            placeholder="Enter password"
          />
        </div>
        <div className="form-group row mt-3">
          <div className="col-sm-6">
            <div className="form-check form-switch form-switch-success">
              <input
                className="form-check-input"
                type="checkbox"
                id="customSwitchSuccess"
              />
              <label className="form-check-label" htmlFor="customSwitchSuccess">
                Remember me
              </label>
            </div>
          </div>
          <div className="col-sm-6 text-end">
            <a href="auth-recover-pw.html" className="text-muted font-13">
              <i className="dripicons-lock" /> Forgot password?
            </a>
          </div>
        </div>
        <div className="form-group mb-0 row">
          <div className="col-12">
            <div className="d-grid mt-3">
              <button className="btn btn-primary" type="button">
                Log In <i className="fas fa-sign-in-alt ms-1" />
              </button>
            </div>
          </div>
        </div>
      </form>

      <div className="text-center mb-2">
        <p className="text-muted mb-1">
          First time here?{" "}
          <a href="/activate" className="text-danger ms-1">
            Activate Account
          </a>
        </p>
        {/* <h6 class="px-3 d-inline-block">Or Login With</h6> */}
        <p className="text-muted">
          Sign in with?{" "}
          <a href="/sso-login" className="text-primary ms-2">
            Microsoft 365 Office SSO
          </a>
        </p>
      </div>
    </>
  );
};

export default LoginForm;
