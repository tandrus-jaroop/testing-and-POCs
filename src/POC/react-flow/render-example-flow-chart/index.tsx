import React from "react";
import ReactFlow from "react-flow-renderer";
import { BasicFlowProps } from "./models";
import { DecisionNode } from "./components/decision-node";

const defaultElements = [
    { id: "1", data: { label: "Something new" }, position: { x: 250, y: 5 } },
    // you can also pass a React component as a label
    {
        id: "2",
        data: { label: <div>Node 2</div> },
        position: { x: 100, y: 100 },
    },
    { id: "e1-2", source: "1", target: "2", animated: true },
];
/**
 * react-flow requires it's parent to have a height and width in order to render correctly
 * @returns
 */
export const BasicFlow = ({ elements = defaultElements }: BasicFlowProps) => (
    <ReactFlow nodeTypes={{ DecisionNode }} elements={elements} />
);
