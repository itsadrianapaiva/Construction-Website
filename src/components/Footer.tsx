import { aboutUsFooter, services, socials } from "../constants";
import Section from "./Section";
import Button from "./Button";
import arrowup from "../assets/arrowup.svg";
import locationpin from "../assets/locationpin.svg";
import telephoneicon from "../assets/telephoneicon.svg";
import mailicon from "../assets/mailicon.svg";
import logo3 from "../assets/logo3.png";

const Footer: React.FC = () => {
  return (
    <>
      <Section crosses className="!px-0 !py-20">
        <footer className="container grid grid-cols-4 gap-20 max-sm:grid-cols-1">
          <img
            className="object-scale-down w-50 mx-20 sm:mx-0 lg:h-[25rem] col-span-1"
            src={logo3}
            alt="logo"
          />

          <div className="flex flex-row flex-wrap gap-10 sm:gap-18 my-auto col-span-3 items-start justify-start ml-4">
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
                    className="flex items-center justify-center w-10 h-10 ml-6  bg-n-7 hover:text-n-4"
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
            <div className="flex flex-col gap-5">
              <h5 className="h5">Get in touch</h5>
              <div className="flex items-center">
                <img
                  className="filter invert"
                  src={locationpin}
                  width={18}
                  height={18}
                />
                <p className="body-2 text-n-3 pl-3">Toronto, ON - Canada</p>
              </div>
              <div className="flex items-center">
                <img
                  className="filter invert"
                  src={telephoneicon}
                  width={18}
                  height={18}
                />
                <p className="body-2 text-n-3 pl-3">(437) 448-4877</p>
              </div>
              <div className="flex flex-col gap-3 item-center">
                <div className="flex flex-row item-center">
                  <img src={mailicon} width={18} height={18} />
                  <a
                    href="mailto:gustavopaiva@dreammakers.com"
                    className="body-2 text-n-3 pl-3 hover:text-n-4"
                  >
                    gustavopaiva@dreammakers.com
                  </a>
                </div>
                <div className="flex flex-row item-center">
                  <img src={mailicon} width={18} height={18} />
                  <a
                    href="mailto:paulogomes@dreammakers.com"
                    className="body-2 text-n-3 pl-3 hover:text-n-4"
                  >
                    paulogomes@dreammakers.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </Section>

      <Section crosses className="!px-0 !py-10 border-t border-n-1/10">
        <div className="container flex flex-col sm:justify-between justify-around items-start max-sm:flex-col">
          <div className="flex flex-row justify-between w-full">
            <p className="caption text-n-4 items-center lg:block">
              {" "}
              © {new Date().getFullYear()}. Dream Makers Renovation and
              Construction | All rights reserved.
            </p>

            <div className="flex items-center gap-3">
              <p className="uppercase text-n-4 font-code hidden md:block">
                Back at top
              </p>
              <Button
                onClick={() => window.scrollTo(0, 0)}
                children={
                  <img
                    className="w-9 object-cover filter invert"
                    src={arrowup}
                    alt="arrow"
                  />
                }
              ></Button>
            </div>
          </div>

          <div>
            <p className="caption text-n-4 md:-mt-3 lg:block">
              Contractor Website Designed by Adriana Paiva
            </p>
          </div>
        </div>
        <div className="flex w-full justify-center flex-wrap mt-5 gap-15">
          <a
            className="caption font-extralight text-n-4 lg:block"
            href="/privacy-policy"
          >
            Privacy
          </a>
          <p className="caption text-n-4 font-extralight">|</p>
          <a
            className="caption font-extralight text-n-4 lg:block"
            href="/terms-of-service"
          >
            Terms
          </a>
          <p className="caption text-n-4 font-extralight">|</p>
          <a
            className="caption font-extralight text-n-4 lg:block"
            href="/sitemap"
          >
            Sitemap
          </a>
        </div>
      </Section>
      
    </>
  );
};

export default Footer;
