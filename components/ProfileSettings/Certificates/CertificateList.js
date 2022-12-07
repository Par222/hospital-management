import moment from "moment";
import { useEffect } from "react";
import { useRef } from "react";
import CertificateListItem from "./CertificateListItem";

function CertificateList(props) {
  const certificateListRef = useRef();

  const detectClickHandler = (event) => {
    if (!event.path.includes(certificateListRef.current)) {
      props?.onHidePreviewImage();
    }
  };

  const certificateList = props?.certificates?.map((certificate) => {
    return (
      <CertificateListItem
        key={certificate?.id}
        id={certificate?.id}
        uploadedOn={moment(new Date(certificate?.uploadedOn)).fromNow()}
        certificate={certificate?.certificate}
        fileName={certificate?.fileName}
        onClickCertificate={props?.onClickCertificate}
      />
    );
  });

  useEffect(() => {
    document.addEventListener("click", detectClickHandler);
  }, []);

  return (
    <div ref={certificateListRef} className="max-h-[500px] overflow-y-auto">
      {certificateList}
    </div>
  );
}

export default CertificateList;
