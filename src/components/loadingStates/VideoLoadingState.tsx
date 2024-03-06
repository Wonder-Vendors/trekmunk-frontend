import Spinner from "../ui/Spinner"

const VideoLoadingState = ()=> {
    return(
        <div className="max-w-full h-screen max-h-screen flex items-end justify-end bg-zinc-800">
            <div className="p-10">
                <Spinner/>
            </div>
        </div>
    )
}
export default VideoLoadingState