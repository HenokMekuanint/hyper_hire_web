import { useState, useEffect } from 'react';
import axios from 'axios';

const HorizontalComponent = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.testvalley.kr/main-shortcut/all');
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const itemWidth = items.length > 0 ? `calc(100% / ${items.length})` : 'auto';

  return (
    <div className="flex justify-center max-w-[960px] p-4 mx-auto pt-20">
  {items.map(item => (
    <div key={item.mainShortcutId} className="flex-none m-2 max-w-[62px]" style={{ width: itemWidth }}>
      <a href={item.linkUrl} target="_blank" rel="noopener noreferrer">
        <img src={item.imageUrl} alt={item.title} className="w-full h-auto" />
        <div className="text-center mt-2 text-[13px]">{item.title}</div>
      </a>
    </div>
  ))}
</div>

  );
};

export default HorizontalComponent;

