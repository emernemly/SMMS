import axios from 'axios';

export const ScoreAdding = (data, studentID) => async (dispatch) => {
  try {
    const student = await axios.get(
      `https://projectdata-0i86.onrender.com/Students/${studentID}`
    );
    await axios.post('https://projectdata-0i86.onrender.com/addScore', {
      ...data,
      UserId: student.data,
      reviews: 'waiting',
      status: 'add',
    });
  } catch (error) {
    console.log(error);
  }
};

export const GetScore = () => async (dispatch) => {
  try {
    const MoralScore = await axios.get(
      'https://projectdata-0i86.onrender.com/addScore'
    );
    dispatch({ type: 'GETSCORE', payload: MoralScore.data });
  } catch (error) {
    console.log(error);
  }
};

export const GetOwnScore = (_id) => async (dispatch) => {
  try {
    const MoralScore = await axios.get(
      `https://projectdata-0i86.onrender.com/addScore/${_id}`
    );
    dispatch({ type: 'GETOWNSCORE', payload: MoralScore.data });
  } catch (error) {
    console.log(error);
  }
};
export const StatusAdding = (review, reviewsCheck) => async (dispatch) => {
  try {
    if (review.status === 'add') {
      console.log(review);
      if (reviewsCheck === 'approved') {
        await axios.put(
          `https://projectdata-0i86.onrender.com/Students/${review.UserId.id}`,
          {
            ...review.UserId,
            Score: review.score,
          }
        );
        await axios.put(
          `https://projectdata-0i86.onrender.com/addScore/${review.id}`,
          {
            ...review,
            reviews: 'approved',
          }
        );
      } else if (reviewsCheck === 'Refused') {
        await axios.put(
          `https://projectdata-0i86.onrender.com/addScore/${review.id}`,
          {
            ...review,
            reviews: 'Refused',
          }
        );
      }
    }
    dispatch(GetScore());
  } catch (error) {
    console.log(error);
  }
};
export const addingBystudents = () => async (dispatch) => {
  try {
    const id = localStorage.getItem('tokenStudent');
    const data = await axios.get(
      `https://projectdata-0i86.onrender.com/addScore?UserId.id=${id}`
    );
    dispatch({ type: 'GETSCORE', payload: data.data });
  } catch (error) {
    console.log(error);
  }
};
