const Card=(props)=>{
    return(
        <div className={`bg-white rounded-lg shadow-md w-[100%] h-[100%] flex box-border ${props.className}`}>
        {props.children}
        </div>
    )
}
export default Card;