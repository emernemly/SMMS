import axios from 'axios';

export const getDeductionScores = () => async (dispatch) => {
  try {
    const data = await axios('http://localhost:3000/deductionScores');
    dispatch({ type: 'GETDEDUCTIONSCORES', payload: data.data });
  } catch (error) {
    console.log(error);
  }
};
export const deductionScores = (_id, datas) => (dispatch) => {
  try {
    const data = axios.post('http://localhost:3000/deductionScores', {
      ...datas,
      reviews: 'waiting',
      studentId: _id,
    });
    console.log(_id);
    dispatch(getDeductionScores());
  } catch (error) {
    console.log(error);
  }
};
