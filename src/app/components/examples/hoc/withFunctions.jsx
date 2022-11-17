import React from "react";

const withFunctions = (Component) => (props) => {
    const onLogin = () => {
        localStorage.setItem("auth", "token");
    };

    const onLogOut = () => {
        localStorage.removeItem("auth");
    };

    const isAuth = localStorage.getItem("auth") === "token";

    return (
        <div className="card">
            <h5 className="card-header">Card</h5>
            <div className="card-body">
                <Component
                    onLogin={onLogin}
                    onLogOut={onLogOut}
                    isAuth={isAuth}
                />
            </div>
        </div>
    );
};

export default withFunctions;
