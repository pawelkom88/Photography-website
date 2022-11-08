import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log(process.env.API_KEY);
  useEffect(() => {
    let didCancel = false;

    async function fetchData() {
      setLoading(true);

      try {
        if (!didCancel) {
          const response = await fetch(url, {
            method: "GET",
            headers: {
              Accept: "application/json",
              Authorization: process.env.NEXT_PUBLIC_API_KEY,
            },
          });

          if (!response.ok) {
            // const message = `An error has occured: ${response.status}`;

            setLoading(false);
          }
          const data = await response.json();
          setData(data);
          setLoading(false);
        }
      } catch {
        setLoading(false);
      }
    }
    fetchData();

    return () => (didCancel = true);
  }, [url]);

  return { data, loading };
}
