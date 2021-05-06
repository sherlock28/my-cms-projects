import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import styles from "./styles/Row.module.css";
import { useDeleteProject } from "hooks";

export default function Row({ project }) {
  const { deleteProject } = useDeleteProject();

  return (
    <tr>
      <td>{project.title}</td>
      <td><a href={`${project.pageURL}`} target="blanck">{project.pageURL}</a></td>
      <td>
        <button
          onClick={() => {}}
          className={`${styles.btn_edit} btn btn-sm m-1`}
        >
          <FaEdit /> Edit
        </button>
        <button
          onClick={() => deleteProject({ idProject: project._id })}
          className={`${styles.btn_delete} btn btn-sm m-1`}
        >
          <FaTrash /> Delete
        </button>
      </td>
    </tr>
  );
}
