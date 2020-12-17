import React, { useCallback, useEffect, useState } from "react";

export default function RegistrationComponent(props) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [registerEnable, setRegisterEnable] = useState(false);
    const [errMsg, setErrMsg] = useState("");

    useEffect(() => {
        if (
            userName.length >= 8 &&
            password.length >= 8 &&
            confirmPassword.length >= 8
        ) {
            if (password === confirmPassword) {
                setRegisterEnable(true);
                setErrMsg("");
            } else {
                setRegisterEnable(false);
                setErrMsg("Password Mismatch");
            }
        } else {
            setRegisterEnable(false);
            setErrMsg("User name or password must be 8 or above character");
        }
    }, [userName, password, confirmPassword]);

    const handleChange = useCallback((name, event) => {
        //console.log(event,name);
        if (name === "userName") {
            setUserName(event.target.value);
        } else if (name === "password") {
            setPassword(event.target.value);
        } else if (name === "confirmPassword") {
            setConfirmPassword(event.target.value);
        }
    }, []);

    const registerClick = () => {
        console.log("Register Button Clicked");
    };

    return (
        <>
            {errMsg && <div style={{ color: "red" }}>{errMsg}</div>}
            <div>
                UserName:{" "}
                <input
                    type="text"
                    onChange={handleChange.bind(this, "userName")}
                    value={userName}
                />
            </div>
            <div>
                Password:{" "}
                <input
                    type="text"
                    onChange={handleChange.bind(this, "password")}
                    value={password}
                />
            </div>
            <div>
                Confirm Password:{" "}
                <input
                    type="text"
                    onChange={handleChange.bind(this, "confirmPassword")}
                    value={confirmPassword}
                />
            </div>
            <div>
                <button onClick={registerClick} disabled={!registerEnable}>
                    Register
        </button>
            </div>
        </>
    );
}
