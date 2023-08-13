import axios from 'axios';

export const getHeterogeneity = () => async (dispatch) => {
  try {
    const data = await axios.get('http://localhost:3000/Heterogeneity');
    dispatch({ type: 'GETHETEROGENEITY', payload: data.data });
  } catch (error) {
    console.log(error);
  }
};
export const AddHeterogeneitys = (datas) => async (dispatch) => {
  try {
    await axios.post('http://localhost:3000/Heterogeneity', datas);
    dispatch(getHeterogeneity());
  } catch (error) {
    console.log(error);
  }
};
export const getOwnHeterogeneity = (id) => async (dispatch) => {
  try {
    const data = await axios.get(`http://localhost:3000/Heterogeneity/${id}`);
    dispatch({ type: 'GETOWNHETEROGENEITY', payload: data.data });
  } catch (error) {
    console.log(error);
  }
};
export const updateHeterogeneity = (id, datas) => async (dispatch) => {
  try {
    await axios.put(`http://localhost:3000/Heterogeneity/${id}`, datas);
    dispatch(getHeterogeneity());
  } catch (error) {
    console.log(error);
  }
};
export const deleteHeterogeneity = (id, datas) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:3000/Heterogeneity/${id}`, datas);
    dispatch(getHeterogeneity());
  } catch (error) {
    console.log(error);
  }
};
