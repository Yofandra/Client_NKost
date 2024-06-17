import { useMemo } from "react";
import PropTypes from "prop-types";

const GroupComponent1 = ({ className = "", propTop }) => {
  const groupDivStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className={`absolute top-[1276px] left-[85px] w-[804px] h-[241px] text-left text-xl text-black font-inria-sans ${className}`}
      style={groupDivStyle}
    >
      <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start gap-[10px]">
        <div className="w-[67px] relative rounded-[50%] bg-gainsboro h-[67px] z-[0]" />
        <img
          className="w-[41px] absolute !m-[0] top-[13px] left-[13px] h-[41px] object-cover z-[1]"
          alt=""
          src="/image-36@2x.png"
        />
      </div>
      <div className="absolute top-[9px] left-[87px] flex flex-col items-start justify-start gap-[18px]">
        <div className="rounded-3xs bg-gainsboro overflow-hidden flex flex-col items-start justify-start py-0.5 px-[5px]">
          <div className="flex flex-row items-center justify-center p-2.5">
            <b className="relative">nama@gmail.com</b>
          </div>
        </div>
        <div className="rounded-3xs bg-gainsboro overflow-hidden flex flex-col items-start justify-start py-3.5 px-2.5">
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <img
              className="w-[26px] relative h-6 object-cover"
              alt=""
              src="/image-37@2x.png"
            />
            <b className="relative">5.0</b>
          </div>
        </div>
        <div className="rounded-3xs bg-gainsboro overflow-hidden flex flex-row items-center justify-center py-6 px-[23px]">
          <b className="w-[671px] relative inline-block shrink-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </b>
        </div>
      </div>
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
};

export default GroupComponent1;
