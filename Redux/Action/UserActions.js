import axios from 'axios';

export const signIn = (datas, naviget) => async (dispatch) => {
  try {
    const { userName, password } = datas;

    const found = await axios.get(
      `http://localhost:3000/User?userName=${userName}`
    );
    console.log(found);
    if (found.data[0]) {
      if (password === found.data[0].password) {
        dispatch({ type: 'SIGNIN', payload: found.data[0] });
        await axios.post('http://localhost:3000/logs', {
          user: found.data[0].userName,
          accessTime: new Date().toISOString(),
          operation: 'modifications',
        });
        naviget.push('/Dashboard-System-Administrator');
      } else {
        alert('bad credentials');
      }
    } else {
      alert('bad credentials');
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
};
export const getUser = () => async (dispatch) => {
  try {
    const id = localStorage.getItem('token');

    const data = await axios.get(`http://localhost:3000/User/${id}`);

    dispatch({ type: 'GETUSER', payload: data.data });
  } catch (error) {
    console.log(error);
  }
};
export const logout = (navigate) => async (dispatch) => {
  try {
    await localStorage.removeItem('token');
    await localStorage.removeItem('Role');
    dispatch({ type: 'LOGOUT' });
    navigate.push('/Login-System-Adminstrator');
  } catch (error) {
    console.log(error);
  }
};
