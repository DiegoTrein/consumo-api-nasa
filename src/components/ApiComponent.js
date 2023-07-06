import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApiComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.nasa.gov/planetary/apod?api_key=vdMHpwQDdnJ9e3FSbUEqNeVYNNzMmb1eT27gkhFs'
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Exemplo de Consumo de API da NASA</h1>
      {data.title && (
        <div>
          <h2>{data.title}</h2>
          <img src={data.url} alt={data.title} style={{ maxWidth: '500px' }} />
          <p>{data.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default ApiComponent;
