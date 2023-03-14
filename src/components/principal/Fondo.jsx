import VideoFondo from '/video/estrellas.mp4'
export function Fondo(){
    return (
        <div className="content_video-fondo">
            <video src={VideoFondo} autoPlay loop muted/>
        </div>
    )
}