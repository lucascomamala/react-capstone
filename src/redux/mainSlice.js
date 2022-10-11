/* eslint-disable */
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

const BASE_URI_V4 = `https://na1.api.riotgames.com`;
const BASE_URI_V5 = `https://americas.api.riotgames.com`;
const DDRAGON_URI = `http://ddragon.leagueoflegends.com`;

const CHAMP_LIST_URI = `${DDRAGON_URI}/cdn/12.19.1/data/en_US/champion.json`;

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

  console.log("simple", champList);
  console.log("detail", detailedChampList);

  const newState = {
    simpleChampList: Object.values(champList),
    detailedChampList,
  };
  console.log("state:, ", newState);
  dispatch(dataFetched(newState));
}

// Reducer
const mainReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    default:
      return state;
  }
};


export { fetchData };

export default mainReducer;
