import React, {useEffect} from 'react';
import {withSortAndFilterData} from '../../hoc/withSortAndFilterData';
import Card from '../Card';

const CARDS_COUNT_PER_STEP = 5;

const CardList = ({data}) => {
  const [cards, setCards] = React.useState(null);
  const [showBtn, setShowBtn] = React.useState(false);

  const showMoreClickHandler = () => {
    const cardsCount = cards.length;
    const newRenderCardsCount = cardsCount + CARDS_COUNT_PER_STEP;
    const newRenderCards = data.slice(cardsCount, newRenderCardsCount);

    setCards([...cards, ...newRenderCards]);
  }

  useEffect(() => {
    setCards(data.slice(0, CARDS_COUNT_PER_STEP));
  }, [data]);

  useEffect(() => {
    if (data && cards && data.length > cards.length) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  }, [data, cards]);

  return (
    <div className="card-list__container">
      <ul className="card-list">
        {cards && cards.map((card) => (
          <li key={card.flightToken}>
            <Card card={card.flight} />
          </li>
        ))}
      </ul>
      {
        showBtn && <button className="card-list__show-more-btn" onClick={showMoreClickHandler}>Показать ещё</button>
      }
    </div>
  );
};

export default withSortAndFilterData(CardList);
