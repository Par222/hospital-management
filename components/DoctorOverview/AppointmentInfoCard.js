import Card from "../common/Card";

function AppointmentInfoCard(props){
    return(
        <div className = {`my-4 ${props.className}`}>
            <div className = "flex justify-between items-center">
                <h3 className = "mb-2 font-bold">{props.header}</h3>
                {props.action}
            </div>
            <Card>
                {props.children}
            </Card>
        </div>
    )
}

export default AppointmentInfoCard;