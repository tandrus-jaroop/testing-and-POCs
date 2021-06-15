import React from "react";
import { Story, Meta } from "@storybook/react";
import { BasicFlowProps } from "./models";
import { BasicFlow } from ".";

export default {
    title: "POCs/React Flow",
    component: BasicFlow,
    argTypes: {
        width: { control: "number", defaultValue: 500 },
        height: { control: "number", defaultValue: 200 },
    },
} as Meta;

interface BasicFlowStory extends BasicFlowProps {
    width: number;
    height: number;
}

const Template: Story<BasicFlowStory> = (args) => (
    <div
        style={{
            width: `${args.width}px`,
            height: `${args.height}px`,
            border: "1px solid black",
            listStyle: "none",
        }}
    >
        <BasicFlow elements={args.elements} />
    </div>
);

export const Primary = Template.bind({});
Primary.args = {};

export const ProcessAndDecisions = Template.bind({});
ProcessAndDecisions.args = {
    height: 700,
    width: 700,
    elements: [
        {
            id: "1",
            data: {
                label: (
                    <div>
                        <ul
                            style={{ listStyle: "none", margin: 0, padding: 0 }}
                        >
                            <li>Name: Foo...</li>
                            <li>Type: Special</li>
                            <li>Intro: "Lorum..."</li>
                        </ul>
                    </div>
                ),
            },
            position: { x: 250, y: 5 },
            style: {
                borderColor: "green",
                backgroundColor: "lightgreen",
                borderRadius: "50px",
            },
        },
        {
            id: "2",
            data: {
                label: "I am a decision",
            },
            position: { x: 250, y: 200 },
            style: {
            },
        },
    ],
};
