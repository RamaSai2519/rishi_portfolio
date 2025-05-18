import Page from './components/Page';
import ImageModal from './components/ImageModal';
import React from 'react';

const App = () => {
  const photos = [
    // Replace these URLs with your own images
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308',
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e',
    'https://images.unsplash.com/photo-1519985176271-adb1088fa94c',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
    'https://images.unsplash.com/photo-1454023492550-5696f8ff10e1',
    'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429',
  ];

  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedPhoto, setSelectedPhoto] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(null);

  const handleImageClick = (photo, index) => {
    setSelectedPhoto(photo);
    setSelectedIndex(index);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedPhoto(null);
    setSelectedIndex(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      {photos.map((photo, index) => (
        <div key={index} className="flex w-full items-center justify-center">
          <Page>
            <img
              src={photo}
              alt={`${index + 1}`}
              className="object-cover w-full min-h-screen cursor-pointer transition-transform duration-200 ease-in-out hover:scale-95"
              onClick={() => handleImageClick(photo, index)}
            />
          </Page>
        </div>
      ))}
      <ImageModal
        isOpen={modalOpen}
        photo={selectedPhoto}
        title={`Photo ${selectedIndex !== null ? selectedIndex + 1 : ''}`}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default App;
