import logo from '../assets/logo.png';

const Login = () => (
  <section className="vh-100">
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6 text-black">

          <div className="px-5 ms-xl-4">
            <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" />
            <span className="h1 fw-bold mb-0">
              <img className="m-5" src={logo} alt="logo" width="250px" />
            </span>
          </div>

          <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

            <form>

              <h3 className="fw-normal mb-3 pb-3">Log in</h3>

              <div className="form-outline mb-4">
                <input type="name" id="form2Example18" className="form-control form-control-lg" placeholder="Name" />
              </div>

              <div className="pt-1 mb-4">
                <button className="py-2 px-4 login-btn" type="button">Login</button>
              </div>

              <p className="small mb-5 pb-lg-2"><a className="text-muted" href="#!">Sign Up</a></p>

            </form>

          </div>

        </div>
        <div className="col-sm-6 px-0 d-none d-sm-block">
          <img src="https://images.squarespace-cdn.com/content/v1/55668388e4b0992f1a75b868/1587504927434-J2ZXTNSUM1JDE478HO76/kicking-horse-lodging-website-header-20150622.jpg?format=1500w" alt="Login" className="vh-100" />
        </div>
      </div>
    </div>
  </section>
);

export default Login;
