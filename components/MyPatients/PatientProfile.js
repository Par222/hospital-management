import Card from "../common/Card";
import ProfilePicture from "../common/ProfilePicture";

function PatientProfile(props) {
  return (
    <Card className="p-4 w-[30%] flex flex-col iteems-center">
      <div className="space-y-3 border-b-1 border-gray-300 flex flex-col items-center">
        <ProfilePicture profilePicture="" className="w-[85px] h-[85px]" />
        <p className="font-medium font-title text-base">Param Kothari</p>
        <p className="text-sm font-display text-gray-400">20 Years, Male</p>
      </div>
      <div clas>
        
      </div>
    </Card>
  );
}

export default PatientProfile;
