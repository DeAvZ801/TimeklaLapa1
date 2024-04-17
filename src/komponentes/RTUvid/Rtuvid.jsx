import React from "react";
import "./rtuvid.css";
import RTUvid from "../../media/rtuvid.mp4";

function Rtuvid() {
    return (
        <div>
            <div className="large-img__container">
                <h1 className="video-title">Video tiek palaists uzreiz</h1>
                <div className="video-container">
                    <video
                        src={RTUvid}
                        controls
                        autoPlay
                        loop
                        muted
                        width="100%"
                        height="auto"
                    />
                </div>
            </div>
        </div>
    );
}

export default Rtuvid;
