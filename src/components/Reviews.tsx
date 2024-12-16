import { check2, grid, loading1 } from "../assets";
import { testimonies } from "../constants";
import { Gradient } from "./design/Reviews";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";

const Reviews: React.FC = () => {
  return (
    <Section className="overflow-hidden" id="reviews">
      <div className="container md:pb-10">
        <Heading
          className="text-center"
          tag="What our clients say"
          title="Hear from homeowners who trusted us "
        />

        <div className="relative grid gap-6 md:grid-cols-2 md:gap-10 md:pb-[7rem]">
          {testimonies.map((item) => {
            const status: string =
              item.status === "done" ? "Done" : "In Progress";

            return (
              <div
                key={item.id}
                className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                  item.colorful ? "bg-conic-gradient" : "bg-n-6"
                }`}
              >
                <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                  <div className="absolute top-0 left-0 max-w-full">
                    <img
                      src={grid}
                      className="w-full"
                      loading="lazy"
                      width={550}
                      height={550}
                      alt="Grid"
                    />
                  </div>

                  <div className="relative z-1">
                    <div className="flex items-center justify-between max-w-full mb-8 md:mb-20">
                      <Tagline>{item.date}</Tagline>

                      <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                        <img
                          className="mr-2.5"
                          src={item.status === "done" ? check2 : loading1}
                          loading="lazy"
                          width={16}
                          height={16}
                          alt={status}
                        />
                        <div className="tagline">{status}</div>
                      </div>
                    </div>

                    <div className="mb-10 md:my-15 -mx-15">
                      <img
                        src={item.imageUrl}
                        className="w-full h-[320px] object-cover object-center"
                        loading="lazy"
                        alt={item.title}
                      />
                    </div>

                    <h4 className="h4 mb-4">{item.title}</h4>
                    <p className="body-2 text-n-4 mb-5">{item.text}</p>
                    <p className="ml-auto font-code text-sm font-bold text-n-1 uppercase tracking-wider cursor-pointer text-right">
                      {item.author}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Reviews;
