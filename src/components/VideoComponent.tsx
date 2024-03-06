import { cn } from "@/lib/utils";

const VideoComponent = () => {
  return (
    <div
      className={cn(
        "h-[550px]",
        "relative max-w-full md:h-screen overflow-hidden brightness-[60%] lg:brightness-[30%] -z-10"
      )}
      
    >
      
      <video
        className="object-cover w-full h-full"
        autoPlay
        disableRemotePlayback
        disablePictureInPicture
        muted
        loop
        playsInline
        aria-label="video player"
      >
        <source
          src="https://trekmunk.b-cdn.net/home.webm"
          type="video/webm"
        
          
          media="(min-width:768px)"
        />
        <source
          src="https://trekmunk.b-cdn.net/home_mobile.webm"
          type="video/webm"
          
        />
        not supported by your browser
      </video>
      
    </div>
  );
};
export default VideoComponent;
