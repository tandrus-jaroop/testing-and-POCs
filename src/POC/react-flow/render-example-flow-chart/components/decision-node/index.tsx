import React from "react";
import "./index.css";
import { Handle, Position } from "react-flow-renderer";

export const DecisionNode = () => {
    return (
        <div className="container">
            <div className="diamond">
                <Handle type="target" position={Position.Top}></Handle>
                <p>Text Here</p>
                <Handle type="target" position={Position.Bottom}></Handle>
            </div>
            <Handle
                className="right-target"
                type="target"
                position={Position.Right}
                style={{ top: "51%" }}
            ></Handle>
        </div>
    );
};
