import useSWR from "swr";
import styles from "./Home.module.css";

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

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-5">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">Add a project</h5>
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
                <button className={`btn ${styles.button_save} btn-block`}>Save</button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-7"></div>
      </div>
    </div>
  );
}
