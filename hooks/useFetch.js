import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    let didCancel = false;

    (async function fetchData() {
      if (!didCancel) {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: process.env.NEXT_PUBLIC_API_KEY,
          },
        });

        const data = await response.json();
        setData(data);
      }
    })();

    return () => (didCancel = true);
  }, [url]);

  return { data };
}
