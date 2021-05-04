import React from 'react';
import SortBlock from './SortBlock';
import FilterBlock from './FilterBlock';

const FilterPanel = () => {
  return (
    <div className="filter-panel__container">
      <SortBlock />
      <FilterBlock />
    </div>
  );
};

export default FilterPanel;
