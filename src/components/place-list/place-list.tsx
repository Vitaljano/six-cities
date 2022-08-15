import { useState } from 'react';

import Card from '../card/card';
import { Offer } from '../../types/offer';

type Props = {
  offers: Array<Offer>;
};

export function PlaceList({ offers }: Props) {
  const [activeCard, setActiveCard] = useState('');

  function handleOnHover() {
    setActiveCard(activeCard + 1);
  }

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((item) => (
        <Card key={item.id} offer={item} onHoverHandler={handleOnHover} />
      ))}
    </div>
  );
}
