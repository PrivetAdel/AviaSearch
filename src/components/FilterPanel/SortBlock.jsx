import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {changeSort} from '../../redux/actions';

const SortBlock = () => {
  const dispatch = useDispatch();
  const [sort, setSort] = React.useState(null);

  const changeSortHandler = (evt) => {
    setSort(evt.target.value);
  }

  useEffect(() => {
    dispatch(changeSort(sort));
  }, [sort]);

  return (
    <div className="sort-block">
      <h4 className="sort-block__title">Сортировать</h4>
      <label htmlFor="ascendingPrice">
        <input 
          type="radio" 
          id="ascendingPrice"
          name="sort" 
          value="ascendingPrice"
          onChange={changeSortHandler} />
        - по возрастанию цены
      </label>

      <label htmlFor="descendingPrice">
        <input 
          type="radio" 
          id="descendingPrice"
          name="sort" 
          value="descendingPrice"
          onChange={changeSortHandler} />
        - по убыванию цены
      </label>

      <label htmlFor="travelTime">
        <input 
          type="radio" 
          id="travelTime"
          name="sort" 
          value="travelTime"
          onChange={changeSortHandler} />
        - по времени в пути
      </label>
    </div>
  )
}

export default SortBlock;
