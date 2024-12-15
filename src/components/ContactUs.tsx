import { check } from "../assets";
import { whatToExpect } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import living_room from "../assets/living_room.jpg";
import toronto from "../assets/toronto.jpg";
import { Gradient, VideoChatMessage } from "./design/Services";
import ContactForm from "./ContactForm";
import MapComponent from "./Map";
import phone1 from "../assets/phone1.svg";
import mail1 from "../assets/mail1.svg";

const ContactUs: React.FC = () => {
  return (
    <Section id="contactUs" crosses>
      <div className="container">
        <Heading
          className="text-center"
          title="Contact us today"
          text="We would love to hear more about your project and how we can turn your vision into a reality."
        />

        <div className="relative">
          <div className="relative z-1 flex flex-col items-center h-auto mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden sm:flex-wrap lg:p-20 xl:h-[65rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none xl:w-auto">
              <img
                src={living_room}
                className="h-full w-full object-cover opacity-15"
                width={730}
                height={850}
                alt="Living room"
                loading="lazy"
              />
            </div>

            <div className="relative z-1 xl:max-w-[25rem]">
              <h4 className="h4 mb-4">What to expect </h4>
              <p className="body-2 mb-[3rem] text-n-3">
                We’ve completed hundreds of remodeling projects successfully and
                we’ve got it down to a science. Here’s what we’ll discuss at
                your consultation:
              </p>

              <ul className="body-2 mb-[3rem]">
                {whatToExpect.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} loading="lazy" />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="xl:max-w-[38rem] h-[65rem] flex flex-col xl:h-[72rem]">
              <p className="body-2 text-n-3">
                We want to know all about your project and how we can better
                serve you.
                <br />
                Please fill out the form below and describe what you have in
                mind for your home renovation.
              </p>

              <ContactForm />
            </div>
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative h-[30rem] border border-n-1/10 rounded-3xl overflow-hidden hidden md:block lg:block">
              <div className="absolute inset-0">
                <MapComponent />
              </div>
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[26rem]">
              <h4 className="h4 mb-4 px-8 py-4">Or you can call us directly</h4>
              <div className="flex flex-row flex-wrap gap-4 justify-between items-center ml-4 pb-10 px-4 xl:px-8">
                <div className="flex flex-col mb-8 lg:mb-0">
                  <p className="font-bold text-n-2 mb-1">Gus Paiva</p>
                  <div className="flex items-center justify-start">
                    <img src={phone1} width={18} height={18} />
                    <p className="text-n-3 pl-1">(437) 448-4788</p>
                  </div>
                  <div className="flex justify-start">
                    <img src={mail1} width={18} height={18} />{" "}
                    <a
                      className="text-n-3 underline pl-1"
                      href="mailto:Ygustavo@dreammakersconstruction.ca"
                    >
                      gustavo@dreammakersconstruction.ca
                    </a>
                  </div>
                </div>

                <div className="flex flex-col mb-8 lg:mb-0">
                  <p className="font-bold text-n-2 mb-1">Paulo Gomes</p>
                  <div className="flex items-center justify-start">
                    <img src={phone1} width={18} height={18} />
                    <p className="text-n-3 pl-1">(437) 286-1686</p>
                  </div>
                  <div className="flex justify-start">
                    <img src={mail1} width={18} height={18} />{" "}
                    <a
                      className="text-n-3 underline pl-1"
                      href="mailto:paulo@dreammakersconstruction.ca"
                    >
                      paulo@dreammakersconstruction.ca
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[15.8rem]">
                <img
                  src={toronto}
                  className="w-full h-full object-cover scale-[1.3] translate-x-[13%] -translate-y-[5%]"
                  alt="Toronto"
                  width={520}
                  height={400}
                  loading="lazy"
                />

                <VideoChatMessage message="We serve the Greater Toronto Area!" />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default ContactUs;
