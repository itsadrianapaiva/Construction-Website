import { useEffect, useState } from "react";
import { MouseParallax } from "react-just-parallax";

import PlusSvg from "../../assets/svg/PlusSvg";

export const Gradient: React.FC = () => {
  return (
    <>
      <div className="relative z-1 h-6 mx-2.5 bg-n-11 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-8" />
      <div className="relative z-1 h-6 mx-6 bg-n-11/70 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-20" />
    </>
  );
};

export const BottomLine: React.FC = () => {
  return (
    <>
      <div className="hidden absolute top-[55.25rem] left-10 right-10 h-0.25 bg-n-6 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute top-[54.9375rem] left-[2.1875rem] z-2 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute top-[54.9375rem] right-[2.1875rem] z-2 pointer-events-none xl:block" />
    </>
  );
};

// const Rings: React.FC = () => {
//   return (
//     <>
//       <div className="absolute top-1/2 left-1/2 w-[65.875rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
//       <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
//       <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
//       <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
//     </>
//   );
// };

export const BackgroundCircles: React.FC<{ parallaxRef?: React.RefObject<HTMLDivElement>}> = ({ parallaxRef }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const snowflakePositions = [
    { rotation: 46, className: 'w-2 h-2 -ml-1 -mt-16', colorFrom: '#DD734F', colorTo: '#1A1A32' },
    { rotation: -56, className: 'w-2 h-2 -ml-1 -mt-32', colorFrom: '#DD734F', colorTo: '#1A1A32' },
    { rotation: 54, className: 'w-2 h-2 -ml-1 mt-[12.9rem]', colorFrom: '#B9AEDF', colorTo: '#1A1A32' },
    { rotation: -65, className: 'w-2 h-2 -ml-60 mt-72', colorFrom: '#B9AEDF', colorTo: '#1A1A32' },
    { rotation: -85, className: 'w-2 h-2 -ml-80 mt-20', colorFrom: '#88E5BE', colorTo: '#1A1A32' },
    { rotation: 70, className: 'w-2 h-2 -ml-3 -mt-38', colorFrom: '#88E5BE', colorTo: '#1A1A32' },
    { rotation: 16, className: 'w-2 h-2 -ml-60 -mt-16', colorFrom: '#DD734F', colorTo: '#1A1A32' },
    { rotation: -26, className: 'w-2 h-2 ml-20 -mt-32', colorFrom: '#DD734F', colorTo: '#1A1A32' },
    { rotation: 194, className: 'w-2 h-2 -ml-70 mt-[12.9rem]', colorFrom: '#B9AEDF', colorTo: '#1A1A32' },
    { rotation: -105, className: 'w-2 h-2 -ml-20 mt-28', colorFrom: '#B9AEDF', colorTo: '#1A1A32' },
    { rotation: -15, className: 'w-2 h-2 -ml-80 mt-30', colorFrom: '#88E5BE', colorTo: '#1A1A32' },
    { rotation: 1, className: 'w-2 h-2 -ml-3 -mt-3', colorFrom: '#88E5BE', colorTo: '#1A1A32' }
  ]; 

  const renderSnowflake = () => (
    <div className="snowflake absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-50">
      <div className="center absolute w-1 h-1 bg-white rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-70"></div>
      {[0, 60, 120, 180, 240, 300].map((rotate) => (
        <div 
          key={rotate} 
          className="arm absolute w-0.5 h-20 bg-white/50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
        >
          <div 
            className="branch absolute w-0.5 h-8 bg-white/30 top-1/5 left-0"
            style={{ transform: 'rotate(20deg)' }}
          ></div>
          <div 
            className="branch absolute w-0.5 h-8 bg-white/30 top-1/3 left-0"
            style={{ transform: 'rotate(-20deg)' }}
          ></div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="absolute -top-[92.375rem] left-1/2 w-[78rem] aspect-square border border-n-2/5 rounded-full -translate-x-1/2 md:-top-[38.5rem] xl:-top-[32rem]">
      <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
        {snowflakePositions.map((pos, index) => (
          <div 
            key={index} 
            className={`absolute bottom-1/2 left-[20rem] w-0.25 h-1/2 origin-bottom rotate-[${pos.rotation}deg]`}
          >
            <div
              className={`${pos.className} transition-transform duration-500 ease-out ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{
                background: `linear-gradient(to bottom, ${pos.colorFrom}, ${pos.colorTo})`
              }}
            >
              {renderSnowflake()}
            </div>
          </div>
        ))}
      </MouseParallax>
    </div>
  );
};
