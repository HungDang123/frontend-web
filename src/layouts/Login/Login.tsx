import React from "react";
const Login: React.FC = () => {
  return (
    <div className="container p-10 d-flex align-items-center justify-content-center">
      <div className="col-12 col-md-7">
        <form>
          <h1 className="mb-7">Đăng nhập</h1>
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <label className="form-label" htmlFor="username">
                  Tên đăng nhập *
                </label>
                <input
                  className="form-control form-control-sm"
                  id="username"
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="col-12">
              <div className="form-group">
                <label className="form-label" htmlFor="password">
                  Mật khẩu *
                </label>
                <input
                  className="form-control form-control-sm"
                  id="password"
                  type="password"
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-check mb-4">
            <input className="form-check-input" id="remember" type="checkbox" />
            <label className="form-check-label fs-sm" data-bs-toggle="collapse" htmlFor="remember">
              Nhớ mật khẩu?
            </label>
          </div>
          <button className="btn w-100 btn-dark">Đăng nhập</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
