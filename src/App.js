import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spinner, Button } from "react-bootstrap";
import Heatmap from "./Heatmap";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url =
      "https://mrsh6w0v48.execute-api.us-east-1.amazonaws.com/dev/resources";
    axios
      .get(url)
      .then((data) => setData(data.data))
      .catch((err) => console.log(err));
  }, []);

  const spinner = <Button variant="primary" disabled>
  <Spinner
    as="span"
    animation="grow"
    size="sm"
    role="status"
    aria-hidden="true"
  />
  Loading...
</Button>

  return (
    <div>
      <h1 className="text-center">Heatmap - Resource Allocation</h1>
      {data.length > 0 ? <Heatmap data={data} /> : spinner}
    </div>
  );
};

export default App;
