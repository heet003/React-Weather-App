import React from "react";
import "./Table.css";

function Table(props) {
  return (
    <table>
      <tr>
        <td>{props.td1}</td>
        <td>{props.td2}</td>
      </tr>
    </table>
  );
}

export default Table;
