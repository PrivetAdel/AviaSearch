import React from 'react';
import {tranformDuration, transformTime, transformDate} from '../../utils';

const Card = ({card}) => {
  const {carrier, price, legs} = card;

  return (
    <div className="card__container">
      <div className="card__header">
        <p>{carrier.caption}</p>
        <div className="card__price">
          <span className="card__cost">{Math.floor(price.passengerPrices[0].total.amount)} &#8381;</span>
          <span className="card__footnote">Стоимость для одного взрослого пассажира</span>
        </div>
      </div>

      <div className="card__there">
        <div className="card__direction">
          <p>
            {legs[0].segments[0].departureCity && legs[0].segments[0].departureCity.caption + ',\u0020'}
            {legs[0].segments[0].departureAirport.caption}&ensp;
            <span>({legs[0].segments[0].departureAirport.uid})</span>
          </p>
          <p><span>&emsp;&#8594;&emsp;</span></p>
          {
            legs[0].segments.length > 1 ? (
                <p>
                  {legs[0].segments[legs[0].segments.length - 1].arrivalCity && legs[0].segments[legs[0].segments.length - 1].arrivalCity.caption + ',\u0020'}
                  {legs[0].segments[legs[0].segments.length - 1].arrivalAirport.caption}&ensp;
                  <span>({legs[0].segments[legs[0].segments.length - 1].arrivalAirport.uid})</span>
                </p>
              ) : (
                <p>
                  {legs[0].segments[0].arrivalCity.caption},&ensp;
                  {legs[0].segments[0].arrivalAirport.caption}&ensp;
                  <span>({legs[0].segments[0].arrivalAirport.uid})</span>
                </p>
              )
          }
        </div>

        <div className="card__time-block">
          <p>
            <span className="card__time">
              {transformTime(legs[0].segments[0].departureDate)}
            </span>&ensp;
            <span className="card__date">
              {transformDate(legs[0].segments[0].departureDate)}
            </span>
          </p>
          <p className="card__duration">{tranformDuration(legs[0].duration)}</p>
          {
              legs[0].segments.length > 1 ? (
                <p>
                  <span className="card__date">
                    {transformDate(legs[0].segments[legs[0].segments.length - 1].arrivalDate)}
                  </span>&ensp;
                  <span className="card__time">
                    {transformTime(legs[0].segments[legs[0].segments.length - 1].arrivalDate)}
                  </span>
                </p>
              ) : (
                <p>
                  <span className="card__date">
                    {transformDate(legs[0].segments[0].arrivalDate)}
                  </span>&ensp;
                  <span className="card__time">
                    {transformTime(legs[0].segments[0].arrivalDate)}
                  </span>
                </p>)
            }
        </div>

        <div className="card__transfer-count">
          {legs[0].segments.length > 1 && <span>{legs.length - 1} пересадка</span>}
        </div>

        <div className="card__airline">
          <p>
            Рейс выполняет: {carrier.caption}
          </p>
        </div>
      </div>

      {
        legs[1] && 
        <div className="card__back">
          <div className="card__direction">
            <p>
              {legs[1].segments[0].departureCity && legs[1].segments[0].departureCity.caption + ',\u0020'}
              {legs[1].segments[0].departureAirport.caption}&ensp;
              <span>({legs[1].segments[0].departureAirport.uid})</span>
            </p>
            <p><span>&emsp;&#8594;&emsp;</span></p>
            {
              legs[1].segments.length > 1 ? (
                  <p>
                    {legs[1].segments[legs[1].segments.length - 1].arrivalCity.caption},&ensp;
                    {legs[1].segments[legs[1].segments.length - 1].arrivalAirport.caption}&ensp;
                    <span>({legs[1].segments[legs[1].segments.length - 1].arrivalAirport.uid})</span>
                  </p>
                ) : (
                  <p>
                    {legs[1].segments[0].arrivalCity.caption},&ensp;
                    {legs[1].segments[0].arrivalAirport.caption}&ensp;
                    <span>({legs[1].segments[0].arrivalAirport.uid})</span>
                  </p>
                )
            }
          </div>

          <div className="card__time-block">
            <p>
              <span className="card__time">
                {transformTime(legs[1].segments[0].departureDate)}
              </span>&ensp;
              <span className="card__date">
                {transformDate(legs[1].segments[0].departureDate)}
              </span>
            </p>

            <p className="card__duration">{tranformDuration(legs[1].duration)}</p>
            {
              legs[1].segments.length > 1 ? (
                <p>
                  <span className="card__date">
                    {transformDate(legs[1].segments[legs[1].segments.length - 1].arrivalDate)}
                  </span>&ensp;
                  <span className="card__time">
                    {transformTime(legs[1].segments[legs[1].segments.length - 1].arrivalDate)}
                  </span>
                </p>
              ) : (
                <p>
                  <span className="card__date">
                    {transformDate(legs[1].segments[0].arrivalDate)}
                  </span>&ensp;
                  <span className="card__time">
                    {transformTime(legs[1].segments[0].arrivalDate)}
                  </span>
                </p>)
            }
          </div>

          <div className="card__transfer-count">
            {legs[1].segments.length > 1 && <span>{legs.length - 1} пересадка</span>}
          </div>

          <div className="card__airline">
            <p>
              Рейс выполняет: {carrier.caption}
            </p>
          </div>
        </div>
      }
      
      <button className="card__choose-btn">Выбрать</button>
    </div>
  )
}

export default Card;
