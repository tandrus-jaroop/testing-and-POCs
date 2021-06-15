import React from "react";
import { Story, Meta } from "@storybook/react";
import { DecisionNode } from ".";
import ReactFlow from "react-flow-renderer";

export default {
    title: "POCs/React Flow/Components/Decision Node",
    component: DecisionNode,
} as Meta;

const Template: Story = (args) => {
    return (
        <div style={{ height: "500px", width: "500px" }}>
            <ReactFlow
                elements={[
                    {
                        id: "1",
                        type: "DecisionNode",
                        position: { x: 100, y: 100 },
                    },
                ]}
                nodeTypes={{ DecisionNode }}
            ></ReactFlow>
        </div>
    );
};

export const Primary = Template.bind({});
Primary.args = {};
