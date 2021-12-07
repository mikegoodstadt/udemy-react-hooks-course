import { useEffect, useState } from 'react';

function useCustomFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function customFetch(url) {
    try {
      let response = await fetch(url);
      let rData = await response.json();
      setData({rData});
      setLoading(false);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      if (url) {
        customFetch(url);
      }
    }, 3000);
  }, [url]);

  return [data, loading, error];
}

export default useCustomFetch;
