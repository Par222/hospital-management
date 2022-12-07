import DoctorContext from "../../../store/Doctor/doctor-context";
import { useContext, useState, useEffect } from "react";
import CertificateList from "./CertificateList";
import ImageUpload from "../EditProfile/ImageUpload";
import { storage } from "../../../firebase/firebase";
import {
  getDownloadURL,
  ref,
  deleteObject,
  uploadBytes,
  getMetadata,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

function Certificates(props) {
  const doctorCtx = useContext(DoctorContext);
  const doctorDetails = doctorCtx?.doctorDetails;

  const [certificatesList, setCertificatesList] = useState([]);
  const [newCertificate, setNewCertificate] = useState("");
  const [previewCertificate, setPreviewCertificate] = useState(null);

  const getFileMetadata = async () => {
    const tempList = [];
    if (doctorDetails?.certificates?.length > 0) {
      for (let file of doctorDetails?.certificates) {
        try {
          const fileRef = ref(storage, file);
          const fileMetaData = await getMetadata(fileRef);
          const tempData = {
            certificate: file,
            uploadedOn: fileMetaData?.timeCreated,
            fileName: fileMetaData?.name,
            id: uuidv4(),
          };
          tempList.push(tempData);
        } catch (error) {
          console.log(error);
        }
      }
      setCertificatesList(tempList);
    }
  };

  const newCertificateChangeHandler = (certificate) => {
    setNewCertificate(certificate);
  };

  const resetCertificateHandler = () => {
    setNewCertificate(previewCertificate?.certificate);
  };

  const deleteCertificateHandler = async () => {
    try {
      const fileRef = ref(storage, previewCertificate?.certificate);
      const deletedResponse = await deleteObject(fileRef);
      const tempList = certificatesList?.filter((certificate) => {
        return certificate?.id != previewCertificate?.id;
      });
      const finalList = tempList?.map((certificate) => {
        return certificate?.certificate;
      });
      const newDoctor = {
        ...doctorDetails,
        certificates: finalList,
      };
      doctorCtx?.onUpdateDoctor(newDoctor);
      setPreviewCertificate(null);
      setNewCertificate("");
    } catch (error) {
      console.log(error);
    }
  };

  const getImageURL = async (image) => {
    try {
      const imageRef = ref(
        storage,
        `${doctorDetails?.id}/certificates/${image?.name}`
      );
      const imageUploadResponse = await uploadBytes(imageRef, image);
      const imageDownloadResponse = await getDownloadURL(imageRef);
      return imageDownloadResponse;
    } catch (error) {
      console.log(error);
    }
  };

  const uploadCertificateHandler = async () => {
    try {
      const imageURL = await getImageURL(newCertificate);
      const finalList = certificatesList?.map((certificate) => {
        return certificate?.certificate;
      });
      finalList.push(imageURL);
      const newDoctor = {
        ...doctorDetails,
        certificates: finalList,
      };
      doctorCtx?.onUpdateDoctor(newDoctor);
      setPreviewCertificate(null);
      setNewCertificate("");
    } catch (error) {
      console.log(error);
    }
  };

  const previewCertificateChangeHandler = (id) => {
    const tempCertificate = certificatesList?.filter((certificate) => {
      return certificate?.id === id;
    })[0];
    setPreviewCertificate(tempCertificate);
    setNewCertificate(tempCertificate?.certificate);
  };

  const hidePreviewImageHandler = () => {
    setPreviewCertificate(null);
    setNewCertificate("");
  };

  useEffect(() => {
    getFileMetadata();
  }, [doctorCtx?.doctorDetails?.certificates]);

  return (
    <div className="flex space-x-8">
      <div className="flex flex-col w-[65%] h-[500px] flex-shrink-0 relative">
        <ImageUpload
          onUpload={newCertificateChangeHandler}
          enableReset={true}
          enableDelete={true}
          defaultImage={previewCertificate?.certificate || ""}
          image={newCertificate}
          onReset={resetCertificateHandler}
          onDelete={deleteCertificateHandler}
          className="h-full w-full flex-shrink-0 space-y-8"
          imageDimensions="max-h-[400px] max-w-full object-contain object-center"
          uploadBoxDimensions="h-[400px] w-full flex-shrink-0 space-y-10"
        />
        <button
          type="button"
          onClick={uploadCertificateHandler}
          disabled={
            !newCertificate || newCertificate == previewCertificate?.certificate
          }
          className={`absolute bottom-0 right-0 px-4 py-2 w-[fit-content] rounded-md text-white ${
            newCertificate &&
            !(newCertificate == previewCertificate?.certificate)
              ? "bg-indigo-700"
              : "bg-slate-500"
          }`}
        >
          Upload
        </button>
      </div>
      <CertificateList
        certificates={certificatesList}
        onClickCertificate={previewCertificateChangeHandler}
        onHidePreviewImage={hidePreviewImageHandler}
      />
    </div>
  );
}

export default Certificates;
