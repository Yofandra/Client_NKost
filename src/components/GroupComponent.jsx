import PropTypes from "prop-types";

const GroupComponent = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[0px] left-[0px] w-[1260px] h-[229px] text-left text-11xl text-black font-inria-sans ${className}`}
    >
      <div className="absolute top-[40px] left-[0px] rounded-3xs bg-gainsboro w-[1260px] h-[189px]" />
      <div className="absolute top-[0px] left-[3px] flex flex-col items-start justify-start">
        <div className="flex flex-col items-start justify-start gap-[6px]">
          <b className="relative">Deskripsi Kost</b>
          <div className="w-[1158px] rounded-3xs h-[72px]" />
        </div>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
