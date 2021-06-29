import React from "react";
import ReactFlow, {
    Background,
    Elements,
    isNode,
    Node,
} from "react-flow-renderer";
import { BasicFlowProps } from "./models";
import { DecisionNode } from "./components/decision-node";
import dagre from "dagre";

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
    const dagreGraph = new dagre.graphlib.Graph();
    dagreGraph.setDefaultEdgeLabel(() => ({}));
    dagreGraph.setGraph({ rankdir: "TB" });

    const getLayoutedElements = (elements: Elements): Elements => {
        const getWidth = (n: Node) => (n.type === "DecisionNode" ? 280 : 170);
        const getHeight = (n: Node) => (n.type === "DecisionNode" ? 220 : 170);
        elements.forEach((el) => {
            if (isNode(el)) {
                const w = getWidth(el);
                const h = getHeight(el);
                dagreGraph.setNode(el.id, {
                    width: w,
                    height: h,
                });
            } else {
                dagreGraph.setEdge(el.source, el.target);
            }
        });
        console.log(dagreGraph);
        dagre.layout(dagreGraph);

        return elements.map((el) => {
            if (isNode(el)) {
                const nodeWithPosition = dagreGraph.node(el.id);
                el.position = {
                    x: nodeWithPosition.x - getWidth(el),
                    y: nodeWithPosition.y - getHeight(el),
                };
            }

            return el;
        });
    };

    return (
        <ReactFlow
            nodeTypes={{ DecisionNode }}
            elements={getLayoutedElements(elements)}
            onElementClick={(e, el) => {
                console.log(`element was clicked: ${el.id}`, el, e);
            }}
            onNodeDoubleClick={(e, el) => {
                console.log(`element was double-clicked: ${el.id}`, el, e);
            }}
            nodesConnectable={false}
            snapToGrid={true}
        >
            <Background></Background>
        </ReactFlow>
    );
};
