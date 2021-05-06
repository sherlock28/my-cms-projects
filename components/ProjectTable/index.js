import React from "react";
import Row from "./Row";

export default function ProjectTable({ projects, handleEdit, handleDelete }) {
  return (
    <>
      <div className="table-responsive-sm">
        <div className="table-responsive-md">
          <table className="table table-md">
            <thead className="thead-dark">
              <tr>
                <th>Title</th>
                <th>Page URL</th>
                <th>Operations</th>
              </tr>
            </thead>
            <tbody>
              {projects.map(project => {
                return (
                  <Row
                    key={project._id}
                    project={project}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
