import { check } from "../assets";
import { aboutUsIcons, whatToExpect } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import living_room from "../assets/living_room.jpg";
import toronto from "../assets/toronto.jpg";
import {
  Gradient,
  PhotoChatMessage,
  VideoChatMessage,
} from "./design/Services";
import ContactForm from "./ContactForm";

const ContactUs: React.FC = () => {
  return (
    <Section id="contactUs">
      <div className="container">
      <Heading
        title="Contact us today"
        text="We would love to hear more about your project and how we can turn your vision into a reality."
      />

      <div className="relative">
        <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
        <div className="absolute inset-0">
              <img
                src={living_room}
                className="h-full w-full object-cover opacity-15"
                width={630}
                height={750}
                alt="Living room"
              />
            </div>
          <div className="relative z-1 max-w-[25rem] ml-auto">
            <h4 className="h4 mb-4">What to expect </h4>
            <p className="body-2 mb-[3rem] text-n-3">
              We’ve completed hundreds of remodeling projects successfully and
              we’ve got it down to a science. Here’s what we’ll discuss at your
              consultation:
            </p>

            <ul className="body-2">
              {whatToExpect.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start py-4 border-t border-n-6"
                >
                  <img width={24} height={24} src={check} />
                  <p className="ml-4">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="max-w-[58rem] ml-20">
            <p className="body-2 mb-[3rem] text-n-3">
              We want to know all about your project and how we can better serve
              you. 
              <br />
              Please fill out the form below and describe what you have in mind for your home renovation.
            </p>

            <ContactForm />
          </div>
        </div>

        <div className="relative z-1 grid gap-5 lg:grid-cols-2">
          <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={living_room}
                className="h-full w-full object-cover"
                width={630}
                height={750}
                alt="Living room"
              />
            </div>

            <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
              <h4 className="h4 mb-4">Trustworthy expertise</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                Your peace of mind is our priority. With years of proven
                experience and a family-driven approach, we deliver quality you
                can trust in every detail of your project.
              </p>
            </div>

            <PhotoChatMessage />
          </div>

          <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
            <div className="py-12 px-4 xl:px-8">
              <h4 className="h4 mb-4">Clear communication</h4>
              <p className="body-2 mb-[1.8rem] text-n-3">
                We keep you informed at every step, ensuring transparency and a
                shared vision from the initial consultation to project
                completion.
              </p>

              <ul className="flex items-center justify-between">
                {aboutUsIcons.map((item, index) => (
                  <li
                    key={index}
                    className={`rounded-2xl flex items-center justify-center bg-n-13/40 ${
                      index === 2
                        ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient  md:w-[4.5rem] md:h-[4.5rem]"
                        : "flex w-10 h-10 md:w-15 md:h-15"
                    }`}
                  >
                    <div
                      className={
                        index === 2
                          ? "flex items-center justify-center w-full h-full bg-n-13/60 rounded-[1rem]"
                          : ""
                      }
                    >
                      <img src={item} width={24} height={24} alt={item} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
              <img
                src={toronto}
                className="w-full h-full object-cover"
                alt="Toronto"
                width={520}
                height={400}
              />

              <VideoChatMessage />
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
