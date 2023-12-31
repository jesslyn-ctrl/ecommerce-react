import PropTypes from "prop-types";

const RatingStars = ({ rating }) => {
  const rate = rating.rate;

  const filledStars = Math.floor(rate);
  const hasHalfStar = rate % 1 !== 0;
  const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {/* Create image elements for full star */}
      {Array.from({ length: filledStars }, (_, index) => (
        <img
          key={`full-star-${index}`}
          src="/images/star.svg"
          alt="full-star"
          className="h-4 w-4"
        />
      ))}

      {/* Create the image element for the half star if applicable */}
      {hasHalfStar && (
        <img src="/images/half-star.svg" alt="half-star" className="h-4 w-4" />
      )}

      {/* Create image elements for empty star */}
      {Array.from({ length: emptyStars }, (_, index) => (
        <img
          key={`empty-star-${index}`}
          src="/images/empty-star.svg"
          alt="empty-star"
          className="h-4 w-4"
        />
      ))}

      {/* Rating count */}
      <p className="text-sm text-gray-400">
        ({rating.count.toString()} Reviews)
      </p>
    </div>
  );
};

RatingStars.propTypes = {
  rating: PropTypes.shape({
    rate: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired,
};

export default RatingStars;
