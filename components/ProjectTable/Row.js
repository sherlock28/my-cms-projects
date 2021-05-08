import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import styles from "./styles/Row.module.css";
import { useAppContext } from "hooks";

export default function Row({ project }) {
  const { setProjectSelected, isFormEdit, setIsFormEdit } = useAppContext();

  return (
    <tr>
      <td>{project.title}</td>
      <td>
        <a href={`${project.pageURL}`} target="blanck">
          {project.pageURL}
        </a>
      </td>
      <td>
        <button
          onClick={() => {
            setProjectSelected(project._id);
            setIsFormEdit(prev => !prev);
          }}
          className={`${styles.btn_edit} btn btn-sm m-1 ${
            isFormEdit ? styles.is_edit_mode : ""
          }`}
        >
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
