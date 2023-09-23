
const Attribute = ({ title, body }) => {
  return (
    <p className="text-sm">
        <span className="text-[#ff26b9] font-semibold text-base">{title || "Innovation and Creativity: "}</span>
        {body || "Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a real-world problem in a novel way or introduces innovative features."}
    </p>
  )
}

export default Attribute