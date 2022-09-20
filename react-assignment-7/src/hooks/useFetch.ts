import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { useEffect, useState } from "react";

const useFetch = (
  url: string,
  options: AxiosRequestConfig
): [AxiosResponse | undefined, unknown] => {
  const [response, setResponse] = useState<AxiosResponse>();
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await axios.request(options);
        setResponse(data);
      } catch (e: unknown) {
        setError(e);
      }
    };
    fetch();
  }, [url]);

  return [response, error];
};

export default useFetch;
