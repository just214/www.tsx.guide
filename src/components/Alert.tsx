import React from "react";
import { Flex } from "./Flex";
import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

type AlertProps = {
  type: "success" | "danger";
  message: string;
};

export const Alert = ({ type, message }: AlertProps) => {
  const Icon = type === "success" ? FaExclamationTriangle : FaCheckCircle;
  return (
    <div className={`admonition admonition-${type} alert alert--${type}`}>
      <Flex>
        <Icon size={30} color={`var(--ifm-color-${type}-darkest)`} />
        <h4 style={{ margin: "0px 10px" }}>{message}</h4>
      </Flex>
    </div>
  );
};
