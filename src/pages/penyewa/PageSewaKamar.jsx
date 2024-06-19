import Size24pxIcon from "../../components/Size24pxIcon";
import Navbar from "../../components/NavbarPenyewa";


const PageSewaKamar = () => {
  return (
    <>
      <Navbar />
    <div className="w-full relative bg-whitesmoke h-[1019px] overflow-hidden text-left text-11xl text-black font-inter">
      <div className="absolute top-[146px] left-[1760px] w-[427px] h-[249px]">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-dimgray w-[427px] h-[249px]" />
      </div>
      <div className="absolute top-[1064px] left-[93px] w-6 h-6">
        <div className="absolute top-[0px] left-[0px] w-6 h-6" />
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] right-[1102px] w-[265px] h-[67px]">
        <div className="absolute top-[15px] right-[0px] text-xl font-medium font-inter text-darkolivegreen text-left flex items-center w-[205px] h-9">
          Tipe Kamar
        </div>
        <Size24pxIcon
          size24pxIconSize24px="/chevronright@2x.png"
          size24pxIconWidth="52px"
          size24pxIconHeight="67px"
          size24pxIconPosition="absolute"
          size24pxIconTop="0px"
          size24pxIconLeft="0px"
        />
      </button>
      <div className="absolute top-[67px] left-[136px] w-[650px] h-24 text-[35px]">
        <div className="absolute top-[0px] left-[0px] w-[650px] h-24">
          <b className="absolute top-[0px] left-[0px]">Kost Herman</b>
          <div className="absolute top-[50px] left-[0px] text-[20px] font-light inline-block w-[650px]">
            Jl.Manunggal No.169, Gn. Bahagia, Kecamatan Balikpapan Selatan, Kota
            balikpapan
          </div>
        </div>
      </div>
      <div className="absolute top-[304px] left-[136px] flex flex-col items-center justify-start">
        <img
          className="w-[370px] relative rounded-3xs h-[200px] object-cover"
          alt=""
          src="/image-20@2x.png"
        />
      </div>
      <b className="absolute top-[253px] left-[136px]">Kamar Single</b>
      <b className="absolute top-[519px] left-[136px]">Rp. 1.700.000/ Bulan</b>
      <button className="cursor-pointer [border:none] py-[18px] px-[46px] bg-[#F39200] bg-fixx  absolute top-[700px] left-[1093px] rounded-3xs w-[230px] overflow-hidden flex flex-row items-center justify-center box-border">
        <b className="relative text-xl font-inter text-black text-left bg-transparent">
          Ajukan Sewa
        </b>
      </button>
      <div className="absolute top-[577px] left-[139px] w-[1257px] h-[72px]">
        <div className="absolute top-[0px] left-[0px] w-[1257px] h-[72px]">
          <div className="absolute top-[0px] left-[0px] w-[1257px] h-[72px]">
            <div className="absolute top-[0px] left-[0px]">
              <p className="m-0">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate condimentum `}</p>
              <p className="m-0">
                erat, et lobortis magna suscipit sit amet. Suspendisse malesuada
                et ligula nec porttitor. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default PageSewaKamar;
