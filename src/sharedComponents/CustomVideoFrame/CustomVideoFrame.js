export function CustomVideoFrame({ theme="dark",data={} }) {
    return (
        <div className="col-lg-4 col-md-4 col-sm-12">
            <div className="mediavideobox" >
                <iframe
                    width="100%"
                    height="100%"
                    src={data.videoUrl}
                    title={"hello"}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
                <div className="mediatxt mt-2">
                    <h5 className={`${theme == 'dark' ? "text-white" : "text-black"} text-[12px]  font-medium `}>Publish Date : {data.publishDate} </h5>
                    <p style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}
                        className={`${theme == 'dark' ? "text-white" : "text-black"} text-[14px]  font-semibold `}
                    >{"SRMB RealEdge dealer on the unmatched quality of the product"}</p>
                </div>
            </div>
        </div>
    )
}