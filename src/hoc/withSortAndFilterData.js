import React from 'react';
import {useSelector} from 'react-redux';

export const withSortAndFilterData = (Component) => {
  return (props) => {
    const data = useSelector((rootReducer) => rootReducer.data);
    const sortType = useSelector((rootReducer) => rootReducer.sortType);
    const segmentsFilters = useSelector((rootReducer) => rootReducer.segmentsFilters);
    const airlineFilters = useSelector((rootReducer) => rootReducer.airlineFilters);
    const priceFilters = useSelector((rootReducer) => rootReducer.priceFilters);

    const filterSegments = (obj) => {
      const segments = String(
        (Math.max( obj.flight.legs[0].segments.length, obj.flight.legs[1].segments.length)) - 1);

      if (segmentsFilters.length > 0) {
        return segmentsFilters.includes(segments);
      }

      return obj;
    };

    const filterAirline = (obj) => {
      const airline = obj.flight.carrier.caption;
      if (airlineFilters.length > 0) {
        return airlineFilters.includes(airline);
      }
      return obj;
    };

    const filterPrice = (obj) => {
      const price = Number(obj.flight.price.total.amount);

      if (priceFilters.priceFrom && !priceFilters.priceUpTo) {
        return price > Number(priceFilters.priceFrom)
      }
      if (!priceFilters.priceFrom && priceFilters.priceUpTo) {
        return price < Number(priceFilters.priceUpTo)
      }
      if (priceFilters.priceFrom && priceFilters.priceUpTo) {
        return (price > Number(priceFilters.priceFrom) && price < Number(priceFilters.priceUpTo))
      }

      return obj;
    };

    const sortFunctions = {
      ascendingPrice: ((a, b) => a.flight.price.total.amount - b.flight.price.total.amount),
      descendingPrice: ((a, b) => b.flight.price.total.amount - a.flight.price.total.amount),
      travelTime: ((a, b) => (a.flight.legs[0].duration + a.flight.legs[1].duration) - (b.flight.legs[0].duration + b.flight.legs[1].duration))
    };

    const newData = JSON.parse(JSON.stringify(data));
    const cards = newData
      .sort(sortFunctions[sortType])
      .filter(filterSegments)
      .filter(filterAirline)
      .filter(filterPrice)

    return <Component data={cards} {...props} />
  };
};
