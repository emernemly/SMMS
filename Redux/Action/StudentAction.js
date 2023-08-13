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

export const getstudentByClass = (className) => async (dispatch) => {
  try {
    const data = await axios.get(
      `http://localhost:3000/Students?className=${className}`
    );
    dispatch({ type: 'GETSTUDENTBYCLASS', payload: data.data });
  } catch (error) {
    console.log(error);
  }
};

export const signInStudent = (datas, naviget) => async (dispatch) => {
  try {
    const { userName, password } = datas;

    const found = await axios.get(
      `http://localhost:3000/Students?userName=${userName}`
    );
    console.log(found);
    if (found.data[0]) {
      if (password === found.data[0].password) {
        dispatch({ type: 'SIGNINSTUDENT', payload: found.data[0] });
        await axios.post('http://localhost:3000/logs', {
          user: found.data[0].userName,
          accessTime: new Date().toISOString(),
          operation: 'modifications',
        });
        naviget.push('/StudentParent/MoralEducationResult');
      } else {
        alert('bad credentials');
      }
    } else {
      alert('bad credentials');
    }
  } catch (error) {
    console.log(error);
  }
};
export const getStudent = () => async (dispatch) => {
  try {
    const id = localStorage.getItem('tokenStudent');
    const data = await axios.get(`http://localhost:3000/Students/${id}`);
    dispatch({ type: 'OWNSTUDENTS', payload: data.data });
  } catch (error) {
    console.log(error);
  }
};
export const logoutStudent = (navigate) => async (dispatch) => {
  try {
    localStorage.removeItem('tokenStudent');

    dispatch({ type: 'LOGOUTSTUDENT' });
    navigate.push('/');
  } catch (error) {
    console.log(error);
  }
};
