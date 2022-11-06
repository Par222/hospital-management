import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheckSquare, faXmarkSquare} from "@fortawesome/free-solid-svg-icons"

function AppointmentDetailsListItem(props){
    let confirmationStatusDiv = "";
    if(props?.status === "Confirmed"){
        confirmationStatusDiv = <div className = "text-[11px] text-[#9290e9] bg-[#e9f6fe] rounded font-bold w-[19%] text-center p-[6px] m-2">Confirmed</div>
    }
    else if(props?.status === "Pending"){
        confirmationStatusDiv = <div className = "flex m-2 justify-center w-[19%]">
            <button className = "text-[20px] mr-1 text-[#9290e9]" onClick = {() =>{
                props.onConfirmAppointment(props.id);
            }}>
                <FontAwesomeIcon icon = {faCheckSquare} />
            </button>
            <button className = "text-[20px] ml-1 text-[#eb6c76]" onClick = {() =>{
                props.onDeclineAppointment(props.id);
            }}>
                <FontAwesomeIcon icon = {faXmarkSquare} />
            </button>
        </div>
    }
    else{
        confirmationStatusDiv = <div className = "text-[11px] text-[#eb6c76] bg-[#feeeef] rounded font-bold w-[19%] text-center p-[6px] m-2">Declined</div>
    }
    
    return(
        <li className = "flex items-center p-2 py-1">
            <div className = "rounded-full bg-gray-400 h-[45px] w-[45px] m-2">
                <img className = "h-[100%] w-[100%] rounded-full object-cover object-center" src = {props.profilePicture || "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg"} />
            </div>
            <div className = "m-2 mr-6 flex-grow">
                <p className = "text-[13px] font-semibold">{props.name}</p>
                <p className = "text-[13px] text-gray-400">{`${props.gender}, ${props.date}, ${props.time}`}</p>
            </div>
            {confirmationStatusDiv}
        </li>
    )
}

export default AppointmentDetailsListItem;