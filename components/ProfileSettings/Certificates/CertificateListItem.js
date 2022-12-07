function CertificateListItem(props) {
  const clickHandler = () => {
    props?.onClickCertificate(props?.id);
  };
  
  return (
    <div
      className="flex p-4 space-x-4 h-[150px] hover:bg-indigo-100 cursor-pointer"
      onClick={clickHandler}
    >
      <div className="w-[50%] h-full flex-shrink-0 bg-gray-300 flex justify-center">
        <img
          src={props?.certificate}
          className="max-h-full object-contain object-center"
        />
      </div>
      <div className="text-sm font-title">
        <p className="font-medium">{props?.fileName}</p>
        <p className="text-gray-400">{props?.uploadedOn}</p>
      </div>
    </div>
  );
}

export default CertificateListItem;
