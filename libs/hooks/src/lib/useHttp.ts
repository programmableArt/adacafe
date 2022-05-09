import { useState, useCallback } from 'react';

export enum HttpMethods {
  Get = 'GET',
  Post = 'POST',
}

export type HttpConfig = {
  url: string;
  method?: HttpMethods;
  headers?: any;
  body?: any;
};

/// Use of hook
// ---------------
// const { isLoading, error, sendRequest: fechData } = useHttp();
//
// useEffect(() => {
//   const myCallback = (data) => {do something with data};
//   fechData({HttpConfig}, myCallback)
// }, [fechData])
///

export const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async (requestConfig: HttpConfig, reponseCallback: (data: any) => void) => {
      setIsLoading(true);
      setError(null);

      try {
        const { url, method, body, headers } = requestConfig;

        const response = await fetch(url, {
          method: method ? method : HttpMethods.Get,
          headers: headers ? headers : {},
          body: body ? JSON.stringify(body) : null,
        });

        if (!response.ok) {
          throw new Error(`Response Error: ${JSON.stringify(response)}`);
        }

        const data = await response.json();

        reponseCallback(data);
      } catch (errorResponse: any) {
        setError(errorResponse?.message || 'Something Went Wrong!');
      }

      setIsLoading(false);
    },
    []
  );

  return {
    isLoading,
    error,
    sendRequest,
  };
};
