import "antd/dist/antd.min.css";
import { Button } from "antd";
import GroupComponent1 from "../components/GroupComponent1";
import GroupComponent from "../components/GroupComponent";
import Header from "../components/Header";

const DashboardPenyewa = () => {
  return (
    <div className="w-full relative bg-whitesmoke-100 h-[2407px] overflow-hidden text-left text-11xl text-black font-inria-sans">
      <div className="absolute top-[0px] left-[-5px] bg-gainsboro w-[1440px] h-[164px]" />
      <div className="absolute top-[146px] left-[1760px] w-[427px] h-[249px]">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-dimgray w-[427px] h-[249px]" />
      </div>
      <img
        className="absolute h-[2.54%] w-[3.47%] top-[4.95%] right-[6.6%] bottom-[92.51%] left-[89.93%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/group-2552.svg"
      />
      <div className="absolute top-[164px] left-[66px] w-[167px] h-[67px]" />
      <Button
        className="absolute top-[164px] right-[88px]"
        style={{ width: "167px" }}
        type="default"
      >
        kamar saya
      </Button>
      <Button
        className="absolute top-[1199px] right-[103px]"
        style={{ width: "111px" }}
        type="default"
      >
        Nilai
      </Button>
      <Button
        className="absolute top-[2285px] right-[96px]"
        style={{ width: "214px" }}
        type="default"
      >
        Lihat Daftar Kost
      </Button>
      <img
        className="absolute top-[255px] left-[334px] w-[771px] h-[508px] object-cover"
        alt=""
        src="/group-2553@2x.png"
      />
      <div className="absolute top-[1064px] left-[93px] w-6 h-6">
        <div className="absolute top-[0px] left-[0px] w-6 h-6" />
      </div>
      <div className="absolute top-[791px] left-[85px] w-[650px] h-[108px] text-16xl">
        <b className="absolute top-[0px] left-[0px]">Kost Herman</b>
        <div className="absolute top-[36px] left-[0px] text-11xl font-light inline-block w-[650px]">
          Jl.Manunggal No.169, Gn. Bahagia, Kecamatan Balikpapan Selatan, Kota
          balikpapan
        </div>
      </div>
      <div className="absolute top-[1216px] left-[88px] w-[216px] h-9">
        <b className="absolute top-[0px] left-[35px]">5.0 (3 Review)</b>
        <img
          className="absolute top-[4px] left-[0px] w-[27px] h-[25px] object-cover"
          alt=""
          src="/image-32@2x.png"
        />
      </div>
      <GroupComponent1 />
      <div className="absolute top-[42px] left-[1283px] flex flex-row items-start justify-start gap-[10px]">
        <div className="w-[67px] relative rounded-[50%] bg-whitesmoke-200 h-[67px] z-[0]" />
        <img
          className="w-[41px] absolute !m-[0] top-[13px] left-[13px] h-[41px] object-cover z-[1]"
          alt=""
          src="/image-36@2x.png"
        />
      </div>
      <div className="absolute top-[0px] left-[-5px] w-[1440px] h-[164px]">
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
      <GroupComponent1 propTop="1632px" />
      <GroupComponent1 propTop="1952px" />
      <div className="absolute top-[927px] left-[85px] w-[1260px] h-[229px]">
        <GroupComponent />
        <div className="absolute top-[85px] left-[4px]">
          <p className="m-0">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate condimentum `}</p>
          <p className="m-0">
            erat, et lobortis magna suscipit sit amet. Suspendisse malesuada et
            ligula nec porttitor. 
          </p>
        </div>
      </div>
      <Header />
    </div>
  );
};

export default DashboardPenyewa;
