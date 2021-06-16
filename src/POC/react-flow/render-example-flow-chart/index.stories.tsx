import React from "react";
import { Story, Meta } from "@storybook/react";
import { BasicFlowProps } from "./models";
import { BasicFlow } from ".";

export default {
    title: "POCs/React Flow",
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
            id: "_1",
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
            id: "_2",
            data: {
                label: "{{firstName}} startsWith 'a' and {{age}} > 18",
            },
            type: "DecisionNode",
            position: { x: 250, y: 200 },
            style: {},
        },
        {
            id: "e1-2",
            source: "_1",
            target: "_2",
            type: "smoothstep",
        },
        {
            id: "_3",
            data: {
                label: (
                    <div>
                        <ul
                            style={{ listStyle: "none", margin: 0, padding: 0 }}
                        >
                            <li>Name: Contact for Minor</li>
                            <li>Type: Contact</li>
                            <li>Intro: "Lorum Ipsum..."</li>
                        </ul>
                    </div>
                ),
            },
            position: { x: 250, y: 500 },
        },
        {
            id: "e2-3",
            source: "_2",
            target: "_3",
            sourceHandle: "yes",
            type: "smoothstep",
            animated: true
        },
        {
            id: "_4",
            data: {
                label: (
                    <div>
                        <ul
                            style={{ listStyle: "none", margin: 0, padding: 0 }}
                        >
                            <li>Name: Contact for Adult</li>
                            <li>Type: Contact</li>
                            <li>Intro: "Lorum Ipsum..."</li>
                        </ul>
                    </div>
                ),
            },
            position: { x: 600, y: 500 },
        },
        {
            id: "e2-4",
            source: "_2",
            target: "_4",
            sourceHandle: "no",
            type: "smoothstep",
        },
        {
            id: "_5",
            data: {
                label: (
                    <div>
                        <ul
                            style={{ listStyle: "none", margin: 0, padding: 0 }}
                        >
                            <li>Name: Quotes</li>
                            <li>Type: Quote</li>
                            <li>Intro: "This is a quote for you!"</li>
                        </ul>
                    </div>
                ),
            },
            position: { x: 250, y: 700 },
            style: {
                borderColor: "red",
                backgroundColor: "pink",
                borderRadius: "50px",
            },
        },
        {
            id: "e3-5",
            source: "_3",
            target: "_5",
            type: "smoothstep",
        },
        {
            id: "e4-5",
            source: "_4",
            target: "_5",
            type: "smoothstep",
        },
    ],
};
