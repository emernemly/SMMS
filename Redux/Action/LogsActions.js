import axios from 'axios';

export const getLogs = () => async (dispatch) => {
  try {
    const data = await axios.get('http://localhost:3000/logs');
    dispatch({ type: 'GETLOGS', payload: data.data });
  } catch (error) {
    console.log(error);
  }
};
