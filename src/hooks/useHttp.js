import React from "react";
import { useState } from "react";
function useHttp(requestConfig) {
  const [fetchData, setFetchData] = useState("");
  const [isLoding, setIsLoding] = useState(false);
  async function fetchApi() {
    setIsLoding(true);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
        headers: requestConfig.headers ? requestConfig.headers : {},
      });
      const data = await response.json();
      setFetchData(data.result);
      setTimeout(() => {
        setIsLoding(false);
      }, 500);
    } catch (error) {
      console.log(error);
    }
  }
  return { fetchData, fetchApi, isLoding };
}
export default useHttp;
