import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getUser } from '../../Redux/Action/UserActions';
import { useDispatch, useSelector } from 'react-redux';
import { getRoleByName } from '../../Redux/Action/RolesAction';

const Hoc = ({ children, inRole }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isUserLoaded, setIsUserLoaded] = useState(false); // Track whether the user data is loaded
  useEffect(() => {
    dispatch(getUser())
      .then(() => setIsUserLoaded(true))
      .catch((error) => {
        console.error('Error fetching user data:', error);
        setIsUserLoaded(true); // Mark user data as loaded even in case of an error
      });
  }, [router]);

  const user = useSelector((state) => state.UserRedcuer.user);
  useEffect(() => {
    user && dispatch(getRoleByName(user.Role));
  }, [user]);
  const Permissions = useSelector((state) => state.RolesReducer.checkRole);
  console.log(Permissions);
  useEffect(() => {}, [Permissions]);
  if (!isUserLoaded) {
    console.log(isUserLoaded);

    return null; // Render nothing until the user data is loaded
  }

  if (!user) {
    router.push('/Login-System-Adminstrator');
    return null;
  } else if (
    !inRole ||
    (inRole &&
      Permissions &&
      !Permissions[0].Permissions.map((el) => el.value).some((role) =>
        inRole.includes(role)
      ))
  ) {
    router.push('/Login-System-Adminstrator');
    return null;
  }

  return <>{children}</>;
};

export default Hoc;
