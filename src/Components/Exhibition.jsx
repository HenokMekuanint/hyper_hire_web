import { useState, useEffect } from 'react';
import axios from 'axios';

const Exhibition = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(' https://api.testvalley.kr/main-exhibition/all');
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex overflow-x-auto p-4">
      {items.map(item => (
        <div key={item.mainExhibitionId} className="flex-none w-64 mr-4">
          <a href={item.linkUrl} target="_blank" rel="noopener noreferrer">
            <img src={item.pcImageUrl} alt={item.title} className="w-full h-auto rounded-lg shadow-md" />
            <div className="mt-2">
              <h2 className="text-lg font-bold">{item.title}</h2>
              <p className="text-sm">{item.description}</p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Exhibition;
