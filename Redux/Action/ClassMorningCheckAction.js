import axios from 'axios';

export const getClassMorningCheck = () => async (dispatch) => {
  try {
    const data = await axios.get(
      'https://projectdata-0i86.onrender.com/ClassMorningCheck'
    );
    dispatch({ type: 'GETCLASSMORNIGCHECK', payload: data.data });
  } catch (error) {
    console.log(error);
  }
};
export const addClassMorningCheck = (data) => async (dispatch) => {
  try {
    await axios.post(
      'https://projectdata-0i86.onrender.com/ClassMorningCheck',
      data
    );
    dispatch(getClassMorningCheck());
  } catch (error) {
    console.log(error);
  }
};
export const getOwnClassMorningCheck = (id) => async (dispatch) => {
  try {
    const data = await axios.get(
      `https://projectdata-0i86.onrender.com/ClassMorningCheck/${id}`
    );
    dispatch({ type: 'GETOWNCLASSMORNINGCKECK', payload: data.data });
  } catch (error) {
    console.log(error);
  }
};

export const updateOwnClassMorningCheck = (id, data) => async (dispatch) => {
  try {
    await axios.put(
      `https://projectdata-0i86.onrender.com/ClassMorningCheck/${id}`,
      data
    );
    dispatch(getClassMorningCheck());
  } catch (error) {
    console.log(error);
  }
};
export const deleteOwnClassMorningCheck = (id) => async (dispatch) => {
  try {
    await axios.delete(
      `https://projectdata-0i86.onrender.com/ClassMorningCheck/${id}`
    );
    dispatch(getClassMorningCheck());
  } catch (error) {
    console.log(error);
  }
};
