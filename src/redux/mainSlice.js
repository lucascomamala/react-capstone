/* eslint-disable */
import axios from 'axios';

const CHAMP_LIST_URI = `${DDRAGON_URI}/cdn/12.19.1/data/en_US/champion.json`;

const initialState = {
  simpleChampList: [],
  detailedChampList: [],
};

// Actions
const FETCH_DATA = 'react-capstone/FETCH_DATA';

// Action creators
const dataFetched = (data) => ({
  type: FETCH_DATA,
  payload: data,
});

const fetchData = () => async (dispatch) => {
  const response = await axios.get(CHAMP_LIST_URI);
  const detailedChampList = [];

  const champList = response.data.data;
  const champIdList = Object.keys(champList);
  const champUriList = champIdList.map((id) => `${DDRAGON_URI}/cdn/12.19.1/data/en_US/champion/${id}.json`);

  for (let i = 0; i < champUriList.length; i += 1) {
    const champResponse = await axios.get(champUriList[i]);
    detailedChampList.push(champResponse.data.data[champIdList[i]]);
  }
  const newState = {
    simpleChampList: Object.values(champList),
    detailedChampList,
  };
  dispatch(dataFetched(newState));
}

// Reducer
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    default:
      return state;
  }
};


export { fetchData };

export default mainReducer;
