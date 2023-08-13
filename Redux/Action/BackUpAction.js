import axios from 'axios';

export const addUserBackup = () => async (dispatch) => {
  try {
    const data = await axios.get('http://localhost:3000/User');
    await axios.post('http://localhost:1000/api/backup/user', data.data);
    await axios.post('http://localhost:3000/backUp', {
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
    const data = await axios.get('http://localhost:3000/Students');
    await axios.post('http://localhost:1000/api/backup/students', data.data);
    await axios.post('http://localhost:3000/backUp', {
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
    const data = await axios.get('http://localhost:3000/classes');
    await axios.post('http://localhost:1000/api/backup/classes', data.data);
    await axios.post('http://localhost:3000/backUp', {
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
    const data = await axios.get('http://localhost:3000/backUp');
    dispatch({ type: 'GETBACKUP', payload: data.data });
  } catch (error) {
    console.log(error);
  }
};
