import axios from 'axios';

export const getDeductionScores = () => async (dispatch) => {
  try {
    const data = await axios(
      'https://projectdata-0i86.onrender.com/deductionScores'
    );
    dispatch({ type: 'GETDEDUCTIONSCORES', payload: data.data });
  } catch (error) {
    console.log(error);
  }
};
export const deductionScores = (_id, datas) => async (dispatch) => {
  try {
    const data = await axios.post(
      'https://projectdata-0i86.onrender.com/deductionScores',
      {
        ...datas,
        reviews: 'waiting',
        studentId: _id,
      }
    );
    console.log(_id);
    dispatch(getDeductionScores());
  } catch (error) {
    console.log(error);
  }
};
export const OwnDeductionScores = (_id) => async (dispatch) => {
  try {
    const data = await axios.get(
      `https://projectdata-0i86.onrender.com/deductionScores/${_id}`
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
            `https://projectdata-0i86.onrender.com/Students/${review.studentId}`
          );
          await axios.put(
            `https://projectdata-0i86.onrender.com/Students/${review.studentId}`,
            {
              ...data.data,
              Score: 0,
            }
          );
          await axios.put(
            `https://projectdata-0i86.onrender.com/deductionScores/${review.id}`,
            {
              ...review,
              reviews: 'approved',
            }
          );
        } else if (reviewsCheck === 'Refused') {
          await axios.put(
            `https://projectdata-0i86.onrender.com/deductionScores/${review.id}`,
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
            `https://projectdata-0i86.onrender.com/Students/${review.studentId}`
          );
          await axios.put(
            `https://projectdata-0i86.onrender.com/Students/${review.studentId}`,
            {
              ...data.data,
              Score: data.data.Score - review.points,
            }
          );
          await axios.put(
            `https://projectdata-0i86.onrender.com/deductionScores/${review.id}`,
            {
              ...review,
              reviews: 'approved',
            }
          );
        } else if (reviewsCheck === 'Refused') {
          await axios.put(
            `https://projectdata-0i86.onrender.com/deductionScores/${review.id}`,
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
