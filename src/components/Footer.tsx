import { aboutUsFooter, services, socials } from "../constants";
import Section from "./Section";
import dreammakers from "../assets/hero/dreammakers.jpg";
import Button from "./Button";
import arrowup from "../assets/arrowup.svg";
import locationpin from "../assets/locationpin.svg";
import telephoneicon from "../assets/telephoneicon.svg";
import mailicon from "../assets/mailicon.svg";

const Footer: React.FC = () => {
  return (
    <>
      <Section crosses className="!px-0 !py-20">
        <footer className="container grid grid-cols-4 gap-20 max-sm:grid-cols-1">
          <img
            className="object-scale-down w-50 h-[25rem] self-start col-span-1"
            src={dreammakers}
            alt="logo"
          />

          <div className="flex flex-row gap-20 my-auto col-span-3 row-span-1 items-start justify-around">
            <div className="flex flex-col gap-5">
              <h5 className="h5">Services</h5>
              <ul className="flex flex-col place-content-center gap-4">
                {services.map((item) => (
                  <li key={item.id}>
                    <a
                      href="#services"
                      className="body-2 text-n-3 hover:text-n-4"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <h5 className="h5">About us</h5>
              <ul className="flex flex-col place-content-center gap-4">
                {aboutUsFooter.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.url}
                      className="body-2 text-n-3 hover:text-n-4"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-5">
              <h5 className="h5">Socials</h5>
              <ul className="flex flex-col flex-wrap place-content-center">
                {socials.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    className="flex items-center justify-center w-10 h-10 bg-n-7 hover:text-n-4"
                  >
                    <img
                      src={item.iconUrl}
                      width={18}
                      height={18}
                      alt={item.title}
                    />
                    <p className="px-2 font-thin">{item.title}</p>
                  </a>
                ))}
              </ul>
            </div>
            <div className="flex flex-col flex-wrap place-content-center gap-5">
              <h5 className="h5">Get in touch</h5>
              <div className="flex items-center">
                <img className="filter invert"src={locationpin} width={18} height={18} />
                <p className="body-2 text-n-3 pl-3">Toronto, ON - Canada</p>
              </div>
              <div className="flex items-center">
                <img className="filter invert" src={telephoneicon} width={18} height={18} />
                <p className="body-2 text-n-3 pl-3">(437) 448-4877</p>
              </div>
              <div className="flex items-center">
                <img src={mailicon} width={18} height={18} />
                <a
                  href="mailto:ZTtY0@example.com"
                  className="body-2 text-n-3 pl-3 hover:text-n-4"
                >
                  gustavopaiva@outlook.com
                </a>
              </div>
            </div>
          </div>
        </footer>
      </Section>
      <Section crosses className="!px-0 !py-10">
        <div className="container flex flex-col sm:justify-between justify-around items-start max-sm:flex-col">
          <div className="flex flex-row justify-between w-full">
            <p className="caption text-n-4 items-center lg:block">
              {" "}
              © {new Date().getFullYear()}. Dream Makers Renovation and
              Construction | All rights reserved.
            </p>

            <div className="flex items-center gap-3">
              <p className="uppercase text-n-4 font-code">Back at top</p>
              <Button
                className=""
                onClick={() => window.scrollTo(0, 0)}
                children={
                  <img
                    className="w-6 object-cover filter invert"
                    src={arrowup}
                    alt="arrow"
                  />
                }
              ></Button>
            </div>
          </div>

          <div>
            <p className="caption text-n-4 lg:block">
              Contractor Website Designed by Adriana Paiva
            </p>
          </div>
        </div>

        <div className="flex justify-space-between ml-[13rem] mt-5 gap-3">
          <a className="caption font-extralight text-n-4 lg:block" href="/privacy-policy">
            Privacy
          </a>
          <a className="caption font-extralight text-n-4 lg:block" href="/terms-of-service">
            Terms
          </a>
          <a className="caption font-extralight text-n-4 lg:block" href="">
            Sitemap
          </a>
        </div>
      </Section>
    </>
  );
};

export default Footer;
