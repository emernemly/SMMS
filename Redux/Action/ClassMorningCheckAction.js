import axios from 'axios';

export const getClassMorningCheck = () => async (dispatch) => {
  try {
    const data = await axios.get('http://localhost:3000/ClassMorningCheck');
    dispatch({ type: 'GETCLASSMORNIGCHECK', payload: data.data });
  } catch (error) {
    console.log(error);
  }
};
export const addClassMorningCheck = (data) => async (dispatch) => {
  try {
    await axios.post('http://localhost:3000/ClassMorningCheck', data);
    dispatch(getClassMorningCheck());
  } catch (error) {
    console.log(error);
  }
};
export const getOwnClassMorningCheck = (id) => async (dispatch) => {
  try {
    const data = await axios.get(
      `http://localhost:3000/ClassMorningCheck/${id}`
    );
    dispatch({ type: 'GETOWNCLASSMORNINGCKECK', payload: data.data });
  } catch (error) {
    console.log(error);
  }
};

export const updateOwnClassMorningCheck = (id, data) => async (dispatch) => {
  try {
    await axios.put(`http://localhost:3000/ClassMorningCheck/${id}`, data);
    dispatch(getClassMorningCheck());
  } catch (error) {
    console.log(error);
  }
};
export const deleteOwnClassMorningCheck = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:3000/ClassMorningCheck/${id}`);
    dispatch(getClassMorningCheck());
  } catch (error) {
    console.log(error);
  }
};
