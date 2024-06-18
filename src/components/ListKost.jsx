import { useMemo } from "react";
import PropTypes from "prop-types";

const ListKost = ({ className = "", investasiRumahKosDenganCa, propWidth }) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <button
      className={`cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start gap-[54px] ${className}`}
    >
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start">
        <img
          className="w-[378px] relative rounded-3xs h-[187px] object-cover"
          alt=""
          src={investasiRumahKosDenganCa}
        />
      </button>
      <div className="w-[650px] relative h-[167px]">
        <div className="absolute top-[0px] left-[0px] w-[650px] h-[54px]">
          <b className="absolute top-[0px] left-[0px] text-16xl font-font text-black text-left">
            Kost Herman
          </b>
          <div className="absolute top-[36px] left-[0px] text-mini font-light font-inria-sans text-black text-left inline-block w-[650px]">
            Jl.Manunggal No.169, Gn. Bahagia, Kecamatan Balikpapan Selatan, Kota
            balikpapan
          </div>
        </div>
        <div className="absolute top-[114px] left-[1px] flex flex-row items-start justify-start gap-[20px]">
          <div className="rounded-3xs bg-gainsboro overflow-hidden flex flex-row items-center justify-center py-[13px] px-1">
            <div className="relative text-xl font-medium font-font text-black text-left">
              Kos Putra
            </div>
          </div>
          <div className="rounded-3xs bg-gainsboro overflow-hidden flex flex-row items-center justify-center py-[13px] px-1 gap-[10px]">
            <img
              className="w-[27px] relative h-[25px] object-cover"
              alt=""
              src="/image-32@2x.png"
            />
            <div className="relative text-xl font-medium font-font text-black text-left">
              4.6
            </div>
          </div>
          <div
            className="w-[285px] rounded-3xs bg-gainsboro overflow-hidden shrink-0 flex flex-row items-center justify-center py-[13px] px-1 box-border"
            style={frameDivStyle}
          >
            <div className="w-[27px] relative h-[27px]" />
            <div className="relative text-xl font-medium font-font text-black text-left ml-[-46px]">
              Last active:14/02/2024
            </div>
          </div>
        </div>
        <div className="absolute top-[66px] left-[0px] text-lg font-inria-sans text-red text-left">
          Kamar Tersisa 3
        </div>
      </div>
    </button>
  );
};

ListKost.propTypes = {
  className: PropTypes.string,
  investasiRumahKosDenganCa: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
};

export default ListKost;
