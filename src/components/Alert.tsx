import React from "react";
import { Flex } from "./Flex";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaInfoCircle
} from "react-icons/fa";

type AlertProps = {
  type: "success" | "danger" | "info";
  message: string;
};

const iconMap = {
  success: FaCheckCircle,
  info: FaInfoCircle,
  danger: FaExclamationTriangle
};

export const Alert: React.FC<AlertProps> = ({ type, message, children }) => {
  const Icon = iconMap[type];
  return (
    <div className={`admonition admonition-${type} alert alert--${type}`}>
      <Flex>
        <Icon
          style={{ display: "inline" }}
          size={30}
          color={`var(--ifm-color-${type}-darkest)`}
        />
        <h4 style={{ margin: "0px 10px" }}>{message}</h4>
      </Flex>
      {children && (
        <>
          <br />
          {children}
        </>
      )}
    </div>
  );
};
