import { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';

const App = () => {
  const photos = [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
    'https://images.unsplash.com/photo-1519985176271-adb1088fa94c',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    'https://images.unsplash.com/photo-1454023492550-5696f8ff10e1',
    'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
    'https://images.unsplash.com/photo-1519985176271-adb1088fa94c',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    'https://images.unsplash.com/photo-1454023492550-5696f8ff10e1',
    'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
  ];
  const [curtainUp, setCurtainUp] = useState(false);
  const [showCurtain, setShowCurtain] = useState(true);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCurtainClick = () => {
    setCurtainUp(true);
  };

  const handleCurtainTransitionEnd = () => {
    if (curtainUp) setShowCurtain(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">

      {showCurtain && (
        <div
          className={`absolute top-0 left-0 w-full h-full transition-transform duration-1000 ease-in-out z-50 ${curtainUp ? 'translate-y-[-100%]' : 'translate-y-0'}`}
          style={{
            backgroundImage: "url('/images/bg_main.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          onClick={handleCurtainClick}
          onTransitionEnd={handleCurtainTransitionEnd}
        >
          <div className='flex items-start justify-center h-full'>
            <h1 className="text-6xl text-white font-bold text-center mt-10">
              RISHI'S COLLECTION
            </h1>
            <DownOutlined className='fixed bottom-10 text-4xl font-bold text-white animate-bounce' />
          </div>
        </div>
      )}

      {photos.map((photo, index) => (
        <div
          key={index}
          className={`flex w-full items-center justify-center transition-transform duration-1000 ${curtainUp
            ? index % 2 === 0
              ? 'animate-slide-in-top'
              : 'animate-slide-in-bottom'
            : 'opacity-0 translate-y-0'
            }`}
          style={{
            transitionDelay: curtainUp ? `${index * 5000}ms` : '0ms',
          }}
        >
          <img
            src={photo}
            alt={`${index + 1}`}
            className={`object-cover min-h-screen hover:scale-x-105 cursor-pointer transition-all duration-1000 ease-in-out ${expandedIndex === index ? 'w-[50vw] z-20' : 'w-full z-10'}`}
            style={{ maxWidth: '50vw', maxHeight: '100vh' }}
            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
          />
        </div>
      ))}
    </div>
  );
}

export default App;
