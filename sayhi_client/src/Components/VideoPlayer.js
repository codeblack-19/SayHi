import React, { useContext } from "react";
import { Context } from "./MainModelContext";

const VideoPlayer = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(Context);

    return (
        <div className="videoCompo container">
            <div className="video_wrapper row">
                {
                    stream && (
                        <div className="col-lg-6 col-md-6 mb-2">
                            <div className="videoBx">
                                <h4>{name || 'Name'}</h4>
                                <video playsInline muted ref={myVideo} autoPlay  />
                            </div>
                        </div>
                    )   
                }

                {
                    callAccepted && !callEnded && (
                        <div className="col-lg-6 col-md-6 mb-2">
                            <div className="videoBx">
                                <h4>{call.name || 'Name'}</h4>
                                <video playsInline ref={userVideo} autoPlay />
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default VideoPlayer;