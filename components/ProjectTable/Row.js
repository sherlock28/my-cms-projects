import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import styles from "./styles/Row.module.css";

export default function Row({ project, handleEdit, handleDelete }) {
  return (
    <tr>
      <td>{project.title}</td>
      <td>{project.repositoryURL}</td>
      <td>
        <button
          onClick={handleEdit}
          className={`${styles.btn_edit} btn btn-sm m-1`}
        >
          <FaEdit /> Edit
        </button>
        <button
          onClick={handleDelete}
          className={`${styles.btn_delete} btn btn-sm m-1`}
        >
          <FaTrash /> Delete
        </button>
      </td>
    </tr>
  );
}
