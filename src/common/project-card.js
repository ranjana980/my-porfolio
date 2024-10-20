export default function ProjectCard({ img, title, url, sortDescription,onClick,route,type }) {
  return (
    <div
    className="br xs:mt-5 xl:mt-0 p-2 pb-5 bg-[#ECF0F3] drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] hover:scale-95 w-[365px] hover:bg-blue-400"
    onClick={() => onClick(type, route)}
  >
    <a target="_blank" rel="noopener noreferrer" href={url}>
      <img
        className="br live-preview bg-[#ECF0F3] w-full h-full object-cover"
        src={img}
        alt={title}
      />
    </a>
    <h5 className="text-black mt-3 text-sm" style={{ color: "black", textShadow: "1px 1px 1px" }}>{title}</h5>
    {sortDescription && <div className="mt-2 ml-2 text-[14px]">{sortDescription}</div>}
  </div>
  
  );
}
