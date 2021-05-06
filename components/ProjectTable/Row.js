import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import styles from "./styles/Row.module.css";
import { useAppContext } from "hooks";

export default function Row({ project }) {
  const { setProjectSelected } = useAppContext();

  return (
    <tr>
      <td>{project.title}</td>
      <td>
        <a href={`${project.pageURL}`} target="blanck">
          {project.pageURL}
        </a>
      </td>
      <td>
        <button className={`${styles.btn_edit} btn btn-sm m-1`}>
          <FaEdit /> Edit
        </button>
        <button
          onClick={() => setProjectSelected(project._id)}
          className={`${styles.btn_delete} btn btn-sm m-1`}
          data-toggle="modal"
          data-target="#exampleModal"
        >
          <FaTrash /> Delete
        </button>
      </td>
    </tr>
  );
}
