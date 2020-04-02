import * as React from "react";
import "./Button.scss";

interface IButtonProps {
    label: string;
    clickHandler: (value: any) => void;
    name: string;
}

const Button = (props: IButtonProps) => {


    return (
        <div className={"button-component"}>
            <button onClick={() => {props.clickHandler(props.name); }} value={"this"}>
                <div>{props.label}</div>
            </button>
        </div>
    );
};

export default Button;
