
export default function Qualification({ year, title, explaination }) {
    return (
        <div className="flex  ">
            <div className="mt-24 w-[50px] h-[4px] bg-blue-500"></div>
            <div className="flex ">
                <div className="flex  p-4  w-[490px] mt-2 bg-[#ECF0F3] hover:scale-105 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] hover:bg-blue-400 hover:text-white">
                    <div className="d-flex">
                        <div style={{ textAlign: "start" }}>
                            <div className="d-flex w-100 justify-content-between">
                                <h4 className="text-blue-500"
                                    style={{
                                        textShadow: "1px 1px 1px #000000"
                                    }}
                                >
                                    {title}
                                </h4>
                                <h6 className="text-[10px] font-bold mt-1">({year})</h6>
                            </div>
                            <hr className="mt-4" />

                            {explaination}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
