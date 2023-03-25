import { useState, useEffect } from 'react';

function Quotes() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, showerror] = useState(false);

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
      const response = await fetch(apiURL, options).catch((error) => {
        showerror(true);
        return error;
      });
      const json = await response.json();
      setData(json);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>error loading quotes...</div>;

  return (
    <div className="quotes">
      {data.map((element) => `${element.quote} - ${element.author}`) }
    </div>
  );
}

export default Quotes;
