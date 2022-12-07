import { Card } from "@mui/material";
import ExpertiseTag from "./ExpertiseTag";

function ProfileCard(props) {
  const expertise = ["Heart", "Skin", "ENT"];

  const expertiseTags = expertise?.map((expertise, index) => {
    return <ExpertiseTag key={index} expertise={expertise} />;
  });

  return (
    <Card className="w-[20%] flex flex-col flex-shrink-0 h-[fit-content]">
      <div className="space-y-4">
        <img src={props?.image} className="w-full h-[300px] object-cover object-center" />
        <h2 className="font-title font-semibold text-base text-center">{props?.name}</h2>
      </div>
      <div className="flex flex-col space-y-2 font-title p-4 pb-6">
        <div className="text-sm">
          <div className="text-gray-400">Age</div>
          <div className="font-medium">{`${props?.age} years`}</div>
        </div>
        <div className="text-sm">
          <div className="text-gray-400">Gender</div>
          <div className="font-medium">{`${props?.gender || "Male"}`}</div>
        </div>
        <div className="text-sm space-y-1">
          <div className="text-gray-400">Expertise</div>
          <div className="font-medium flex -ml-2">{expertiseTags}</div>
        </div>
      </div>
    </Card>
  );
}

export default ProfileCard;
