import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { fetchToken } from '../redux/login/loginReducer';

const Login = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState('');

  const nameChange = (e) => {
    setState(e.target.value);
  };

  const sendName = () => {
    dispatch(fetchToken(state));
  };

  return (
    <section className="d-flex align-items-center ms-auto me-auto">
      <div className="container card">
        <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

          <form>

            <h3 className="fw-normal mb-3 pb-3">Log in</h3>

            <div className="form-outline mb-4">
              <input type="name" id="form2Example18" className="form-control form-control-lg" placeholder="Name" value={state} onChange={nameChange} />
            </div>

            <div className="d-flex justify-content-around align-items-baseline">
              <p className="small mb-5 pb-lg-2"><a className="text-muted" href="#!">Sign Up</a></p>
              <div className="pt-1 mb-4">
                <button className="py-2 px-4 login-btn" type="button" onClick={sendName}>Login</button>
              </div>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Login;
