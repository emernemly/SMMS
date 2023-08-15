import axios from 'axios';

export const getLogs = () => async (dispatch) => {
  try {
    const data = await axios.get('https://projectdata-0i86.onrender.com/logs');
    dispatch({ type: 'GETLOGS', payload: data.data });
  } catch (error) {
    console.log(error);
  }
};
