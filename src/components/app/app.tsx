import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Main from '../main/main';
import Room from '../room/room';
import NotFound from '../not-found/not-found';

type ItemsSuggestCount = {
  itemsCount: number;
};

function App({ itemsCount }: ItemsSuggestCount): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.home} element={<Main itemsCount={7} />} />
        <Route path={AppRoute.login} element={<Login />} />
        <Route path={AppRoute.favorites} element={<Favorites />} />
        <Route path={AppRoute.offer} element={<Room />} />
        <Route path={AppRoute.notFound} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
