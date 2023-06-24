export default function ProjectCard(props) {
    const { img, title, url } = props;
    return (
      <div className="br xs:mt-5 xl:mt-0  p-4 h-[400px] bg-[#ECF0F3]  drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] hover:scale-95   w-[450px]  hover:bg-blue-400">
        <a target="_blanck" href={url} > <img className="br live-preview   " src={img} alt={title} /></a>
       <h5 style={{ color: "black", textShadow: "1px 1px 1px" }}>{title}</h5>
      </div>
    );
  }