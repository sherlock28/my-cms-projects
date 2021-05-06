import React from "react";
import { useAppContext } from "hooks";
import { useDeleteProject } from "hooks";

export default function ModalDelete() {
  const { deleteProject } = useDeleteProject();
  const { projectSelected } = useAppContext();

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                ¿Estas seguro de que quieres eliminar este proyecto?
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Cancelar
              </button>

              <button
                onClick={() => deleteProject({ idProject: projectSelected })}
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
                Confimar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
