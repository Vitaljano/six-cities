import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Main from '../main/main';
import Room from '../room/room';
import NotFound from '../not-found/not-found';
import { Offer } from '../../types/offer';

type Props = {
  offers: Array<Offer>;
};

function App({ offers }: Props): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.home} element={<Main offers={offers} />} />
        <Route path={AppRoute.login} element={<Login />} />
        <Route path={AppRoute.favorites} element={<Favorites />} />
        <Route path={AppRoute.offer} element={<Room />} />
        <Route path={AppRoute.notFound} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
