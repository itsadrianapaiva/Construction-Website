import { HeadingProps } from "../types/components";
import Tagline from "./Tagline";


const Heading: React.FC<HeadingProps> = ({ className, title, text, tag }) => {
  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}>
      {tag && <Tagline className="mb-4 justify-center"> {tag} </Tagline>}
      {title && <h3 className="h3">{title}</h3>}
      {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
    </div>
  )
}

export default Heading;
