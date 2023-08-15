import axios from 'axios';

export const getClasses = () => async (dispatch) => {
  try {
    const data = await axios.get(
      'https://projectdata-0i86.onrender.com/classes'
    );
    dispatch({ type: 'GETCLASS', payload: data.data });
  } catch (error) {
    console.log(error);
  }
};

export const addClasses = (data) => (dispatch) => {
  try {
    axios.post('https://projectdata-0i86.onrender.com/classes', data);
    dispatch(getClasses());
  } catch (error) {
    console.log(error);
  }
};
export const getOwnClass = (_id) => async (dispatch) => {
  try {
    const data = await axios.get(
      `https://projectdata-0i86.onrender.com/classes/${_id}`
    );
    console.log(_id);
    dispatch({ type: 'OWNCLASS', payload: data.data });
  } catch (error) {
    console.log(error);
  }
};

export const updateClass = (id, data) => async (dispatch) => {
  try {
    await axios.put(
      `https://projectdata-0i86.onrender.com/classes/${id}`,
      data
    );
    dispatch(getClasses());
  } catch (error) {
    console.log(error);
  }
};
export const DeleteClass = (id) => async (dispatch) => {
  try {
    await axios.delete(`https://projectdata-0i86.onrender.com/classes/${id}`);
    dispatch(getClasses());
  } catch (error) {
    console.log(error);
  }
};
export const findOwnClass = (name) => async (dispatch) => {
  try {
    const data = await axios.get(
      `https://projectdata-0i86.onrender.com/classes?Class=${name}`
    );
    dispatch({ type: 'FINDOWNCLASS', payload: data.data });
  } catch (error) {
    console.log(error);
  }
};
