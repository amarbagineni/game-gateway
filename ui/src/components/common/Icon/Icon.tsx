import * as React from "react";

interface IIconProps {
    name: string;
    size: "small"|"medium"|"large";
    position: "left"|"right";
    color?: string;
}

const Icon = (props: IIconProps) => {

    return (
        <span className={`icon is-${props.size} is-${props.position}`}>
            <i style={{color: props.color || "#555"}} className={`icon-${props.name}`}></i>
        </span>
    );
};

export default Icon;
