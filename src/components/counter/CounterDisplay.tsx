import {ReactNode} from "react";

type Props = {
    children: ReactNode;
};

export const CounterDisplay = ({children}: Props) => {
    return (
        <div className="counter-display">
            {children}
        </div>
    );
};