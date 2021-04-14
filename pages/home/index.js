import useSWR from "swr";
import styles from "./Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function HomePage() {
  // const { data, error } = useSWR('/api/hello');

  // if (error) return <div>failed to load</div>
  // if (!data) return <div>loading...</div>

  // // render data
  // return <div>hello {data.name}</div>

  const handleSubmit = e => {
    e.preventDefault();
    console.log("submit");
  };

  const handleEdit = () => {
    console.log("edit");
  };

  const handleDelete = () => {
    console.log("delete");
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-5">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title text-center">Add a project</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    placeholder="Title..."
                  />
                </div>
                <div className="form-group">
                  <textarea
                    rows="6"
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Description..."
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="repositoryURL"
                    className="form-control"
                    placeholder="Repository URL..."
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="pageURL"
                    className="form-control"
                    placeholder="Page URL..."
                  />
                </div>
                <div className="form-group">
                  <div className="custom-file">
                    <input
                      type="file"
                      name="image"
                      className="custom-file-input"
                      id="inputGroupFile01"
                    />
                    <label
                      htmlFor="inputGroupFile01"
                      className="custom-file-label"
                    >
                      Choose an image...
                    </label>
                  </div>
                </div>
                <button className={`btn ${styles.button_save} btn-block`}>
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-7 mt-5">
          <div className="table-responsive-sm">
            <div className="table-responsive-md">
              <table className="table table-hover table-md">
                <thead className="thead-dark">
                  <tr>
                    <th>Title</th>
                    <th>Page URL</th>
                    <th>Operations</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Title 1</td>
                    <td>https://something.com</td>
                    <td>
                      <button onClick={handleEdit} className="btn btn-sm m-1">
                        <FontAwesomeIcon icon={faEdit} /> Edit
                      </button>
                      <button onClick={handleDelete} className="btn btn-sm m-1">
                        <FontAwesomeIcon icon={faTrash} /> Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
