import { useRouter } from 'next/router';
import React from 'react';

const Hoc = ({ children, inRole }) => {
  const router = useRouter();
  const user = {
    isConnect: true,
    Role: 'admin',
  };
  // Check if the user is authenticated, e.g., by accessing your authentication state or using a custom hook.
  // Replace this with your authentication check logic.

  if (!user.isConnect) {
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
