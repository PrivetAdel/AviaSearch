import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeAirlineFilter, changePriceFilter, changeSegmentsFilter} from '../../redux/actions';

const FilterBlock = () => {
  const dispatch = useDispatch();
  const airlines = useSelector((rootReducer) => rootReducer.airlines);
  const [airlineFilter, setAirlineFilter] = React.useState([]);
  const [segmentsFilter, setSegmentsFilter] = React.useState([]);
  const [priceFilter, setPriceFilter] = React.useState({
    priceFrom: '',
    priceUpTo: ''
  });

  const changeFilterHandler = (evt, state, setState) => {
    const {value, checked} = evt.target;

    if (checked) {
      setState([...state, value])
    } else {
      setState(state.filter((item) => item !== value))
    }
  };

  const changePriceFilterHandler = (evt) => {
    const {name, value} = evt.target;
    setPriceFilter({...priceFilter, [name]: value});
  }

  useEffect(() => {
    dispatch(changePriceFilter(priceFilter));
  }, [priceFilter]);

  useEffect(() => {
    dispatch(changeSegmentsFilter(segmentsFilter));
  }, [segmentsFilter]);

  useEffect(() => {
    dispatch(changeAirlineFilter(airlineFilter));
  }, [airlineFilter]);

  return (
    <div className="filter-block">
      <h4 className="filter-block__title">Фильтровать</h4>
  
      <label htmlFor="withoutSegments">
        <input 
          type="checkbox" 
          id="withoutSegments"
          name="withoutSegments"
          value="0"
          onChange={(evt) => changeFilterHandler(evt, segmentsFilter, setSegmentsFilter)} />
        - без пересадок
      </label>

      <label htmlFor="withOneSegments">
        <input 
          type="checkbox" 
          id="withOneSegments"
          name="withOneSegments"
          value="1"
          onChange={(evt) => changeFilterHandler(evt, segmentsFilter, setSegmentsFilter)} />
        - 1 пересадка
      </label>

      <h4 className="filter-block__title">Цена</h4>
      <label htmlFor="priceFrom">
        От&ensp;
        <input 
          type="number" 
          id="priceFrom"
          name="priceFrom"
          placeholder="0"
          min="0"
          step="100"
          value={priceFilter.priceFrom}
          onChange={changePriceFilterHandler} />
      </label>

      <label htmlFor="fromPrice">
        До&ensp;
        <input 
          type="number" 
          id="priceUpTo"
          step="100"
          min="1000"
          name="priceUpTo"
          placeholder="100000" 
          value={priceFilter.priceUpTo}
          onChange={changePriceFilterHandler} />
      </label>

      <h4 className="filter-block__title">Авиакомпании</h4>
      {
        airlines.map((airline) => (
            <label htmlFor={airline} key={airline}>
              <input 
              type="checkbox" 
              id={airline}
              name={airline} 
              value={airline}
              onChange={(evt) => changeFilterHandler(evt, airlineFilter, setAirlineFilter)} />
              - {airline}
            </label>
          )
        )
      }
    </div>
  );
};

export default FilterBlock;
