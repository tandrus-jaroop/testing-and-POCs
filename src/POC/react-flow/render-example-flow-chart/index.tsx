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
 * -react-flow requires it's parent to have a height and width in order to render correctly
 * -nodeTypes allow you to add custom nodes, to add them just use the name of the component
 * or create a property key, then reference it in the node you want to use by specifying the type
 * @returns
 */
export const BasicFlow = ({ elements = defaultElements }: BasicFlowProps) => {
    return (
        <ReactFlow
            nodeTypes={{ DecisionNode }}
            elements={elements}
            onElementClick={(e, el) => {
                console.log(`element was clicked: ${el.id}`, el, e);
            }}
        />
    );
};
