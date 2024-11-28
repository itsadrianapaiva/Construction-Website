import loading1 from "../assets/loading1.svg";


const Generating: React.FC<{ className: string}> = ({ className }) => {
  return (
    <div className={`flex items-center h-[3.5rem] px-6 bg-n-1/80 rounded-[1.7rem] ${className || ""} text-base text-n-7`}>
      <img
      className="w-5 h-5 mr-4"
      src={loading1}
      alt="Loading" />
      Dream home is generating
    </div>
  )
}

export default Generating;
