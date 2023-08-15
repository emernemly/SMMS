import axios from 'axios';

export const getHeterogeneity = () => async (dispatch) => {
  try {
    const data = await axios.get(
      'https://projectdata-0i86.onrender.com/Heterogeneity'
    );
    dispatch({ type: 'GETHETEROGENEITY', payload: data.data });
  } catch (error) {
    console.log(error);
  }
};
export const AddHeterogeneitys = (datas) => async (dispatch) => {
  try {
    await axios.post(
      'https://projectdata-0i86.onrender.com/Heterogeneity',
      datas
    );
    dispatch(getHeterogeneity());
  } catch (error) {
    console.log(error);
  }
};
export const getOwnHeterogeneity = (id) => async (dispatch) => {
  try {
    const data = await axios.get(
      `https://projectdata-0i86.onrender.com/Heterogeneity/${id}`
    );
    dispatch({ type: 'GETOWNHETEROGENEITY', payload: data.data });
  } catch (error) {
    console.log(error);
  }
};
export const updateHeterogeneity = (id, datas) => async (dispatch) => {
  try {
    await axios.put(
      `https://projectdata-0i86.onrender.com/Heterogeneity/${id}`,
      datas
    );
    dispatch(getHeterogeneity());
  } catch (error) {
    console.log(error);
  }
};
export const deleteHeterogeneity = (id, datas) => async (dispatch) => {
  try {
    await axios.delete(
      `https://projectdata-0i86.onrender.com/Heterogeneity/${id}`,
      datas
    );
    dispatch(getHeterogeneity());
  } catch (error) {
    console.log(error);
  }
};
