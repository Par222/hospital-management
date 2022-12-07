function DoctorDetails(props) {
  const educationDetails = props?.education?.map((item, index) => {
    return (
      <li key={index} className="break-words">
        {item}
      </li>
    );
  });

  return (
    <div className="w-[35%] flex flex-col space-y-10 flex-shrink-0">
      <div className="flex flex-col space-y-3">
        <h2 className="font-semibold text-lg border-b border-b-gray-300 pb-1">
          About Me
        </h2>
        <div className="text-base">{props?.aboutMe}</div>
      </div>
      <div className="flex flex-col space-y-3">
        <h2 className="font-semibold text-lg border-b border-b-gray-300 pb-1">
          Education
        </h2>
        <ul className="list-disc ml-4 text-base">{educationDetails}</ul>
      </div>
      <div className="flex flex-col space-y-3">
        <h2 className="font-semibold text-lg border-b border-b-gray-300 pb-1">
          Contact
        </h2>
        <div className="text-base text-gray-500">
          <p className="italic">{props?.email}</p>
          <p className="">{props?.phone || "+91 8779221172"}</p>
        </div>
      </div>
    </div>
  );
}

export default DoctorDetails;
