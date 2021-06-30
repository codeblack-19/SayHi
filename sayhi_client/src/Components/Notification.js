import React, { useContext } from "react";
import { Context } from "./MainModelContext";
import { Button } from "react-bootstrap"

const Notification = () => {
    const { answerCall, call, callAccepted } = useContext(Context);

    return (
        <>
            {
                call.isReceivedCall && !callAccepted && (
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px'}}>
                        <h5 className="m-0">{call.name} is Calling </h5>
                        <Button className="" variant="success" onClick={answerCall} size="sm" >
                            Answer
                        </Button>
                    </div>
                )
            }
        </>
    )
}

export default Notification;