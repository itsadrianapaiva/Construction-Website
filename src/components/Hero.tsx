import React, { useRef } from "react";
import Section from "./Section";
import big_house from "../assets/big_house.jpg";
import Button from "./Button";
import { BackgroundBricks, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants/index";
import { ScrollParallax } from "react-just-parallax";
import Generating from "./Generating";
import Notification from "./Notification";
import Stats from "./Stats";


const Hero: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem]">
          <h1 className="h1 mb-6 animate-fade-slide">
          Turn your dream project into reality &nbsp;with&nbsp; us
          </h1>
          <p className="body-1 max-w-4xl mx-auto mb-6 text-n-2 lg:mb-8 animate-fade-slide">
          Building more than just homes. We create spaces that inspire joy and comfort.
          </p>

          <Button className="animate-fade-slide" href="#portfolio">
            Our Portfolio
          </Button>
          <Button className="ml-5 animate-fade-slide" href="#process" white>
            Get Started
          </Button>
          
        </div>
        <div className="relative max-w-[30rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/20] rounded-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={big_house}
                  className="w-full scale-[1.2] translate-y-[5%] md:scale-[1.3] md:translate-y-[10%] lg:-translate-y-[10%]"
                  width={1024}
                  height={490}
                  alt="house"
                />

                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2"/>

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                    <Notification className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex" title="Satisfied customer"/>

                </ScrollParallax>
              </div>
            </div>
            <Gradient />
          </div>
          <div className="absolute -top-[150%] left-1/2 w-[234%] h-[208%] -translate-x-1/2 md:h[218%] md:-top-[134%] md:translate-y-[15%] md:w-[221.5%] lg:-top-[130%] lg:scale-130">
            <img
              src={big_house}
              className="w-full h-full object-cover opacity-20"
              width={1200}
              height={1200}
              alt="house"
            />
          </div>

          <BackgroundBricks />
        </div>

        <Stats className="hidden relative z-10 mt-20 lg:block"/>
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
