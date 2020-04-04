import * as React from "react";

interface IIconProps {
    name: string;
    size?: "small"|"medium"|"large";
    position?: "left"|"right";
    clickCallback?: () => void;
    color?: string;
}

const Icon = (props: IIconProps) => {

    const size = props.size || "medium";
    const position = props.position || "left";

    const handleIconClick = () => {
        if (props.clickCallback) {
            props.clickCallback();
        } 
    }

    return (
        <span onClick={handleIconClick} className={`icon-component icon is-${size} is-${position}`}>
            <i className={`icon-${props.name}`}></i>
        </span>
    );
};

export default Icon;
