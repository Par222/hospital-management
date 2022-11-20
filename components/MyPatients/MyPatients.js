

function MyPatients() {
  const patientListItems=[];
  return (
    <div className="w-full space-y-5">
      <h2 className="text-xl font-semibold font-title py-2 border-b-2 border-indigo-500 w-[50%]">
        Medical History
      </h2>
      <div className="space-y-3">
        <div className="flex py-3 px-6 space-x-5 text-base font-semibold font-display bg-white rounded-md w-[98.5%]">
          <div className="w-[10%]">Date</div>
          <div className="w-[25%]">Illness</div>
          <div className="w-[40%]">Description</div>
          <div className="w-[10%] text-center">Report</div>
        </div>
        <ul className="space-y-3 max-h-[370px] overflow-y-scroll">
          {medicalHistoryItems}
        </ul>
      </div>
    </div>
  );
}

export default MyPatients;
