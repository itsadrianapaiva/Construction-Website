import couplebathroom from "../assets/couplebathroom.jpg";
import { notificationImages } from "../constants";

const Notification: React.FC<{ className?: string; title?: string }> = ({
  className,
  title,
}) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/70 rounded-2xl gap-5`}
    >
      <img
        src={couplebathroom}
        width={62}
        height={62}
        alt="bathtub"
        className="rounded-xl"
      />
      <div className="flex-1">
        <h6 className="mb-1 font-semibold text-base -ml-1">{title}</h6>

        <div className="flex items-center justify-between">
          <ul className="flex -m-0.5">
            {notificationImages.map((item, index) => (
              <li
                key={index}
                className="flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden -ml-1.5"
              >
                <img
                  src={item}
                  className="w-full"
                  width={20}
                  height={20}
                  alt={item}
                />
              </li>
            ))}
          </ul>
          <div className="body-2 text-n-13">
            2d ago
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
