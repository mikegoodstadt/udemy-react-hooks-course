import { useContext } from "react";
import { Navigate } from "react-router";
import loggedInContext from '../../contexts/loggedInContext';

const Authenticate = ({ children }) => {
  const [loggedIn, setLoggedIn] = useContext(loggedInContext);
  return !loggedIn ? <Navigate to="/" replace /> : children;
};

export default Authenticate;