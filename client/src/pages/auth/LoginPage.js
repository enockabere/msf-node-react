import React, { useEffect } from "react";
import LoginForm from "../../components/auth/LoginForm";

const LoginPage = () => {
  useEffect(() => {
    document.title = "Login | Médecins Sans Frontières - ESS";
  }, []);

  return (
    <div className="row vh-100 d-flex justify-content-center">
      <div className="col-12 align-self-center">
        <div className="card-body">
          <div className="row">
            <div className="col-lg-4 mx-auto">
              <div className="card">
                <div className="card-body p-0 bg-black auth-header-box rounded-top">
                  <div className="text-center p-3">
                    <a href="/" className="logo logo-admin">
                      <img
                        src="/logo-dark.svg"
                        height={50}
                        alt="logo"
                        className="auth-logo"
                      />
                    </a>
                    <h4 className="mt-4 mb-1 fw-semibold text-white fs-18">
                      Sign in to account
                    </h4>
                    <p className="text-muted fw-medium mb-0">
                      Enter your email & password to continue to ESS.
                    </p>
                  </div>
                </div>
                <div className="card-body pt-0">
                  <LoginForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
