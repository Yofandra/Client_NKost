import Size24pxIcon from "../../components/Size24pxIcon";
import GroupComponent1 from "../../components/GroupComponent1";
import GroupComponent from "../../components/GroupComponent";
import Navbar from "../../components/Navbar";

const DashboardPenyewa = () => {
  return (
    <>
      <Navbar />
      <div className="w-full relative bg-whitesmoke-100 h-[2440px] overflow-hidden text-left text-11xl text-black font-inria-sans">
      <div className="absolute top-[146px] left-[1760px] w-[427px] h-[249px]">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-dimgray w-[427px] h-[249px]" />
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[128px] right-[88px] w-[167px] h-[67px]">
        <div className="absolute top-[16px] right-[58px] text-xl font-medium font-inter text-darkolivegreen text-left flex items-center w-[109px] h-9">
          kamar saya
        </div>
        <Size24pxIcon
          size24pxIconSize24px="/chevronright.svg"
          size24pxIconWidth="54px"
          size24pxIconHeight="67px"
          size24pxIconPosition="absolute"
          size24pxIconTop="0px"
          size24pxIconLeft="113px"
        />
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[1163px] right-[103px] w-[111px] h-[67px]">
        <div className="absolute top-[0px] right-[0px] w-[111px] h-[67px]">
          <div className="absolute top-[22px] right-[69px] text-xl font-medium font-inter text-darkolivegreen text-left">
            Nilai
          </div>
          <Size24pxIcon
            size24pxIconSize24px="/chevronright.svg"
            size24pxIconWidth="54px"
            size24pxIconHeight="67px"
            size24pxIconPosition="absolute"
            size24pxIconTop="0px"
            size24pxIconLeft="57px"
          />
        </div>
      </button>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[2249px] right-[96px] w-[214px] h-[67px]">
        <div className="absolute top-[0px] right-[0px] w-[214px] h-[67px]">
          <div className="absolute top-[22px] right-[53px] text-xl font-medium font-inter text-darkolivegreen text-left">
            Lihat Daftar Kost
          </div>
          <Size24pxIcon
            size24pxIconSize24px="/chevronright.svg"
            size24pxIconWidth="54px"
            size24pxIconHeight="67px"
            size24pxIconPosition="absolute"
            size24pxIconTop="0px"
            size24pxIconLeft="160px"
          />
        </div>
      </button>
      <img
        className="absolute top-[219px] left-[335px] w-[771px] h-[508px] object-cover"
        alt=""
        src="/group-2553@2x.png"
      />
      <div className="absolute top-[1028px] left-[93px] w-6 h-6">
        <div className="absolute top-[0px] left-[0px] w-6 h-6" />
      </div>
      <div className="absolute top-[755px] left-[85px] w-[650px] h-[108px] text-16xl">
        <b className="absolute top-[0px] left-[0px]">Kost Herman</b>
        <div className="absolute top-[36px] left-[0px] text-11xl font-light inline-block w-[650px]">
          Jl.Manunggal No.169, Gn. Bahagia, Kecamatan Balikpapan Selatan, Kota
          balikpapan
        </div>
      </div>
      <div className="absolute top-[1180px] left-[88px] w-[216px] h-9">
        <b className="absolute top-[0px] left-[35px]">5.0 (3 Review)</b>
        <img
          className="absolute top-[4px] left-[0px] w-[27px] h-[25px] object-cover"
          alt=""
          src="/image-32@2x.png"
        />
      </div>
      <GroupComponent1 />
      <GroupComponent1 propTop="1596px" />
      <GroupComponent1 propTop="1916px" />
      <div className="absolute top-[891px] left-[85px] w-[1260px] h-[229px]">
        <GroupComponent />
        <div className="absolute top-[85px] left-[4px]">
          <p className="m-0">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate condimentum `}</p>
          <p className="m-0">
            erat, et lobortis magna suscipit sit amet. Suspendisse malesuada et
            ligula nec porttitor. 
          </p>
        </div>
      </div>
      <div className="absolute top-[0px] left-[-5px] w-[1440px] h-[122px]">
        <div className="absolute top-[0px] left-[0px] bg-gainsboro w-[1440px] h-[122px]" />
      </div>
    </div>
    </>
    
  );
};

export default DashboardPenyewa;
