/* eslint-disable react/prop-types */
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = (props) => {
  const { children } = props;
  const token = useSelector((state) => state.loginReducer);
  const isLoggedIn = token !== '';
  console.log(isLoggedIn);
  const location = useLocation();

  return isLoggedIn ? (
    <>{children}</>
  ) : (
    <Navigate
      replace
      to="/login"
      state={{ from: `${location.pathname}${location.search}` }}
    />
  );
};

export default PrivateRoute;
