import { socials } from "../constants";
import Section from "./Section";
import dreammakers from "../assets/hero/dreammakers.jpg";
import Button from "./Button";
import arrowup from "../assets/arrowup.svg";

const Footer: React.FC = () => {
  return (
    <>
      <Section crosses className="!px-0 !py-10">
        <footer className="container grid grid-cols-4 grid-rows-2 gap-10 max-sm:grid-cols-1">
          <img
            className="object-scale-down w-100 h-[15rem] py-2 col-span-1"
            src={dreammakers}
            alt="logo"
          />

          <div className="flex flex-row gap-20 mt-9 col-span-3 row-span-1 place-content-center">
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
          <div className="col-span-1 row-span-2 place-content-start">
            <h5 className="h5">Get in touch</h5>
            <p className="body-2 text-n-3">123 Main Street, Anytown, USA</p>
            <p className="body-2 text-n-3">+1 (555) 555-5555</p>
            <p className="body-2 text-n-3">lGt0Y@example.com</p>
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

          <div className="flex items-center gap-3">
            <p className="uppercase ext-n-4 font-code">Back at top</p>
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
        <div className="flex justify-space-between ml-[13rem] mt-5 gap-3">
          <a className="caption ext-n-4 lg:block" href="">
            Privacy
          </a>
          <a className="caption ext-n-4 lg:block" href="">
            Terms
          </a>
          <a className="caption ext-n-4 lg:block" href="">
            Sitemap
          </a>
        </div>
      </Section>
    </>
  );
};

export default Footer;
