import axios from 'axios';

export const getHeadteacher = () => async (dispatch) => {
  try {
    const data = await axios.get(
      'https://projectdata-0i86.onrender.com/User?Role=Head teacher'
    );
    dispatch({ type: 'GETHEADTEACHER', payload: data.data });
  } catch (error) {
    console.log(error);
  }
};

export const ownheadTeacher = (_id) => async (dispatch) => {
  try {
    const data = await axios.get(
      `https://projectdata-0i86.onrender.com/User/${_id}`
    );
    dispatch({ type: 'OWNHEADTEACHER', payload: data.data });
  } catch (error) {
    console.log(error);
  }
};
export const changeHeadTeacher = (datas, _id) => async (dispatch) => {
  try {
    const data = await axios.put(
      `https://projectdata-0i86.onrender.com/User/${_id}`,
      datas
    );
    dispatch(getHeadteacher());
  } catch (error) {
    console.log(error);
  }
};
export const deleteHeadTeacher = (_id) => async (dispatch) => {
  try {
    const data = await axios.delete(
      `https://projectdata-0i86.onrender.com/User/${_id}`
    );
    dispatch(getHeadteacher());
  } catch (error) {
    console.log(error);
  }
};
