import { Review } from '../../types/types';
import ReviewComponent from '../review/review';

type Props = {
  reviews: Array<Review>;
};
export default function ReviewList({ reviews }: Props): JSX.Element {
  const reviewsCount = reviews.length;
  return (
    <>
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{reviewsCount}</span>
      </h2>
      <ul className="reviews__list">
        {reviews.map((item) => (
          <ReviewComponent review={item} key={item.id} />
        ))}
      </ul>
    </>
  );
}
