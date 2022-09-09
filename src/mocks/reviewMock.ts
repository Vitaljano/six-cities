import { v4 as uuidv4 } from 'uuid';
import { User } from '../types/user';

export type Review = {
  comment: string;
  date: string;
  id: string;
  rating: number;
  user: User;
};

export const reviewMock: Array<Review> = [
  {
    comment:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    date: '2019-05-08T14:13:56.569Z',
    id: uuidv4(),
    rating: 4,
    user: {
      avatarUrl: 'img/1.png',
      id: uuidv4(),
      isPro: false,
      name: 'Max',
    },
  },
  {
    comment:
      'The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold',
    date: '2019-05-08T14:13:56.569Z',
    id: uuidv4(),
    rating: 2,
    user: {
      avatarUrl: 'img/1.png',
      id: uuidv4(),
      isPro: false,
      name: 'Robert',
    },
  },
  {
    comment:
      'Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy',
    date: '2019-05-08T14:13:56.569Z',
    id: uuidv4(),
    rating: 5,
    user: {
      avatarUrl: 'img/1.png',
      id: uuidv4(),
      isPro: false,
      name: 'Edvin',
    },
  },
  {
    comment:
      'Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy',
    date: '2019-05-08T14:13:56.569Z',
    id: uuidv4(),
    rating: 3,
    user: {
      avatarUrl: 'img/1.png',
      id: uuidv4(),
      isPro: false,
      name: 'Justinas',
    },
  },
];
