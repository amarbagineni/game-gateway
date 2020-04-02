import * as React from "react";
const { useEffect, useState } = React;
import Icon from "../Icon/Icon";
import "./input.scss";

export interface IInputProps {
    id: string;
    label?: string;
    defaultValue: string;
    placeholder?: string;
    icon?: string;
    iconPosition?: "left"|"right";
    onChange?: (value: string) => void;
    onClick?: () => void;
    onFocusOut?: (value: string) => void;
    isRequired?: boolean;
    readOnly?: boolean;
    disabled?: boolean;
}
const Input = (props: IInputProps) => {

    const [defaultValue, setDefaultValue] = useState(props.defaultValue);

    useEffect(() => {
        if (props.onChange) {
            props.onChange(defaultValue);
        }
    }, [defaultValue]);

    useEffect(() => {
        setDefaultValue(props.defaultValue);
    }, [props.defaultValue]);

    return (
        <div className={`input-component ${props.icon && `control has-icons-${props.iconPosition}`}`}>
            {props.label && <label>
                {props.label}
                {props.isRequired && <span className="is-required"> * </span>}
            </label>}
            <span className={"input-wrapper"}>
                <input
                    disabled={props.disabled}
                    readOnly={props.readOnly}
                    id={props.id}
                    type="text"
                    value={defaultValue}
                    placeholder={props.placeholder || ""}
                    onBlur={((e) => props.onFocusOut && props.onFocusOut(e.target.value)) }
                    onClick={() => props.onClick && props.onClick()}
                    onChange={(e) => setDefaultValue(e.target.value)}/>
                {props.icon && <Icon name={props.icon} size={"small"} position="right"></Icon>}
            </span>
        </div>
    );
};

export default Input;
