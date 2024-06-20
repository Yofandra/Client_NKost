import Size24pxIcon from "../../components/Size24pxIcon";
import ListKost from "../../components/ListKost";
import Navbar from "../../components/NavbarPenyewa";

const PageDaftarKost = () => {
  return (
    <>
      <Navbar />
    <div className="w-full relative bg-whitesmoke h-[2562px] overflow-hidden">
      <div className="absolute top-[146px] left-[1760px] w-[427px] h-[249px]">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-dimgray w-[427px] h-[249px]" />
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] right-[1127px] w-[220px] h-[67px]">
        <div className="absolute top-[15px] right-[0px] text-xl font-medium font-font text-darkolivegreen text-left flex items-center w-[166px] h-9">
          Daftar Kos
        </div>
        <Size24pxIcon
          size24pxIconSize24px="/chevronright@2x.png"
          size24pxIconWidth="54px"
          size24pxIconHeight="67px"
          size24pxIconPosition="absolute"
          size24pxIconTop="0px"
          size24pxIconLeft="0px"
        />
      </button>
      <div className="absolute top-[833px] left-[159px] w-6 h-6">
        <div className="absolute top-[0px] left-[0px] w-6 h-6" />
      </div>
      <div className="absolute top-[1779px] left-[174px] w-6 h-6">
        <div className="absolute top-[0px] left-[0px] w-6 h-6" />
      </div>
      <div className="absolute top-[2746px] left-[170px] w-6 h-6">
        <div className="absolute top-[0px] left-[0px] w-6 h-6" />
      </div>
      <div className="absolute top-[146px] left-[170px] flex flex-col items-start justify-start gap-[85px]">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start gap-[53px]">
          <img
            className="w-[378px] relative h-[187px] object-cover"
            alt=""
            src="/group-2553@2x.png"
          />
          <div className="w-[650px] relative h-[167px]">
            <div className="absolute top-[0px] left-[0px] w-[650px] h-[54px]">
              <b className="absolute top-[0px] left-[0px] text-16xl font-font text-black text-left">
                Kost Herman
              </b>
              <div className="absolute top-[36px] left-[0px] text-mini font-light font-inria-sans text-black text-left inline-block w-[650px]">
                Jl.Manunggal No.169, Gn. Bahagia, Kecamatan Balikpapan Selatan,
                Kota balikpapan
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
              <div className="w-[281px] rounded-3xs bg-gainsboro overflow-hidden shrink-0 flex flex-row items-center justify-center py-[13px] px-1 box-border">
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
        <ListKost investasiRumahKosDenganCa="/investasi-rumah-kos-dengan-cara-pintar-gan---kaskus-1@2x.png" />
        <ListKost
          investasiRumahKosDenganCa="/download-1@2x.png"
          propWidth="295px"
        />
      </div>
      <div className="absolute top-[963px] left-[170px] flex flex-col items-start justify-start gap-[85px]">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start gap-[53px]">
          <img
            className="w-[378px] relative h-[187px] object-cover"
            alt=""
            src="/group-2553@2x.png"
          />
          <div className="w-[650px] relative h-[167px]">
            <div className="absolute top-[0px] left-[0px] w-[650px] h-[54px]">
              <b className="absolute top-[0px] left-[0px] text-16xl font-font text-black text-left">
                Kost Herman
              </b>
              <div className="absolute top-[36px] left-[0px] text-mini font-light font-inria-sans text-black text-left inline-block w-[650px]">
                Jl.Manunggal No.169, Gn. Bahagia, Kecamatan Balikpapan Selatan,
                Kota balikpapan
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
              <div className="w-[289px] rounded-3xs bg-gainsboro overflow-hidden shrink-0 flex flex-row items-center justify-center py-[13px] px-1 box-border">
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
        <ListKost
          investasiRumahKosDenganCa="/investasi-rumah-kos-dengan-cara-pintar-gan---kaskus-1@2x.png"
          propWidth="303px"
        />
        <ListKost
          investasiRumahKosDenganCa="/download-1@2x.png"
          propWidth="299px"
        />
      </div>
      <div className="absolute top-[1780px] left-[170px] flex flex-col items-start justify-start gap-[85px]">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start gap-[53px]">
          <img
            className="w-[378px] relative h-[187px] object-cover"
            alt=""
            src="/group-2553@2x.png"
          />
          <div className="w-[650px] relative h-[167px]">
            <div className="absolute top-[0px] left-[0px] w-[650px] h-[54px]">
              <b className="absolute top-[0px] left-[0px] text-16xl font-font text-black text-left">
                Kost Herman
              </b>
              <div className="absolute top-[36px] left-[0px] text-mini font-light font-inria-sans text-black text-left inline-block w-[650px]">
                Jl.Manunggal No.169, Gn. Bahagia, Kecamatan Balikpapan Selatan,
                Kota balikpapan
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
              <div className="w-[302px] rounded-3xs bg-gainsboro overflow-hidden shrink-0 flex flex-row items-center justify-center py-[13px] px-1 box-border">
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
        <ListKost
          investasiRumahKosDenganCa="/investasi-rumah-kos-dengan-cara-pintar-gan---kaskus-1@2x.png"
          propWidth="304px"
        />
        <ListKost
          investasiRumahKosDenganCa="/download-1@2x.png"
          propWidth="304px"
        />
      </div>
      <div className="absolute top-[2226px] left-[1257px] w-6 h-6">
        <div className="absolute top-[0px] left-[0px] w-6 h-6" />
      </div>
    </div>
    </>
  );
};

export default PageDaftarKost;
