import React, { useState, useEffect } from 'react';
import './App.css';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';

function App() {
  const [images, setImage] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}s&image_type=photo&pretty=true`
    )
      .then(res => res.json())
      .then(data => {
        setImage(data.hits);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, [term]);
  return (
    <div className='container mx-auto'>
      <ImageSearch searchTerm={text => setTerm(text)} />
      {!isLoading && images.length === 0 && (
        <h1 className='max-w-sm mx-auto text-2xl text-gray-500 font-bold'>
          No Images Found
        </h1>
      )}

      {isLoading ? (
        <h1 className='max-w-sm mx-auto text-gray-500 font-bold'>
          Loading ...
        </h1>
      ) : (
        <div className='grid grid-cols-3 gap-4'>
          {images.map(image => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
