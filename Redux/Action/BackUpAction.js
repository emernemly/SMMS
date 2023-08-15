import axios from 'axios';

export const addUserBackup = () => async (dispatch) => {
  try {
    const data = await axios.get('https://projectdata-0i86.onrender.com/User');
    await axios.post(
      'https://smmsbackend.onrender.com/api/backup/user',
      data.data
    );
    await axios.post('https://projectdata-0i86.onrender.com/backUp', {
      Status: 'completed',
      database: 'Users',
      location: 'mongoDb',
    });
    alert('User BackUp is add');
    dispatch(getBackUp());
  } catch (error) {
    console.log(error);
  }
};
export const addStudentsBackup = () => async (dispatch) => {
  try {
    const data = await axios.get(
      'https://projectdata-0i86.onrender.com/Students'
    );
    await axios.post(
      'https://smmsbackend.onrender.com/api/backup/user/api/backup/students',
      data.data
    );
    await axios.post('https://projectdata-0i86.onrender.com/backUp', {
      Status: 'completed',
      database: 'Students',
      location: 'mongoDb',
    });
    alert('Students BackUp is add');
    dispatch(getBackUp());
  } catch (error) {
    console.log(error);
  }
};
export const addClassesBackup = () => async (dispatch) => {
  try {
    const data = await axios.get(
      'https://projectdata-0i86.onrender.com/classes'
    );
    await axios.post(
      'https://smmsbackend.onrender.com/api/backup/user/api/backup/classes',
      data.data
    );
    await axios.post('https://projectdata-0i86.onrender.com/backUp', {
      Status: 'completed',
      database: 'Classes',
      location: 'mongoDb',
    });
    alert('Classes BackUp is add');
    dispatch(getBackUp());
  } catch (error) {
    console.log(error);
  }
};

export const getBackUp = () => async (dispatch) => {
  try {
    const data = await axios.get(
      'https://projectdata-0i86.onrender.com/backUp'
    );
    dispatch({ type: 'GETBACKUP', payload: data.data });
  } catch (error) {
    console.log(error);
  }
};
