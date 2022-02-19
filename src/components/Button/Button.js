import React from "react";
import { CSVLink } from "react-csv";
import styles from "./Button.module.css";

const headers = [
  { label: 'id', key: 'id' },
  { label: 'type', key: 'type' },
  { label: 'x', key: 'position.x' },
  { label: 'y', key: 'position.y' },
  { label: 'source', key: 'source' },
  { label: 'target', key: 'target' },
  { label: 'targetHandle', key: 'targetHandle' },
  { label: 'time', key: 'data.time' },
  { label: 'timeUnit', key: 'data.timeUnit' },
  { label: 'message', key: 'data.message' },
];

const Button = ({children, label, type, elements}) => {
  if (label === "Save") {
    return (
      <CSVLink data={elements} headers={headers} className={`${styles.btn} ${type === "default" ? styles.defaultBtn : styles.primaryBtn}`}>
        <div>{label}</div>
        {children}
      </CSVLink>
    );
  }

  return (
    <button className={`${styles.btn} ${type === "default" ? styles.defaultBtn : styles.primaryBtn}`}>
      <div>{label}</div>
      {children}
    </button>
  );
}
 
export default Button;