import { Card } from "@mui/material";
import ProfilePicture from "../../common/ProfilePicture";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function ReviewListItem(props) {
  const stars = [];

  for (let i = 1; i <= props?.rating; i++) {
    stars.push(<FontAwesomeIcon icon={faStar} className="text-yellow-400" />);
  }

  for (let i = props?.rating + 1; i <= 5; i++) {
    stars.push(<FontAwesomeIcon icon={faStar} className="text-gray-400" />);
  }

  return (
    <Card className="py-4 px-5 flex flex-col space-y-3">
      <div className="flex justify-between items-center">
        <div className="flex space-x-3 items-center">
          <ProfilePicture
            profilePicture={props?.profilePicture}
            className="h-[45px] w-[45px]"
          />
          <h2 className="font-semibold text-base">{props?.name}</h2>
        </div>
        <div className="text-sm">
          <div className="space-x-1">{stars}</div>
          <div className="text-gray-400">{props?.postedOn}</div>
        </div>
      </div>
      <div className="text-sm font-title">{props?.review}</div>
    </Card>
  );
}

export default ReviewListItem;
