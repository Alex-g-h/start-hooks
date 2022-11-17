import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    const buttonProps = {
        login: {
            btnHandle: onLogin,
            label: "Log in"
        },
        logout: {
            btnHandle: onLogOut,
            label: "Log out"
        }
    };

    const btnParams = isAuth ? buttonProps.logout : buttonProps.login;

    return (
        <>
            <button className="btn btn-primary" onClick={btnParams.btnHandle}>
                {btnParams.label}
            </button>
        </>
    );
};

SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.bool
};

export default SimpleComponent;
