import axios from 'axios';

export const getStudents = () => async (dispatch) => {
  try {
    const data = await axios.get('http://localhost:3000/Students');
    dispatch({ type: 'STUDENTS', payload: data.data });
  } catch (error) {
    console.log(error);
  }
};
export const OwnStudents = (id) => async (dispatch) => {
  try {
    const data = await axios.get(`http://localhost:3000/Students/${id}`);
    dispatch({ type: 'OWNSTUDENTS', payload: data.data });
  } catch (error) {
    console.log(error);
  }
};

export const changeStudent = (datas, _id) => async (dispatch) => {
  try {
    const data = await axios.put(
      `http://localhost:3000/Students/${_id}`,
      datas
    );
    dispatch(getStudents());
  } catch (error) {
    console.log(error);
  }
};
export const deleteStudent = (_id) => async (dispatch) => {
  try {
    const data = await axios.delete(`http://localhost:3000/Students/${_id}`);
    dispatch(getStudents());
  } catch (error) {
    console.log(error);
  }
};
