import Router from "next/router";
import { DUMMY_DOCTORS } from "../../components/doctor/DoctorList";
import { useRouter } from "next/router";
import DoctorDetails from "../../components/doctor/DoctorDetails";
import NavBar from "../../components/common/NavBar";
const Slug=()=>{
    const id=useRouter().query.slug
    const doctor=DUMMY_DOCTORS.find((doc)=>doc.id==id)
    return(<>
     <NavBar></NavBar>
      <DoctorDetails {...doctor}></DoctorDetails>
    </>
    )
}
export default Slug;