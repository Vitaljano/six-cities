import { v4 as uuidv4 } from 'uuid';
import { Offer } from '../types/offer';

export const offers: Array<Offer> = [
  {
    id: uuidv4(),
    title: 'Beautiful Location',
    rating: 4.8,
    type: 'Apartment',
    romCount: 4,
    maxAdults: 4,
    image: '/img/apartment-01.jpg',
    addition: [
      'Wi-fi',
      'Washing machine',
      'Towels',
      'Baby seat',
      'Cabel TV ',
      'Fridge',
      'Kitchen',
      'Heating',
    ],
    host: 'Angelina',
    hostComment:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
  },
  {
    id: uuidv4(),
    title: 'Apartment in Amsterdam',
    rating: 4.8,
    type: 'Apartment',
    romCount: 4,
    maxAdults: 4,
    image: '/img/apartment-01.jpg',
    addition: [
      'Wi-fi',
      'Washing machine',
      'Towels',
      'Baby seat',
      'Cabel TV ',
      'Fridge',
      'Kitchen',
      'Heating',
    ],
    host: 'Angelina',
    hostComment:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
  },
  {
    id: uuidv4(),
    title: 'Beautiful & luxurious studio at great location',
    rating: 4.8,
    type: 'Apartment',
    romCount: 4,
    maxAdults: 4,
    image: '/img/apartment-01.jpg',
    addition: [
      'Wi-fi',
      'Washing machine',
      'Towels',
      'Baby seat',
      'Cabel TV ',
      'Fridge',
      'Kitchen',
      'Heating',
    ],
    host: 'Angelina',
    hostComment:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
  },
];
