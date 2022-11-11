import React, { useState, useEffect, useMemo } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";

function factorial(n) {
    if (n < 0) {
        throw new RangeError(
            `Can't calculate factorial for negative value ${n}`
        );
    }
    return n ? n * factorial(n - 1) : 1;
}

function runFactorial(n) {
    console.log("run Factorial");
    return factorial(n);
}

const ComplexCalculateExample = () => {
    const FACTORIAL_INITIAL = 100;
    const FACTORIAL_SHIFT = 10;
    const [value, setValue] = useState(FACTORIAL_INITIAL);
    const [otherState, setOtherState] = useState(false);

    let fact;
    try {
        fact = useMemo(() => runFactorial(value), [value]);
    } catch (e) {
        console.error(e.message);
    }

    const buttonColor = otherState ? "primary" : "secondary";

    useEffect(() => {
        console.log("render button color");
    }, [buttonColor]);

    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <Divider />
                <p>Result factorial for {value}:</p>
                <p>{fact}</p>
                <button
                    className="btn btn-primary ms-md-2"
                    onClick={() =>
                        setValue((prevState) => prevState + FACTORIAL_SHIFT)
                    }
                >
                    Increment {FACTORIAL_SHIFT}
                </button>
                <button
                    className="btn btn-primary ms-md-2 ms-2"
                    onClick={() =>
                        setValue((prevState) => prevState - FACTORIAL_SHIFT)
                    }
                >
                    Decrement {FACTORIAL_SHIFT}
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button
                    className={"btn ms-md-2 btn-" + buttonColor}
                    onClick={() => setOtherState((prevState) => !prevState)}
                >
                    Change color
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
