import svgPaths from "../imports/svg-73qgq9tnvw";
import imgImage1 from "figma:asset/d61dd6225abcf422a639047df15299aa40db0633.png";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 text-black w-[172px]">
      <p className="font-['Labrada:Bold',sans-serif] font-bold leading-[normal] lowercase relative shrink-0 text-[0px] text-[26px] w-full">
        <span>{`RSUD `}</span>
        <span className="text-[#116ce4]">dr.Iskak</span>{" "}
      </p>
      <p className="font-['Alkatra:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[24px] w-full">Tulungagung</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[60px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage1} />
      </div>
      <Frame />
    </div>
  );
}

function MdiAddressMarker() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-[5.85px] relative size-[24.298px]" data-name="mdi:address-marker">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="mdi:address-marker">
          <path d={svgPaths.p39d33f00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[7px] place-items-start relative">
      <p className="[grid-area:1_/_1] font-['Labrada:Bold',sans-serif] font-bold h-[38px] leading-[normal] lowercase ml-[35.87px] mt-0 relative text-[26px] text-black w-[335.167px]">Jl. Dr. Wahidin Sudiro Husodo</p>
      <MdiAddressMarker />
    </div>
  );
}

function Frame4() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex items-center justify-between ml-0 mt-0 relative w-[237px]">
      <div className="h-[20px] relative shrink-0 w-[22px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 20">
          <path d={svgPaths.p385f6c00} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <p className="font-['Labrada:Bold',sans-serif] font-bold h-[38px] leading-[normal] lowercase relative shrink-0 text-[26px] text-black w-[211px]">Telp. (0355) 320119</p>
    </div>
  );
}

function Group5() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-0 place-items-start relative">
      <Frame4 />
    </div>
  );
}

function Group2() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[401px] mt-0 place-items-start relative">
      <Group5 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex h-[33px] items-center justify-between ml-0 mt-0 relative w-[321px]">
      <div className="h-[17px] relative shrink-0 w-[24px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 17">
          <path clipRule="evenodd" d={svgPaths.p31e9ee00} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
      <p className="font-['Labrada:Bold',sans-serif] font-bold h-[33px] leading-[normal] lowercase relative shrink-0 text-[26px] text-black w-[291px]">rsud@tulungagung.go.id</p>
    </div>
  );
}

function Group3() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-0 place-items-start relative">
      <Frame5 />
    </div>
  );
}

function Group4() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[669px] mt-[5px] place-items-start relative">
      <Group3 />
    </div>
  );
}

function Group6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <Group1 />
      <Group2 />
      <Group4 />
    </div>
  );
}

function IcSharpFacebook1() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-px relative size-[25px]" data-name="ic:sharp-facebook">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="ic:sharp-facebook">
          <path d={svgPaths.p3639da80} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RiInstagramFill1() {
  return (
    <div className="[grid-area:1_/_1] ml-[41px] mt-0 relative size-[25px]" data-name="ri:instagram-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="ri:instagram-fill">
          <path d={svgPaths.pae86900} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RiTwitterFill1() {
  return (
    <div className="[grid-area:1_/_1] ml-[81px] mt-px relative size-[25px]" data-name="ri:twitter-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="ri:twitter-fill">
          <path d={svgPaths.p4e1d540} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function RiYoutubeFill1() {
  return (
    <div className="[grid-area:1_/_1] ml-[120px] mt-0 relative size-[25px]" data-name="ri:youtube-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="ri:youtube-fill">
          <path d={svgPaths.p358da700} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Group15() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <IcSharpFacebook1 />
      <RiInstagramFill1 />
      <RiTwitterFill1 />
      <RiYoutubeFill1 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[135px] items-center leading-[0] relative shrink-0">
      <Group6 />
      <Group15 />
    </div>
  );
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const menuItems = [
    { id: 'profile', label: 'Profile', left: 0 },
    { id: 'janji-temu', label: 'Janji Temu Dokter', left: 122 },
    { id: 'patient-care', label: 'Patient Care', left: 388 },
    { id: 'layanan', label: 'Layanan Kesehatan', left: 581 },
    { id: 'kabar', label: 'Kabar Terbaru', left: 856 },
    { id: 'survey', label: 'Survey Kepuasan', left: 1092 }
  ];

  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-full z-50">
      <div className="relative w-full h-[276px]">
        <div className="h-[105px] w-full" />
        
        {/* Top Header */}
        <div className="absolute content-stretch flex gap-[82px] items-center left-[76px] top-[55px]">
          <button onClick={() => onNavigate('home')} className="cursor-pointer">
            <Frame1 />
          </button>
          <Frame31 />
        </div>

        {/* Navigation Bar */}
        <div className="absolute bg-white box-border content-stretch flex gap-[10px] h-[103px] items-center left-[192px] px-[35px] py-[30px] rounded-[35px] shadow-[0px_20px_40.74px_0px_rgba(157,194,242,0.44)] top-[115px] w-[1359px]">
          <div className="font-['Alkatra:Medium',sans-serif] font-medium grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[normal] place-items-start relative shrink-0 text-[26px] text-nowrap whitespace-pre">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`[grid-area:1_/_1] ml-[${item.left}px] mt-0 relative cursor-pointer hover:text-[#1378fd] transition-colors ${
                  currentPage === item.id ? 'text-[#1378fd]' : 'text-black'
                }`}
                style={{ marginLeft: `${item.left}px` }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
