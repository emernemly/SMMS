import axios from 'axios';

export const getHeadteacher = () => async (dispatch) => {
  try {
    const data = await axios.get('http://localhost:3000/HeadTeacher');
    dispatch({ type: 'GETHEADTEACHER', payload: data.data });
  } catch (error) {
    console.log(error);
  }
};

export const ownheadTeacher = (_id) => async (dispatch) => {
  try {
    const data = await axios.get(`http://localhost:3000/HeadTeacher/${_id}`);
    dispatch({ type: 'OWNHEADTEACHER', payload: data.data });
  } catch (error) {
    console.log(error);
  }
};
export const changeHeadTeacher = (datas, _id) => async (dispatch) => {
  try {
    const data = await axios.put(
      `http://localhost:3000/HeadTeacher/${_id}`,
      datas
    );
    dispatch(getHeadteacher());
  } catch (error) {
    console.log(error);
  }
};
export const deleteHeadTeacher = (_id) => async (dispatch) => {
  try {
    const data = await axios.delete(`http://localhost:3000/HeadTeacher/${_id}`);
    dispatch(getHeadteacher());
  } catch (error) {
    console.log(error);
  }
};