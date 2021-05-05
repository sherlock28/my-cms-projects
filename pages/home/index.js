import useSWR from "swr";
import { useState, useEffect } from "react";
import styles from "./Home.module.css";
import Navbar from "components/Navbar";
import { useRouter } from "next/router";
import { useUser } from "hooks";
import { postProjectService } from "services";
import { FaTrash, FaEdit } from "react-icons/fa";
import Footer from "components/Footer";

export default function HomePage() {
  // const { data, error } = useSWR('/api/hello');

  // if (error) return <div>failed to load</div>
  // if (!data) return <div>loading...</div>

  // // render data
  // return <div>hello {data.name}</div>
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [repositoryURL, setRepositoryURL] = useState("");
  const [pageURL, setPageURL] = useState("");
  const [image, setImage] = useState(null);

  const { isLogged, jwt } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLogged) {
      router.push("/");
    }
  }, [isLogged]);

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === "title") setTitle(value);
    if (name === "description") setDescription(value);
    if (name === "repositoryURL") setRepositoryURL(value);
    if (name === "pageURL") setPageURL(value);
    if (name === "image") setImage(e.target.files[0]);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("title", title);
    fd.append("description", description);
    fd.append("repositoryURL", repositoryURL);
    fd.append("pageURL", pageURL);
    fd.append("image", image);

    postProjectService({
      formData: fd,
      jwt,
    });
  };

  const handleEdit = () => {
    console.log("edit");
  };

  const handleDelete = () => {
    console.log("delete");
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-5">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center">Add a project</h3>
                <form
                  onSubmit={handleSubmit}
                  encType="multipart/form-data"
                  autoComplete="off"
                >
                  <div className="form-group">
                    <input
                      onChange={handleChange}
                      type="text"
                      name="title"
                      className="form-control"
                      placeholder="Title..."
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      onChange={handleChange}
                      rows="6"
                      type="text"
                      name="description"
                      className="form-control"
                      placeholder="Description..."
                    />
                  </div>
                  <div className="form-group">
                    <input
                      onChange={handleChange}
                      type="text"
                      name="repositoryURL"
                      className="form-control"
                      placeholder="Repository URL..."
                    />
                  </div>
                  <div className="form-group">
                    <input
                      onChange={handleChange}
                      type="text"
                      name="pageURL"
                      className="form-control"
                      placeholder="Page URL..."
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
                <table className="table table-md">
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
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
