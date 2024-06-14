import { useMemo } from "react";
import PropTypes from "prop-types";

const Header = ({
  className = "",
  groupDivHeight,
  groupDivBottom,
  kOSTHeight,
  kOSTTop,
}) => {
  const groupDiv1Style = useMemo(() => {
    return {
      height: groupDivHeight,
      bottom: groupDivBottom,
    };
  }, [groupDivHeight, groupDivBottom]);

  const kOSTStyle = useMemo(() => {
    return {
      height: kOSTHeight,
      top: kOSTTop,
    };
  }, [kOSTHeight, kOSTTop]);

  return (
    <div
      className={`absolute top-[-2.3px] left-[-5px] w-[1440px] h-[166.3px] text-left text-13xl text-gray font-poppins ${className}`}
    >
      <div className="absolute top-[2.3px] left-[0px] w-[1440px] h-[164px]">
        <div className="absolute top-[0px] left-[0px] bg-gainsboro w-[1440px] h-[164px]" />
        <div className="absolute top-[42px] left-[1288px] flex flex-row items-start justify-start gap-[10px]">
          <div className="w-[67px] relative rounded-[50%] bg-whitesmoke-200 h-[67px] z-[0]" />
          <img
            className="w-[41px] absolute !m-[0] top-[13px] left-[13px] h-[41px] object-cover z-[1]"
            alt=""
            src="/image-36@2x.png"
          />
        </div>
      </div>
      <div
        className="absolute h-[72.94%] w-[17.53%] top-[0%] right-[75.67%] bottom-[27.06%] left-[6.81%]"
        style={groupDiv1Style}
      >
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
          <div
            className="absolute h-[50.29%] w-[75.2%] top-[32.48%] left-[24.8%] tracking-[0.6em] inline-block"
            style={kOSTStyle}
          >
            KOST
          </div>
          <div className="absolute h-full w-[26.7%] top-[0%] left-[0%] text-45xl tracking-[0.15em] inline-block">
            N
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,

  /** Style props */
  groupDivHeight: PropTypes.any,
  groupDivBottom: PropTypes.any,
  kOSTHeight: PropTypes.any,
  kOSTTop: PropTypes.any,
};

export default Header;
