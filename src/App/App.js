import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {fetchData} from '../redux/actions';
import FilterPanel from '../components/FilterPanel/FilterPanel';
import CardList from '../components/CardList/CardList';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData())
  }, []);

  return (
    <div className="app">
      <FilterPanel />
      <CardList />
    </div>
  );
}

export default App;
