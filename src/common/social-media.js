import { socialMediaObjArr } from "../utils/constant";

export default function SocialMedia() {
  return (
    <div className="grid grid-cols-5 w-[300px] gap-1 mt-8 ">
      {socialMediaObjArr.map(({ link, icon },index) => (
        <div key={index} className="bg-[#f6f6f6] hover:scale-110 hover:text-[white] hover:bg-blue-500 hh-[45px] w-[40px] p-2   rounded-md bg-[#ECF0F3]  drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] ">
          <a
            className="hover:text-white hover:scale-120"
            href={link}
            target="_blank"
          >
            {icon}
          </a>
        </div>
      ))}
    </div>
  );
}
