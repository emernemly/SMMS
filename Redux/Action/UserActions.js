import axios from 'axios';

export const signIn = (datas, naviget) => async (dispatch) => {
  try {
    const { userName, password } = datas;

    const found = await axios.get(
      `http://localhost:3000/User?userName=${userName}`
    );
    console.log(found.data[0]);

    if (found.data[0]) {
      if (password === found.data[0].password) {
        dispatch({ type: 'SIGNIN', payload: found.data[0] });
        naviget.push('/Dashboard-System-Administrator');
      } else {
        alert('bad credentials');
      }
    } else {
      alert('bad credentials');
    }
  } catch (error) {
    console.log(error);
  }
};
export const getUser = () => async (dispatch) => {
  try {
    const id = localStorage.getItem('token');

    const data = await axios.get(`http://localhost:3000/User/${id}`);
    console.log(data.data);
    dispatch({ type: 'GETUSER', payload: data.data });
  } catch (error) {
    console.log(error);
  }
};
