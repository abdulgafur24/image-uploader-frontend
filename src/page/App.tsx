import React from "react";
import { Card, Loading, Success, Uploader } from "components";
import useApi from "hooks";
import "./App.css";

function App() {
  const { loading, response, error, upload } = useApi();

  const handleUpload = (file: File) => {
    let data = new FormData();
    data.append("image", file, file.name);
    upload(data);
  };

  return (
    <div className="App">
      <Card>
        {loading ? (
          <Loading />
        ) : (
          (!response && <Uploader handleUpload={handleUpload} />) ||
          (response && <Success link={response.url} />) ||
          (error && <h1>Error</h1>)
        )}
      </Card>
    </div>
  );
}

export default App;
