import { useEffect, useState } from "react";
import DoctorCard from "./DoctorCard";
export const DUMMY_DOCTORS = [
  {
    id: 1,
    name: "DR. Bruno Rodrigeous",
    expertise: "Skin",
    age: 44,
    des: "Specialized dermatologist for various types of skin diseases.Dermatologists are medical doctors who specialize in skin, hair and nails. Dermatologists also handle cosmetic disorders, like hair loss and scars. Your dermatologist will examine you, order lab tests, make a diagnosis and treat your condition with medication or a procedure",
    img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
    fees: 1000,
    appointments: [
      {
        patientId: null,
        slot_id: 1,
        slot_start_time: "9.00 AM",
        slot_end_time: "10.00 AM",
      },
    ],
    certificates: [
      "https://i.pinimg.com/736x/05/ca/00/05ca0060115008c65dc3193f0ba4ecac--basket-weaving-masters-degree.jpg",
      "https://i.pinimg.com/originals/47/6c/58/476c5863628dd3299857d7f2868af15b.png",
      "https://cdn.shopify.com/s/files/1/1699/4809/products/match-College-university-diploma-sameday-diploma_76de7c9b-ee91-4d58-98fe-ec46cc99212a_530x@2x.jpg?v=1535484555"
      
    ]
  },
  {
    id: 2,
    name: "DR. Beena Cheedha",
    expertise: "Heart",
    age: 32,
    des: "Specialized in operations of eyes,nose ,throat",
    img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    fees: 2000,
    appointments: [
      {
        patientId: null,
        slot_id: 1,
        slot_start_time: "9.00 AM",
        slot_end_time: "10.00 AM",
      },
    ],
    certificates: [
        "https://images.template.net/694/880.jpg",
        "https://i.pinimg.com/736x/05/ca/00/05ca0060115008c65dc3193f0ba4ecac--basket-weaving-masters-degree.jpg",
        
      ]
  },
  {
    id: 3,
    name: "DR. Niket Motwani",
    expertise: "Eyes",
    age: 42,
    des: "Specialized in operations of eyes.",
    img: "https://as1.ftcdn.net/v2/jpg/02/60/04/08/1000_F_260040863_fYxB1SnrzgJ9AOkcT0hoe7IEFtsPiHAD.jpg",
    fees: 2000,
    appointments: [
      {
        patientId: null,
        slot_id: 1,
        slot_start_time: "9.00 AM",
        slot_end_time: "10.00 AM",
      },
    ],
    certificates: [
        "https://images.template.net/694/880.jpg",
        ,
        "https://i.pinimg.com/736x/05/ca/00/05ca0060115008c65dc3193f0ba4ecac--basket-weaving-masters-degree.jpg",
        
      ]
  },
  {
    id: 4,
    name: "DR. Kirit Kapadia",
    expertise: "Tooth",
    age: 33,
    des: "Specialized dentist in all issues concerning teeth",
    img: "https://as2.ftcdn.net/v2/jpg/02/71/27/05/1000_F_271270515_h430bOQYBpPIXZXELDhk5GMjAabEGmAo.jpg",
    fees: 500,
    appointments: [
      {
        patientId: null,
        slot_id: 1,
        slot_start_time: "9.00 AM",
        slot_end_time: "10.00 AM",
      },
    ],
    certificates: [
        "https://images.template.net/694/880.jpg",
        "https://i.pinimg.com/736x/05/ca/00/05ca0060115008c65dc3193f0ba4ecac--basket-weaving-masters-degree.jpg",
        
      ]
  },
  {
    id: 5,
    name: "DR. Ramika Sen",
    expertise: "Brain",
    age: 44,
    des: "Specialized in all concerns regarding the stomach",
    img: "https://as1.ftcdn.net/v2/jpg/02/91/43/02/1000_F_291430206_U1vohsIJWJvF3wb1a3uxfYLPCfXMRbum.jpg",
    fees: 1000,
    appointments: [
      {
        patientId: null,
        slot_id: 1,
        slot_start_time: "9.00 AM",
        slot_end_time: "10.00 AM",
      },
    ],
    certificates: [
        "https://images.template.net/694/880.jpg",
        "https://i.pinimg.com/736x/05/ca/00/05ca0060115008c65dc3193f0ba4ecac--basket-weaving-masters-degree.jpg",

        
      ]
  },
];
const DoctorList = ({ fees, type }) => {
  let [filteredArray, setFilteredArray] = useState(DUMMY_DOCTORS);
  /*useEffect(() => {
    console.log(filteredArray, fees, type);
    if (fees == "any" && type == "all") setFilteredArray(DUMMY_DOCTORS);
    else if (fees == "any" && type != "all") {
      setFilteredArray(
        DUMMY_DOCTORS.filter((doc) => doc.category.toLowerCase() == type)
      );
    } else if (type == "all" && fees != "any") {
      setFilteredArray(DUMMY_DOCTORS.filter((doc) => doc.fees <= +fees));
    } else {
      setFilteredArray(
        DUMMY_DOCTORS.filter(
          (doc) => doc.category.toLowerCase() == type && doc.fees <= +fees
        )
      );
    }
  }, [fees, type]);*/

  const docList = filteredArray.map((doc) => (
    <DoctorCard {...doc}></DoctorCard>
  ));
  return (
    <>
      <div className="grid grid-cols-3 w-[80%] my-5 mx-20">
        {docList.length > 0 && docList}
      </div>
      {docList.length == 0 && (
        <p className="flex justify-center items-center text-2xl font-bold w-full mt-20 text-center">
          No Doctors Available for given Filter
        </p>
      )}
    </>
  );
};
export default DoctorList;
