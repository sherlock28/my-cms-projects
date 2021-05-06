import useSWR from "swr";
import { useEffect } from "react";
import styles from "./Home.module.css";
import Navbar from "components/Navbar";
import { useRouter } from "next/router";
import { useUser, useForm, useGetProjects } from "hooks";
import ProjectTable from "components/ProjectTable";
import Footer from "components/Footer";
import Spinner from "components/Spinner";

export default function HomePage() {
  // const { data, error } = useSWR('/api/hello');

  // if (error) return <div>failed to load</div>
  // if (!data) return <div>loading...</div>

  // // render data
  // return <div>hello {data.name}</div>
  const { isLogged, jwt } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLogged) {
      router.push("/");
    }
  }, [isLogged]);

  const { isLoading, projects } = useGetProjects({ jwt });

  const {
    title,
    description,
    repositoryURL,
    pageURL,
    handleChange,
    handleSubmit,
    isSubmiting,
  } = useForm();

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-3">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title text-center">Add a project</h3>
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
                      <label
                        htmlFor="inputGroupFile01"
                        className="custom-file-label"
                      >
                        Choose an image...
                      </label>
                    </div>
                  </div>
                  <button
                    className={`btn ${styles.button_save} btn-block mb-3`}
                    disabled={isSubmiting}
                  >
                    Save
                  </button>
                  <div className={styles.spinner_container}>
                    {isSubmiting && (
                      <Spinner height={"30px"} width={"30px"} color={"#09f"} />
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-9 mt-5">
            <ProjectTable projects={projects} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
