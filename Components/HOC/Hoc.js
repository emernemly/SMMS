import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { getUser } from '../../Redux/Action/UserActions';
import { useDispatch, useSelector } from 'react-redux';

const Hoc = ({ children, inRole }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);
  // Check if the user is authenticated, e.g., by accessing your authentication state or using a custom hook.
  // Replace this with your authentication check logic.
  const user = useSelector((state) => state.UserRedcuer.user);
  if (!user) {
    // Redirect the user to the login page if not authenticated.
    router.push('/Login-System-Adminstrator');
    return null; // Render nothing until the redirect happens.
  } else if (
    !inRole ||
    (inRole && !inRole.some((role) => role === user.Role))
  ) {
    router.push('/Login-System-Adminstrator');
    return null;
  }
  // Render the child components if authenticated.
  return <>{children}</>;
};

export default Hoc;
