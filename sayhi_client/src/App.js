import React, {} from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./style.css";

import VideoPlayer from "./Components/VideoPlayer";
import Notification from "./Components/Notification";
import Options from "./Components/Options";

const App = () => {
    return (
        <div className="Wrapper">
            <h1 className="heading">SayHI Video Chat</h1>

            <VideoPlayer />
            <Options>
                <Notification />
            </Options>
        </div>
    )
}

export default App;