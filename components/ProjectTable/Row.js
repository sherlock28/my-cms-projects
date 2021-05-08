import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import styles from "./styles/Row.module.css";
import { useAppContext, useUser, useGetProjectById } from "hooks";

export default function Row({ project }) {
  const { jwt } = useUser();

  const { setFieldsForm } = useGetProjectById();

  const {
    projectSelected,
    setProjectSelected,
    isFormEdit,
    setIsFormEdit,
  } = useAppContext();

  const shouldClassBeAdded =
    isFormEdit && projectSelected === project._id ? styles.is_edit_mode : "";

  const shouldItBeDeactivated =
    projectSelected !== project._id && isFormEdit ? true : false;

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
            setFieldsForm(project._id, jwt);
          }}
          className={`${styles.btn_edit} btn btn-sm m-1 ${shouldClassBeAdded}`}
          disabled={shouldItBeDeactivated}
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
