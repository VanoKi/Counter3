import {ReactNode} from "react";

type Props = {
    children: ReactNode;
};
export const ButtonWrapper = ({children}: Props) => {
    return (
        <div className={'button-wrapper'}>
            {children}
        </div>
    );
};