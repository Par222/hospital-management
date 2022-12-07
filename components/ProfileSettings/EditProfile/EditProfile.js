import { useContext } from "react";
import DoctorContext from "../../../store/Doctor/doctor-context";
import Input from "../../common/Input";
import useInput from "../../../hooks/use-input";
import EditList from "./EditList";
import { useState } from "react";
import ImageUpload from "./ImageUpload";
import { storage } from "../../../firebase/firebase";
import {
  getDownloadURL,
  ref,
  deleteObject,
  uploadBytes,
} from "firebase/storage";
import { useEffect } from "react";

function EditProfile(props) {
  const doctorCtx = useContext(DoctorContext);
  const doctorDetails = doctorCtx?.doctorDetails;

  const phoneNumberInput = useInput("8779221172", (phoneNumber) => {
    return phoneNumber.length === 10;
  });

  const addressInput = useInput("this is my address", (address) => {
    return address.length > 0;
  });

  const [educationInput, setEducationInput] = useState(
    doctorDetails?.education || []
  );
  const [expertiseInput, setExpertiseInput] = useState([
    "Heart",
    "Skin",
    "ENT",
  ]);
  const [descriptionInput, setDescriptionInput] = useState(doctorDetails?.des);
  const [profileImageInput, setProfileImageInput] = useState(
    doctorDetails?.image
  );
  const [formHasError, setFormHasError] = useState(false);

  const educationInputChangeHandler = (education) => {
    setEducationInput(education);
  };

  const expertiseInputChangeHandler = (expertise) => {
    setExpertiseInput(expertise);
  };

  const descriptionInputChangeHandler = (event) => {
    setDescriptionInput(event.target.value);
  };

  const profileImageChangeInputHandler = (image) => {
    setProfileImageInput(image);
  };

  const profileImageInputResetHandler = () => {
    setProfileImageInput(doctorDetails?.image);
  };

  const getImageURL = async (image) => {
    try {
      const imageRef = ref(
        storage,
        `${doctorDetails?.id}/profile_image/${image?.name}`
      );
      const imageUploadResponse = await uploadBytes(imageRef, image);
      const imageDownloadResponse = await getDownloadURL(imageRef);
      return imageDownloadResponse;
    } catch (error) {
      console.log(error);
    }
  };

  const formsubmitFormHandler = async (event) => {
    event.preventDefault();
    const profileImageInputHasError = !profileImageInput;
    const educationInputHasError = educationInput?.length === 0;
    const expertiseInputHasError = expertiseInput?.length === 0;

    if (!formHasError) {
      let profileImageURL;
      if (profileImageInput != doctorDetails?.image) {
        profileImageURL = await getImageURL(profileImageInput);
        let fileRef;
        if (doctorDetails?.image) {
          fileRef = ref(storage, doctorDetails?.image);
        }
        if (fileRef) {
          const deletedResponse = await deleteObject(fileRef);
        }
      }
      const newDoctor = {
        ...doctorDetails,
        image: profileImageURL || profileImageInput,
        // phone: phoneNumberInput,
        // address: addressInput,
        // expertise: expertiseInput,
        education: educationInput,
      };
      doctorCtx?.onUpdateDoctor(newDoctor);
    }
  };

  useEffect(() => {
    const profileImageInputHasError = !profileImageInput;
    const educationInputHasError = educationInput?.length === 0;
    const expertiseInputHasError = expertiseInput?.length === 0;

    setFormHasError(
      profileImageInputHasError &&
        addressInput.inputHasError &&
        phoneNumberInput.inputHasError &&
        educationInputHasError &&
        expertiseInputHasError
    );
  }, [
    profileImageInput,
    educationInput,
    expertiseInput,
    addressInput,
    phoneNumberInput,
  ]);

  return (
    <form className="flex space-x-10" onSubmit={formsubmitFormHandler}>
      <div className="flex flex-col space-y-6 w-[70%] flex-shrink-0">
        <Input
          input={{
            id: "phone_number",
            type: "text",
            value: phoneNumberInput?.enteredValue,
            placeholder: "Enter your phone number",
            onChange: phoneNumberInput?.valueChangeHandler,
            onBlur: phoneNumberInput?.inputBlurHandler,
          }}
          label="Phone Number"
        />
        <Input
          input={{
            id: "address",
            type: "text",
            value: addressInput?.enteredValue,
            placeholder: "Enter your address",
            onChange: addressInput?.valueChangeHandler,
            onBlur: addressInput?.inputBlurHandler,
          }}
          label="Address"
        />
        <EditList
          items={educationInput}
          onEdit={educationInputChangeHandler}
          label="Education"
        />
        <EditList
          items={expertiseInput}
          onEdit={expertiseInputChangeHandler}
          label="Expertise"
        />
        <div className="flex flex-col space-y-2">
          <label
            className="text-base font-normal text-tertiarygrey-400 font-title"
            htmlFor="description"
          >
            About Me
          </label>
          <textarea
            className="text-sm bg-tertiarywhite-100 border border-tertiarygrey-350 focus:outline-none rounded-lg w-full p-2.5"
            onChange={descriptionInputChangeHandler}
            id="description"
          >
            {descriptionInput}
          </textarea>
        </div>
        <div className="flex items-center space-x-3">
          <button
            type="submit"
            disabled={formHasError}
            className={`px-4 py-2 rounded-md text-white ${
              !formHasError ? "bg-indigo-700" : "bg-slate-500"
            }`}
          >
            Update
          </button>
          <button
            type="button"
            className={`px-4 py-2 rounded-md text-white bg-red-600`}
          >
            Reset
          </button>
        </div>
      </div>
      <ImageUpload
        className="h-[400px]"
        imageDimensions="h-full w-full"
        image={profileImageInput}
        defaultImage={doctorDetails?.image}
        onUpload={profileImageChangeInputHandler}
        onReset={profileImageInputResetHandler}
        acceptExtension="image/*"
        enableReset={true}
      />
    </form>
  );
}

export default EditProfile;
