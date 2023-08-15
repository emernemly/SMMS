import axios from 'axios';

export const addRoles = (data) => async (dispatch) => {
  try {
    await axios.post('https://projectdata-0i86.onrender.com/Roles', data);
    alert('Role has been added');
  } catch (error) {
    console.log(error);
  }
};
export const getPermissions = () => async (dispatch) => {
  try {
    const data = await axios.get(
      'https://projectdata-0i86.onrender.com/Permissions'
    );
    console.log(data);
    dispatch({ type: 'GETPERMISSION', payload: data.data });
  } catch (error) {
    console.log(error);
  }
};
export const getRoles = () => async (dispatch) => {
  try {
    const data = await axios.get('https://projectdata-0i86.onrender.com/Roles');
    dispatch({ type: 'GETROLES', payload: data.data });
  } catch (error) {
    console.log(error);
  }
};

export const getOwnRole = (id) => async (dispatch) => {
  try {
    const data = await axios.get(
      `https://projectdata-0i86.onrender.com/Roles/${id}`
    );
    dispatch({ type: 'OWNROLE', payload: data.data });
  } catch (error) {
    console.log(error);
  }
};
export const DeleteRole = (id) => async (dispatch) => {
  try {
    await axios.delete(`https://projectdata-0i86.onrender.com/Roles/${id}`);
    console.log(id);
    dispatch(getRoles());
  } catch (error) {
    console.log(error);
  }
};
export const updateRole = (id, data) => async (dispatch) => {
  try {
    await axios.put(`https://projectdata-0i86.onrender.com/Roles/${id}`, data);
    alert('Role has been update');
    dispatch(getRoles());
  } catch (error) {
    console.log(error);
  }
};
export const getRoleByName = (name) => async (dispatch) => {
  try {
    console.log(name);
    const data = await axios.get(
      `https://projectdata-0i86.onrender.com/Roles?Role=${name}`
    );

    dispatch({ type: 'GETROLEBYNAME', payload: data.data });
  } catch (error) {
    console.log(error);
  }
};
