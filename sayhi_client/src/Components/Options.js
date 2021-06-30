import React, { useContext, useState } from "react";
import  { CopyToClipboard } from "react-copy-to-clipboard";
import { Context } from "./MainModelContext";
import {Button} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faPhoneSlash } from "@fortawesome/free-solid-svg-icons"

const Options = ({children}) => {
    const { me, callAccepted, name, setname, callEnded, leaveCall, callUser } = useContext(Context);
    const [idToCall, setidToCall] = useState('');


    return (
        <div className="Options">
            <div className="container">
                <div className="row m-0 opt1">
                    <div className="col-lg-6 col-md-6">
                        <div className="inner">
                            <h4 className="m-0">Account Info</h4>
                            <input type="text" placeholder="Name" defaultValue={name} onChange={(e) => setname(e.target.value)} />
                            <CopyToClipboard text={me} className="cp_hold">
                                <Button variant="primary">
                                    Copy Your Id
                                </Button>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="inner">
                            <h4 className="m-0">Make a call</h4>
                            <input type="text" placeholder="ID to Call" defaultValue={idToCall} onChange={(e) =>  setidToCall(e.target.value)} />
                            {
                                callAccepted && !callEnded ? (
                                    <Button variant="danger" onClick={leaveCall} >
                                      <FontAwesomeIcon icon={faPhoneSlash} />  Hang up
                                    </Button>
                                ) : (
                                    <Button variant="success" onClick={() => callUser(idToCall)} >
                                       <FontAwesomeIcon icon={faPhoneAlt} />  Call
                                    </Button>
                                )
                            }
                        </div>
                    </div>
                </div>
                {children}
            </div>
        </div>
    )
}

export default Options;