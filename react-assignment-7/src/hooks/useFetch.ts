import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { option } from "yargs";

const useFetch = (): [
  (url: string, otpions: AxiosRequestConfig) => {},
  AxiosResponse | undefined,
  unknown
] => {
  const [response, setResponse] = useState<AxiosResponse>();
  const [error, setError] = useState<unknown>();

  const fetch = async (url: string, options: AxiosRequestConfig) => {
    if (options.url) {
      try {
        const data = await axios.request(options);
        setResponse(data);
      } catch (e: unknown) {
        setError(e);
      }
    }
  };

  return [fetch, response, error];
};

export default useFetch;
