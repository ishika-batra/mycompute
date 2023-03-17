const PublishJobs = () => {
  return (
    <section className="section">
      <div className="section-center">
        <div className="title">
          <h1 className="page-title">Publish Jobs</h1>
          <div className="title-underline"></div>
        </div>

        <form className="form">
          <article className="publish-form">
            <div>
              <label htmlFor="data-publish">👉🏻 Data Publish:</label>
              <input
                type="file"
                required
                placeholder="Name"
                className="form-item"
              />
            </div>

            <div>
              <label htmlFor="data-publish">👉🏻 Execution Algo Publish:</label>
              <input
                type="file"
                required
                placeholder="Name"
                className="form-item"
                accept=".py"
              />
            </div>

            <div>
              <label htmlFor="data-publish">
                👉🏻 Verification Algo Publish:
              </label>
              <input
                type="file"
                required
                placeholder="Name"
                className="form-item"
                accept=".py"
              />
            </div>

            <button className="submit-btn">Submit</button>
          </article>
        </form>
      </div>
    </section>
  );
};

export default PublishJobs;
