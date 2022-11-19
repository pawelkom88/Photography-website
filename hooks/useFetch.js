import { useState, useEffect, useRef } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const cache = useRef({});

  useEffect(() => {
    if (!url) return;

    let didCancel = false;

    (async function fetchData() {
      setLoading(true);
      setError(null);

      try {
        if (cache.current[url]) {
          const data = cache.current[url];

          setData(data);
        }

        if (!didCancel) {
          const response = await fetch(url, {
            method: "GET",
            headers: {
              Accept: "application/json",
              Authorization: process.env.NEXT_PUBLIC_API_KEY,
            },
          });

          if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            setError(message);
            setLoading(false);
          }

          const data = await response.json();
          cache.current[url] = data;
          setData(data);
          setLoading(false);
        }

        setLoading(true);
      } catch (error) {
        const message = `An error has occured: ${error.message}`;
        setError(message);
        setLoading(false);
      }
    })();

    return () => (didCancel = true);
  }, [url]);

  return { data, loading, error };
}
