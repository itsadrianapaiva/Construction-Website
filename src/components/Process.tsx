import { check } from "../assets";
import processMainLogo from "../assets/process/processMainLogo.svg";
import { processIcons, processContent, processText } from "../constants";
import Button from "./Button";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import Section from "./Section";

const Process: React.FC = () => {
  return (
    <Section crosses id="process">
      <div className="container lg:flex justify-center">
        <div className="max-w-[40rem] ml-10">
          <h2 className="h2 -mt-15 mb-4 md:mb-10">
           How it works
          </h2>

          <ul className="max-w-[32rem] mb-10 md:mb-14">
            {processContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

          <Button>Call us now</Button>
        </div>

        <div className="lg:ml-auto xl:w-[48rem] mt-4">
          <p className="body-2 mb-8 ml-auto text-n-4 md:mb-16 lg:mb-32 lg:w-[40rem] lg:max-auto">
            {processText}
          </p>

          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex item-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={processMainLogo}
                    width={100}
                    height={100}
                    alt="logo"
                  />
                </div>
              </div>
            </div>

            <ul>
              {processIcons.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${index * 45}`}>
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Process;
