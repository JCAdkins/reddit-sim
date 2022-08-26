import React, { useEffect, useState } from "react";

import Submissions from "./components/Submissions/Submissions";
import useHttp from "./hooks/useHttp";

function App() {
  const [submissions, setSubmissions] = useState([]);

  const { isLoading, error, sendRequest: fetchSubmissions } = useHttp();

  useEffect(() => {
    const transformSubmissions = (submissionObj) => {
      const loadedSubmissions = [];

      for (const submissionKey in submissionObj) {
        loadedSubmissions.push({ id: submissionKey, text: submissionObj[submissionKey].Body });
      }

      setSubmissions(loadedSubmissions);
    };

    fetchSubmissions(
      { url: "http://redditapi.adadkins.com/submissions/"},
      transformSubmissions
    );
  }, [fetchSubmissions]);

  // const submissionAddHandler = (Submission) => {
  //   setSubmissions((prevSubmission) => prevSubmissions.concat(Submission));
  // };

  return (
    <React.Fragment>
      <Submissions
        items={submissions}
        loading={isLoading}
        error={error}
        onFetch={fetchSubmissions}
      />
    </React.Fragment>
  );
}

export default App;
