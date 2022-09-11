export type City = {
  title: string;
  lat: number;
  lng: number;
  zoom: number;
};

export type Point = {
  title: string;
  lat: number;
  lng: number;
};

export type Points = Point[];

export type User = {
  avatarUrl: string;
  id: string;
  isPro: boolean;
  name: string;
};

export type Review = {
  comment: string;
  date: Date;
  id: string;
  rating: number;
  user: User;
};
