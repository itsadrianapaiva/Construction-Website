import Button from "./Button";
import { useRef, useState } from "react";


interface FormProps {
  className?: string;
  title?: string;
  text?: string;
}

const ContactForm: React.FC<FormProps> = ({ className, title, text }) => {
  return (
    <section className={` ${className} container`}>
        {title && <h3 className="h3">{title}</h3>}
        {text && <p className="body-2 mt-4 text-n-4">{text}</p>}

      <form action="" onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
        <div className="input-box">
          <label>Full Name</label>
          <input type="text" className="field" placeholder="John Doe" required/>
        </div>
        <div className="input-box">
          <label>Email</label>
          <input type="email" className="field" placeholder="johndoe@example.com" required/>
        </div>
        <div className="input-box">
          <label>Phone Number</label>
          <input type="number" className="field" placeholder="(123)456-789" required/>
        </div>
        <div className="input-box">
          <label>Street Address</label>
          <input type="text" className="field" placeholder="123 Main Street" required/>
        </div>
        <div className="input-box">
          <label>City</label>
          <input type="text" className="field" placeholder="Toronto" required/>
        </div>
        <div className="input-box">
          <label>State/Region</label>
          <input type="text" className="field" placeholder="Ontario" required/>
        </div>
        <div className="input-box">
          <label>Postal Code</label>
          <input type="text" className="field" placeholder="A1A 1A1" required/>
        </div>
        <div className="input-box">
          <label>How did you hear about us?</label>
          <input type="dropdown" className="field" placeholder="John Doe" required/>
        </div>
        <div className="input-box">
          <label>Project Type</label>
          <input type="dropdown" className="field" placeholder="John Doe" required/>
        </div>
        <div className="input-box">
          <label>Project Description</label>
          <legend>Include goals/visios, specific requests, budget, timeline and contact preference.</legend>
          <textarea className="field" placeholder="I’m looking to remodel my kitchen to create a modern, open-concept space. I’d like to replace the cabinets, countertops, and flooring, and add a kitchen island with seating. I’m also interested in updating the lighting fixtures and installing new appliances. My budget is $30,000–$40,000, and I’d like the project completed within the next three months. I’m available to discuss further details during weekdays after 5 PM." required/>
        </div>
        
        <Button>Submit</Button>
      </form>
    </section>
  );
};

export default ContactForm;
