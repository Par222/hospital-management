function ExpertiseTag(props) {
  return (
    <div className="bg-gray-300 text-sm font-display rounded-lg py-1 px-3 w-[fit-content] ml-2">
      {props?.expertise}
    </div>
  )
}

export default ExpertiseTag;