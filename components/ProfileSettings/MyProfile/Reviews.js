import ReviewListItem from "./ReviewListItem";

const DUMMY_REVIEWS = [
  {
    id: 1,
    name: "Param Kothari",
    profilePicture: "",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
    postedOn: "18 Jun, 2022",
    rating: 4,
  },
  {
    id: 2,
    name: "Param Kothari",
    profilePicture: "",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
    postedOn: "18 Jun, 2022",
    rating: 2,
  },
  {
    id: 3,
    name: "Param Kothari",
    profilePicture: "",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
    postedOn: "18 Jun, 2022",
    rating: 0,
  },
  {
    id: 4,
    name: "Param Kothari",
    profilePicture: "",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
    postedOn: "18 Jun, 2022",
    rating: 5,
  },
  {
    id: 5,
    name: "Param Kothari",
    profilePicture: "",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
    postedOn: "18 Jun, 2022",
    rating: 3,
  },
  {
    id: 6,
    name: "Param Kothari",
    profilePicture: "",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.",
    postedOn: "18 Jun, 2022",
    rating: 1,
  },
];

function Reviews(props) {
  const reviews = DUMMY_REVIEWS.map((review) => {
    return (
      <ReviewListItem
        key={review?.id}
        name={review?.name}
        profilePicture={review?.profilePicture}
        review={review?.review}
        postedOn={review?.postedOn}
        rating={review?.rating}
      />
    );
  });

  return (
    <div className="flex-grow space-y-5">
      <h2 className="text-lg font-semibold">Reviews</h2>
      <div className="space-y-3">{reviews}</div>
    </div>
  )
}

export default Reviews;
