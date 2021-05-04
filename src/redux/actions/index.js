import axios from 'axios';
import {URL, SET_DATA, CHANGE_SORT, CHANGE_SEGMENTS_FILTER, CHANGE_AIRLINE_FILTER, CHANGE_PRICE_FILTER} from '../constants';

export const fetchData = () => (dispatch) => {
  axios.get(URL)
    .then(res => dispatch(setData(res.data.flights)))
    .catch(error => console.error('Error', error))
};

export const setData = (data) => ({
  type: SET_DATA,
  payload: data
});

export const changeSort = (sortType) => ({
  type: CHANGE_SORT,
  payload: sortType
});

export const changeSegmentsFilter = (segmentsFilters) => ({
  type: CHANGE_SEGMENTS_FILTER,
  payload: segmentsFilters
});

export const changeAirlineFilter = (airlineFilters) => ({
  type: CHANGE_AIRLINE_FILTER,
  payload: airlineFilters
});

export const changePriceFilter = (priceFilters) => ({
  type: CHANGE_PRICE_FILTER,
  payload: priceFilters
});
