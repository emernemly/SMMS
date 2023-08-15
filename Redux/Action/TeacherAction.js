import axios from 'axios';

export const getTeacher = () => async (dispatch) => {
  try {
    const data = await axios.get(
      'https://projectdata-0i86.onrender.com/User?Role=teacher'
    );
    dispatch({ type: 'GETTEACHER', payload: data.data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTeacher = (_id) => async (dispatch) => {
  try {
    const data = await axios.delete(
      `https://projectdata-0i86.onrender.com/User/${_id}`
    );
    dispatch(getTeacher());
  } catch (error) {
    console.log(error);
  }
};
export const ownTeacher = (_id) => async (dispatch) => {
  try {
    const data = await axios.get(
      `https://projectdata-0i86.onrender.com/User/${_id}`
    );
    dispatch({ type: 'GETOWNTEACHER', payload: data.data });
  } catch (error) {
    console.log(error);
  }
};

export const changeTeacher = (datas, _id) => async (dispatch) => {
  try {
    const data = await axios.put(
      `https://projectdata-0i86.onrender.com/User/${_id}`,
      datas
    );
    dispatch(getTeacher());
  } catch (error) {
    console.log(error);
  }
};
