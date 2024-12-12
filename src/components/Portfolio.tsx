import Section from "./Section";
import Heading from "./Heading";
import { portfolio } from "../constants";
import { GradientLight } from "./design/Gradient";
import { useState } from "react";
import Button from "./Button";

const Portfolio: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState(6);

  const loadMore = () => {
    setVisibleItems((prev) => prev + 3);
  };

  return (
    <Section id="portfolio">
      <div className="container relative z-2 text-center">
        <Heading
          className="md:max-w-md lg:max-w-4xl"
          title="Trusted by Homeowners from &nbsp;Coast&nbsp;to Coast"
          text="Explore our portfolio to see the craftsmanship and dedication we bring to every project. From stunning remodels to innovative custom builds, our work reflects the trust and satisfaction of homeowners across North America. Each project is a testament to our commitment to quality, attention to detail, and our clients's visions."
        />

        <div className="flex flex-wrap gap-5 mb-10 items-center justify-center">
          {portfolio.slice(0, visibleItems).map((item, index) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] rounded-2xl bg-conic-gradient"
              key={index}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] min-w-[20rem] p-[2.4rem] pointer-events-none"></div>

              {index === 3 && <GradientLight />}

              <div className="absolute inset-0.5 bg-n-8 rounded-2xl">
                <div className="absolute inset-0">
                  <img
                    src={item}
                    width={380}
                    height={323}
                    loading="lazy"
                    alt={item}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <Button
          onClick={loadMore}
          disabled={visibleItems >= portfolio.length}
          className={`px-6 py-2 text-white rounded-full transition ${
            visibleItems >= portfolio.length
              ? "cursor-not-allowed"
              : "cursor-pointer"
          }`}
        >
          {visibleItems >= portfolio.length ? "No More Images" : "Load More"}
        </Button>
      </div>
    </Section>
  );
};

export default Portfolio;
