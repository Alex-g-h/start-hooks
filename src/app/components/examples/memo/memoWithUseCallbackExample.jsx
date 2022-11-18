import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("render button");
    });

    return (
        <button className="btn btn-primary" onClick={onLogOut}>
            Log out
        </button>
    );
};

function areEqual(prevState, nextState) {
    if (prevState.onLogOut !== nextState.onLogOut) {
        return false;
    }
    return true;
}

const MemoizedLogOutButton = React.memo(LogOutButton, areEqual);

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(true);
    const handleLogOut = useCallback(() => {
        localStorage.removeItem("auth");
    }, [props]);

    const buttonClass = () => (state ? "primary" : "secondary");
    return (
        <>
            <button
                className={"btn me-2 btn-" + buttonClass()}
                onClick={() => setState(!state)}
            >
                Initiate rerender
            </button>
            <MemoizedLogOutButton onLogOut={handleLogOut} />
        </>
    );
};

LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};

export default MemoWithUseCallbackExample;
