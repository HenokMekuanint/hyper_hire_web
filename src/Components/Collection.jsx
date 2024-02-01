import { useState, useEffect } from 'react';
import axios from 'axios';

const Collection = () => {
  const [items, setItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.testvalley.kr/collections?prearrangedDiscount');
        setItems(response.data.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < items.length - 4) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + direction;
        if (nextIndex > 2) {
          setDirection(-1);
          return prevIndex - 1;
        } else if (nextIndex < 0) {
          setDirection(1);
          return prevIndex + 1;
        }
        return nextIndex;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [direction, items]);

  return (
    <div>
      {items.map(item => (
        (item.type === 'SINGLE' && item.viewType === 'TILE') ? (
          <div key={item.id} className="slider-container flex items-center justify-between max-w-screen-lg mx-auto px-4 py-8">
            <div className="slider-title flex-1 flex flex-col justify-between">
            <div>
                <p className='text-xl font-bold'>{item.title}</p>
                <p className='text-sm text-gray-400'>{item.subtitle}</p>
            </div>
            <div className='text-gray-500'>
                <span className="controller prev cursor-pointer" onClick={handlePrev}>{"<"}</span>
                <span className="controller next cursor-pointer" onClick={handleNext}>{">"}</span>
            </div>
            </div>


            <div className="flex items-center w-3/4 overflow-hidden relative">
              <div className="flex transition-transform" style={{ transform: `translateX(-${currentIndex * 25}%)` }}>
                {item.items.slice(currentIndex, currentIndex + 4).map((com, index) => (
                  <div key={index} className="slider-item w-1/4 px-2">
                    <img src={com.publication.media[0].uri} alt={com.fileName} className="m-1" />
                    <div>
                    {com.publication.tagsOnImage[0]&&<button className='bg-green-600 text-white p-1 border rounded-[4px]'>{com.publication.tagsOnImage[0]}</button>}
                    </div>
                    {com.publication.title}
                    <div className='font-bold text-xl'>
                    {com.publication.priceInfo.couponDiscountRate && <span className='text-red-500 '>{com.publication.priceInfo.couponDiscountRate+'%'} </span>}
                    <span>{com.publication.priceInfo.price}</span>
                    </div>
                    {com.publication.tagsOnDesc[0]&&<button className='bg-gray-200 p-1 text-[10px] w-12 h-6 border rounded-[4px]'>{com.publication.tagsOnDesc[0]}</button>}
                    
                  </div>
                ))}
              </div>
            </div>

            
          </div>
        ) : null
      ))}
    </div>
  );
};

export default Collection;
