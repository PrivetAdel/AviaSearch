import {SET_DATA, CHANGE_SORT, CHANGE_SEGMENTS_FILTER, CHANGE_AIRLINE_FILTER, CHANGE_PRICE_FILTER} from '../constants';

const initialState = {
  data: [],
  airlines: [],
  sortType: '',
  airlineFilters: [],
  segmentsFilters: [],
  priceFilters: {
    priceFrom: '',
    priceUpTo: ''
  }
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      const getAirlineCaptions = () => {
        const airlineCaptions = action.payload.map((item) => {
          return item.flight.carrier.caption
        });
  
        const uniqCaptions = new Set(airlineCaptions);

        return [...uniqCaptions]
      }
      
      return {
        ...state,
        data: action.payload,
        airlines: getAirlineCaptions()
      };

    case CHANGE_AIRLINE_FILTER:
      return {
        ...state,
        airlineFilters: action.payload
      }

    case CHANGE_SEGMENTS_FILTER: 
      return {
        ...state,
        segmentsFilters: action.payload
      }

    case CHANGE_PRICE_FILTER:
      return {
        ...state,
        priceFilters: {
          priceFrom: action.payload.priceFrom,
          priceUpTo: action.payload.priceUpTo
        }
      }

    case CHANGE_SORT: 
      return {
        ...state,
        sortType: action.payload
      }
      
    default: 
      return state
  };
};

export default rootReducer;
