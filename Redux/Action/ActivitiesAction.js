import axios from 'axios';

export const getActivities = () => async (dispatch) => {
  try {
    const data = await axios.get(
      'https://projectdata-0i86.onrender.com/Activities'
    );
    dispatch({ type: 'GETACTIVITIES', payload: data.data });
  } catch (error) {
    console.log(error);
  }
};
export const addActivities = (datas) => async (dispatch) => {
  try {
    await axios.post('https://projectdata-0i86.onrender.com/Activities', datas);
    dispatch(getActivities());
  } catch (error) {
    console.log(error);
  }
};

export const getOwnActivities = (id) => async (dispatch) => {
  try {
    const data = await axios.get(
      `https://projectdata-0i86.onrender.com/Activities/${id}`
    );
    dispatch({ type: 'GETOWNACTIVITIES', payload: data.data });
  } catch (error) {
    console.log(error);
  }
};
export const updateActivities = (datas, id) => async (dispatch) => {
  try {
    await axios.put(
      `https://projectdata-0i86.onrender.com/Activities/${id}`,
      datas
    );
    dispatch(getActivities());
  } catch (error) {
    console.log(error);
  }
};
export const deleteActivities = (id) => async (dispatch) => {
  try {
    await axios.delete(
      `https://projectdata-0i86.onrender.com/Activities/${id}`
    );
    dispatch(getActivities());
  } catch (error) {
    console.log(error);
  }
};
export const getActivitiesByStudent = () => async (dispatch) => {
  try {
    const id = localStorage.getItem('tokenStudent');
    const student = await axios.get(
      `https://projectdata-0i86.onrender.com/Students/${id}`
    );

    if (student.data) {
      console.log(student.data);
      const data = await axios.get(
        `https://projectdata-0i86.onrender.com/Activities?student=${student.data.FirstName}`
      );
      console.log(data.data);
      dispatch({ type: 'GETACTIVITIES', payload: data.data });
    }
  } catch (error) {
    console.log(error);
  }
};
