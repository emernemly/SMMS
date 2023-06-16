import axios from 'axios';

export const getTeacher = () => async (dispatch) => {
  try {
    const data = await axios.get('http://localhost:3000/User?Role=teacher');
    dispatch({ type: 'GETTEACHER', payload: data.data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTeacher = (_id) => async (dispatch) => {
  try {
    const data = await axios.delete(`http://localhost:3000/User/${_id}`);
    dispatch(getTeacher());
  } catch (error) {
    console.log(error);
  }
};
export const ownTeacher = (_id) => async (dispatch) => {
  try {
    const data = await axios.get(`http://localhost:3000/User/${_id}`);
    dispatch({ type: 'GETOWNTEACHER', payload: data.data });
  } catch (error) {
    console.log(error);
  }
};

export const changeTeacher = (datas, _id) => async (dispatch) => {
  try {
    const data = await axios.put(`http://localhost:3000/User/${_id}`, datas);
    dispatch(getTeacher());
  } catch (error) {
    console.log(error);
  }
};
