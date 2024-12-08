import housefam from "../assets/housefam.jpg";
import kitchen from "../assets/kitchen.jpg";
import remodel1 from "../assets/remodel1.jpg";
import { aboutUsIcons } from "../constants";
import Generating from "./Generating";
import Heading from "./Heading";
import Section from "./Section";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";
import person from "../assets/about/person.svg";

const AboutUs: React.FC = () => {
  return (
    <Section id="aboutus" crosses>
      <div className="container">
        <Heading
          title="Home Remodeling Designs by Gus Paiva"
          text="Building trust through quality and dedication, one home at a time."
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right md:opacity-30 opacity-30 xl:opacity-100"
                width={800}
                height={730}
                alt="family"
                loading="lazy"
                src={housefam}
              />
            </div>

            <div className="relative z-1 max-w-[37rem] ml-auto">
              <h4 className="h4 mb-4">About us</h4>
              <p className="body-2 mb-[1rem] text-n-3">
                At the heart of our company is Gus Paiva, a seasoned contractor
                with a passion for transforming spaces since 2016. Starting in
                Dallas, Texas, and now proudly serving the Greater Toronto Area
                (GTA), Gus brings a wealth of experience and a family-driven
                approach to every project.
              </p>

              <p className="body-2 mb-[1rem] text-n-3">
                We believe that every client deserves respect for their time,
                vision, and investment. That’s why our family-run company is
                committed to understanding your unique needs and delivering
                exceptional results. With a focus on integrity, craftsmanship,
                and personalized service, we’re here to make your construction
                and remodeling journey seamless and rewarding.
              </p>

              <p className="body-2 mb-[3rem] text-n-3">
                Your dream project is our priority, and we’re honored to bring
                it to life with care and dedication.
              </p>
            </div>

            <Generating
              className={
                "absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg:right-auto  lg:bottom-8 lg:-translate-x-1/2 lg:w-[50rem]"
              }
            />
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={kitchen}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="kitchen"
                  loading="lazy"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Trustworthy expertise</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Your peace of mind is our priority. With years of proven
                  experience and a family-driven approach, we deliver quality
                  you can trust in every detail of your project.
                </p>
              </div>

              <PhotoChatMessage />
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Clear communication</h4>
                <p className="body-2 mb-[1.8rem] text-n-3">
                  We keep you informed at every step, ensuring transparency and
                  a shared vision from the initial consultation to project
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
                        <img
                          src={item}
                          width={24}
                          height={24}
                          alt={item}
                          loading="lazy"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={remodel1}
                  className="w-full h-full object-cover"
                  alt="House"
                  width={520}
                  height={400}
                  loading="lazy"
                />

                <VideoChatMessage image={person} />
                <VideoBar />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default AboutUs;
