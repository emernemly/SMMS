import axios from 'axios';

export const getDeductionScores = () => async (dispatch) => {
  try {
    const data = await axios('http://localhost:3000/deductionScores');
    dispatch({ type: 'GETDEDUCTIONSCORES', payload: data.data });
  } catch (error) {
    console.log(error);
  }
};
export const deductionScores = (_id, datas) => async (dispatch) => {
  try {
    const data = await axios.post('http://localhost:3000/deductionScores', {
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
export const OwnDeductionScores = (_id) => async (dispatch) => {
  try {
    const data = await axios.get(
      `http://localhost:3000/deductionScores/${_id}`
    );
    dispatch({ type: 'OWNDEDUCTIONS', payload: data.data });
  } catch (error) {
    console.log(error);
  }
};
export const StatusDeductionScores =
  (review, reviewsCheck) => async (dispatch) => {
    try {
      if (review.status === 'Cancelling') {
        console.log(review);
        if (reviewsCheck === 'approved') {
          const data = await axios.get(
            `http://localhost:3000/Students/${review.studentId}`
          );
          await axios.put(
            `http://localhost:3000/Students/${review.studentId}`,
            {
              ...data.data,
              Score: 0,
            }
          );
          await axios.put(
            `http://localhost:3000/deductionScores/${review.id}`,
            {
              ...review,
              reviews: 'approved',
            }
          );
        } else if (reviewsCheck === 'Refused') {
          await axios.put(
            `http://localhost:3000/deductionScores/${review.id}`,
            {
              ...review,
              reviews: 'Refused',
            }
          );
        }
      } else if (review.status === 'deduction') {
        console.log(review);
        if (reviewsCheck === 'approved') {
          const data = await axios.get(
            `http://localhost:3000/Students/${review.studentId}`
          );
          await axios.put(
            `http://localhost:3000/Students/${review.studentId}`,
            {
              ...data.data,
              Score: data.data.Score - review.points,
            }
          );
          await axios.put(
            `http://localhost:3000/deductionScores/${review.id}`,
            {
              ...review,
              reviews: 'approved',
            }
          );
        } else if (reviewsCheck === 'Refused') {
          await axios.put(
            `http://localhost:3000/deductionScores/${review.id}`,
            {
              ...review,
              reviews: 'Refused',
            }
          );
        }
      }
      dispatch(getDeductionScores());
    } catch (error) {
      console.log(error);
    }
  };
