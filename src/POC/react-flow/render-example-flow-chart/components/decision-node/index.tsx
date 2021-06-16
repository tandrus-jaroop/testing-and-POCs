import React from "react";
import "./index.css";
import { Handle, Position } from "react-flow-renderer";
import { DecisionNodeProps } from "./models";

export const DecisionNode = ({ data: { label } }: DecisionNodeProps) => {
    return (
        <div className="container">
            <div className="diamond">
                <Handle type="target" position={Position.Top}></Handle>
                <p>{label}</p>
                <Handle
                    type="source"
                    position={Position.Bottom}
                    id="yes"
                ></Handle>
            </div>
            <Handle
                id="no"
                className="right-target"
                type="source"
                position={Position.Right}
                style={{ top: "51%" }}
            ></Handle>
        </div>
    );
};
