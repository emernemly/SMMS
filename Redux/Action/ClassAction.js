import axios from 'axios';

export const getClasses = () => async (dispatch) => {
  try {
    const data = await axios.get('http://localhost:3000/classes');
    dispatch({ type: 'GETCLASS', payload: data.data });
  } catch (error) {
    console.log(error);
  }
};

export const addClasses = (data) => (dispatch) => {
  try {
    axios.post('http://localhost:3000/classes', data);
    dispatch(getClasses());
  } catch (error) {
    console.log(error);
  }
};
export const getOwnClass = (_id) => async (dispatch) => {
  try {
    const data = await axios.get(`http://localhost:3000/classes/${_id}`);
    console.log(_id);
    dispatch({ type: 'OWNCLASS', payload: data.data });
  } catch (error) {
    console.log(error);
  }
};

export const updateClass = (id, data) => async (dispatch) => {
  try {
    await axios.put(`http://localhost:3000/classes/${id}`, data);
    dispatch(getClasses());
  } catch (error) {
    console.log(error);
  }
};
export const DeleteClass = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:3000/classes/${id}`);
    dispatch(getClasses());
  } catch (error) {
    console.log(error);
  }
};
export const findOwnClass = (name) => async (dispatch) => {
  try {
    const data = await axios.get(`http://localhost:3000/classes?Class=${name}`);
    dispatch({ type: 'FINDOWNCLASS', payload: data.data });
  } catch (error) {
    console.log(error);
  }
};
