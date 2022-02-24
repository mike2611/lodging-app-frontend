import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import DatePicker from 'react-date-picker';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../redux/login/loginSignupReducer';

const Signup = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState(new Date());
  const navigate = useNavigate();

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeBirthDate = (e) => {
    setBirthDate(e);
  };

  const sendName = () => {
    dispatch(createUser(name, birthDate));
  };

  const navLogin = () => {
    navigate('/login');
  };

  return (
    <section className="d-flex align-items-center ms-auto me-auto">
      <div className="container card">
        <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

          <form>

            <h3 className="fw-normal mb-3 pb-3">Sign up</h3>

            <div className="form-outline mb-4">
              <input type="name" id="form2Example18" className="form-control form-control-lg" placeholder="Name" value={name} onChange={changeName} />
              <DatePicker className="form-control form-control-lg mt-2" onChange={changeBirthDate} value={birthDate} />
            </div>

            <div className="d-flex justify-content-around align-items-baseline">
              <p className="small mb-5 pb-lg-2"><button className="text-muted btn" onClick={navLogin} type="button">Log in</button></p>
              <div className="pt-1 mb-4">
                <button className="py-2 px-4 login-btn" type="button" onClick={sendName}>Sign Up</button>
              </div>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Signup;
