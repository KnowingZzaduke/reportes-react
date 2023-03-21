import VideoFondo from '/video/onde.mp4'
export function Fondo(){
    return (
        <div className="content_video-fondo">
        <video src={VideoFondo} autoPlay muted loop/>
        </div>
    )
}