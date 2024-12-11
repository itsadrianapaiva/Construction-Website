import { socials } from "../constants";
import Section from "./Section";
import dreammakers from "../assets/hero/dreammakers.jpg";
import Button from "./Button";
import arrowup from "../assets/arrowup.svg";

const Footer: React.FC = () => {
  return (
    <>
      <Section crosses className="!px-0 !py-10">
        <footer className="container grid grid-cols-4 gap-10 max-sm:grid-cols-1">
          <img
            className="object-scale-down w-100 h-[15rem] py-2 col-span-1"
            src={dreammakers}
            alt="logo"
          />

          <div className="flex flex-row gap-20 mt-9 col-span-3 place-content-center">
            <h5 className="h5">Services</h5>
            <h5 className="h5">Portfolio</h5>
            <h5 className="h5">Pricing</h5>
            <h5 className="h5">About us</h5>
            <div className="flex flex-col gap-5">
              <h5 className="h5">Socials</h5>
              <ul className="flex flex-col flex-wrap place-content-center">
                {socials.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                  >
                    <img
                      src={item.iconUrl}
                      width={16}
                      height={16}
                      alt={item.title}
                    />
                    <p className="px-2">{item.title}</p>
                  </a>
                ))}
              </ul>
            </div>
          </div>
        </footer>
      </Section>
      <Section crosses className="!px-0 !py-10">
        <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
          <p className="caption ext-n-4 lg:block">
            {" "}
            © {new Date().getFullYear()}. Dream Makers Remodeling and
            Construction | All rights reserved.
          </p>
          <p className="caption ext-n-4 lg:block">
            Contractor Website Designed by Adriana Paiva
          </p>

          <div className="flex items-center gap-5">
            <p>Back at top</p>
            <Button
              onClick={() => window.scrollTo(0, 0)}
              children={
                <img
                  className="w-6 h-5 object-cover filter invert"
                  src={arrowup}
                  alt="arrow"
                />
              }
            ></Button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Footer;
