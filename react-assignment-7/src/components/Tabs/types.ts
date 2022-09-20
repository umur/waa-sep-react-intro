import { FC } from "react";

export interface TabsPanelProps {
  labels: { label: string; component: FC }[];
}

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
