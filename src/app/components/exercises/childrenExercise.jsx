// import React, { useRef } from "react";
import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const withChildren = (Component) => (props) => {
    const tmp = { ...props };

    return (
        <Component>
            {React.Children.map(tmp?.children, (child, index) => {
                return React.cloneElement(child, {
                    ...child.props,
                    ordernumber: index
                });
            })}
        </Component>
    );
};

const CollapseWrapperWithChildren = withChildren(CollapseWrapper);

const ChildrenExercise = () => {
    return (
        <CollapseWrapperWithChildren title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>

            <Component />
            <Component />
            <Component />
        </CollapseWrapperWithChildren>
    );
};

const Component = ({ ordernumber }) => {
    return <div>#{ordernumber} Компонент списка</div>;
};

Component.propTypes = {
    ordernumber: PropTypes.number
};

export default ChildrenExercise;
