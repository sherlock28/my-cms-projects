import React from "react";
import { useForm, useUser, useAppContext } from "hooks";
import styles from "./FormProject.module.css";
import Spinner from "components/Spinner";

export default function FormProject() {
  const { jwt } = useUser();
  const {
    isFormEdit,
    title,
    description,
    repositoryURL,
    pageURL,
  } = useAppContext();

  const { handleChange, handleSubmit, isSubmiting } = useForm();

  return (
    <form
      onSubmit={e => handleSubmit(e, { jwt })}
      encType="multipart/form-data"
      autoComplete="off"
    >
      <div className="form-group">
        <input
          value={title || ""}
          onChange={handleChange}
          type="text"
          name="title"
          className="form-control"
          placeholder="Title..."
          required
        />
      </div>
      <div className="form-group">
        <textarea
          value={description || ""}
          onChange={handleChange}
          rows="6"
          type="text"
          name="description"
          className="form-control"
          placeholder="Description..."
          required
        />
      </div>
      <div className="form-group">
        <input
          value={repositoryURL || ""}
          onChange={handleChange}
          type="text"
          name="repositoryURL"
          className="form-control"
          placeholder="Repository URL..."
          required
        />
      </div>
      <div className="form-group">
        <input
          value={pageURL || ""}
          onChange={handleChange}
          type="text"
          name="pageURL"
          className="form-control"
          placeholder="Page URL..."
          required
        />
      </div>
      <div className="form-group">
        <div className="custom-file">
          <input
            onChange={handleChange}
            type="file"
            name="image"
            className="custom-file-input"
            id="inputGroupFile01"
            accept="image/gif,image/png,image/jpeg,image/jpg"
            required
          />
          <label htmlFor="inputGroupFile01" className="custom-file-label">
            Choose an image...
          </label>
        </div>
      </div>
      <button
        className={`btn ${styles.button_save} btn-block mb-3`}
        disabled={isSubmiting}
      >
        {isFormEdit ? "Update" : "Save"}
      </button>
      <div className={styles.spinner_container}>
        {isSubmiting && <Spinner height={"30px"} width={"30px"} />}
      </div>
    </form>
  );
}
