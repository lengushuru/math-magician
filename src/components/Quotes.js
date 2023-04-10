import { useState, useEffect } from 'react';

function Quotes() {
  const [data, setData] = useState([{ author: 'German Proverb', quote: 'Who begins too much accomplishes little.' }]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const apiURL = 'https://api.api-ninjas.com/v1/quotes?category=success';
      const options = {
        headers: {
          'X-Api-Key': 'QyNqU7BO+mOh0A4vr4gX3A==7XFXB69hV6VonZGg',
        },
        method: 'GET',
      };
      try {
        const response = await fetch(apiURL, options);
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading quotes...</div>;

  return (
    <div className="quotes">
      {data.map((element) => `${element.quote} - ${element.author}`)}
    </div>
  );
}

export default Quotes;
