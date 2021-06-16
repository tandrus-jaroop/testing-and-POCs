import { NodeComponentProps } from "react-flow-renderer";

export interface CustomProps {
    label: string
}

export type DecisionNodeProps = NodeComponentProps<CustomProps>;