import axios from 'axios';

export const getLeaves = () => async (dispatch) => {
  try {
    const data = await axios.get(
      'https://projectdata-0i86.onrender.com/Leaves'
    );
    dispatch({ type: 'GETLEAVES', payload: data.data });
  } catch (error) {
    console.log(error);
  }
};
export const getOwnLeaves = (id) => async (dispatch) => {
  try {
    const data = await axios.get(
      `https://projectdata-0i86.onrender.com/Leaves/${id}`
    );
    dispatch({ type: 'GETOWNLEAVES', payload: data.data });
  } catch (error) {
    console.log(error);
  }
};
export const AddLeaves = (datas) => async (dispatch) => {
  try {
    const id = localStorage.getItem('tokenStudent');
    const data = await axios.get(
      `https://projectdata-0i86.onrender.com/Students/${id}`
    );
    await axios.post(`https://projectdata-0i86.onrender.com/Leaves`, {
      ...datas,
      studentNumber: data.data.StudentNumber,
      student: data.data.FirstName,
      class: data.data.class,
      className: data.data.className,
      status: 'waiting',
      user: id,
    });
    dispatch(getLeaves());
    alert(' Leave Request has send');
  } catch (error) {
    console.log(error);
  }
};
export const UpdateLeaves = (id, datas) => async (dispatch) => {
  try {
    await axios.put(
      `https://projectdata-0i86.onrender.com/Leaves/${id}`,
      datas
    );
    dispatch(getLeaves());
  } catch (error) {
    console.log(error);
  }
};
export const getOwnLeavesByStudent = () => async (dispatch) => {
  try {
    const id = localStorage.getItem('tokenStudent');

    const data = await axios.get(
      `https://projectdata-0i86.onrender.com/Leaves?user=${id}`
    );
    dispatch({ type: 'GETLEAVES', payload: data.data });
  } catch (error) {
    console.log(error);
  }
};
