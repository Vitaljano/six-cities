export enum AppRoute {
  notFound = '*',
  home = '/',
  login = '/login',
  favorites = '/favorites',
  offer = '/offer/:offerId',
}

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
