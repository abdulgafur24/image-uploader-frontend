import axios from "axios";
import { useState } from "react";

const api = axios.create({
  baseURL: "http://localhost:3000/api/",
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

interface IResponse {
  id: number;
  created_at: string;
  updated_at: string;
  url: string;
}

export default () => {
  const [response, setResponse] = useState<IResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const upload = (data: FormData) => {
    setLoading(true);
    api
      .post("/images", data)
      .then((response) => {
        setResponse(response.data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return {
    response,
    loading,
    error,
    upload,
  };
};
