import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loggin } from '../redux/login/loginSignupReducer';

const Login = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.loginSignupReducer);
  const [state, setState] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const nameChange = (e) => {
    setState(e.target.value);
  };

  const sendName = () => {
    if (state !== '') dispatch(loggin(state));
    setMessage('The field "name" cannot be empty');
  };

  const navSignup = () => {
    navigate('/signup');
  };

  useEffect(() => {
    if (token === 'null') setMessage("This user doesn't exist");
    if (token !== 'null' && token !== '') navigate('/');
  }, [token]);

  return (
    <section className="d-flex align-items-center ms-auto me-auto">
      <div className="container card">
        <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

          <form>

            <h3 className="fw-normal mb-3 pb-3 roboto-font">Log in</h3>

            <div className="form-outline mb-4">
              <input type="name" id="form2Example18" className="form-control form-control-lg" placeholder="Name" value={state} onChange={nameChange} />
              <p className="text-danger mt-2">{message}</p>
            </div>

            <div className="d-flex justify-content-around align-items-baseline">
              <p className="small mb-5 pb-lg-2"><button className="text-muted btn slab-font" onClick={navSignup} type="button">Sign up</button></p>
              <div className="pt-1 mb-4">
                <button className="py-2 px-4 login-btn roboto-font" type="button" onClick={sendName}>Log in</button>
              </div>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Login;
