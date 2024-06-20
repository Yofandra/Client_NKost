import Size24pxIcon from "../../components/Size24pxIcon";
import Navbar from "../../components/Navbar";

const DashboardBelumMenyewa = () => {
  return (
    <>
      <Navbar />
    <div className="w-full relative bg-whitesmoke h-[673px] overflow-hidden text-left text-[35px] text-black font-inter">
      <div className="absolute top-[146px] left-[1760px] w-[427px] h-[249px]">
        <div className="absolute top-[0px] left-[0px] rounded-[10px] bg-dimgray w-[427px] h-[249px]" />
      </div>
      <img
        className="absolute h-[2.54%] w-[3.47%] top-[4.95%] right-[6.6%] bottom-[92.51%] left-[89.93%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group-2552.svg"
      />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[40px] right-[107px] w-[214px] h-[67px]">
        <div className="absolute top-[0px] right-[0px] w-[214px] h-[67px]">
          <div className="absolute top-[22px] right-[53px] text-[20px] font-medium font-inter text-darkolivegreen text-left">
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
      <div className="absolute top-[1064px] left-[93px] w-6 h-6">
        <div className="absolute top-[0px] left-[0px] w-6 h-6" />
      </div>
      <b className="absolute top-[46px] left-[118px]">
        Anda Belum Menyewa Kost
      </b>
    </div>
    </>
  );
};

export default DashboardBelumMenyewa;
