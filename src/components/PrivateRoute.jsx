import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../features/auth/authSlice';

export { PrivateRoute };
function PrivateRoute({ children }) {
  const navigate = useNavigate();

  const user = useSelector(selectCurrentUser);
  if (!user) {
    // not logged in so redirect to login page with the return url
    return <Navigate to='/' state={{ from: navigate.location }} />;
  }

  // authorized so return child components
  return children;
}
