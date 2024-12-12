import Section from "./Section";
import Heading from "./Heading";
import { services } from "../constants";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Gradient";
import ClipPath from "../assets/svg/ClipPath";

const Services: React.FC = () => {
  return (
    <Section id="services">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Trusted by Homeowners from Coast to Coast"
        />

        <div className="flex flex-wrap gap-10 mb-10">
          {services.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] rounded-2xl bg-conic-gradient"
              style={{
                backgroundImage: `${item.backgroundUrl}`,
              }}
              key={item.id}
            >
              <div className="rounded-[inherit] bg-n-7 p-4">
                <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                  <h5 className="h5 mb-5">{item.title}</h5>
                  <p className="body-2 mb-6 text-n-3">{item.text}</p>
                  <div className="flex items-center mt-auto">
                    <img
                      src={item.iconUrl}
                      width={48}
                      height={48}
                      loading="lazy"
                      alt={item.title}
                    />
                    {/* turn the p below into anchor */}
                    <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider cursor-pointer">
                      Explore More
                    </p>
                    <Arrow />
                  </div>
                </div>

                {item.light && <GradientLight />}

                <div
                  className="absolute inset-0.5 bg-n-8 rounded-2xl"
                  style={{
                    clipPath: "url(#services)",
                  }}
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-20">
                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        width={380}
                        height={323}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>

                <ClipPath />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Services;
