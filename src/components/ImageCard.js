import React from 'react';

const ImageCard = ({ image }) => {
  const tags = image.tags.split(',');
  return (
    <div className='shadow-lg rounded overflow-hidden max-w-sm'>
      <img src={image.webformatURL} alt='' className='w-full' />

      <div className='px-4 py-3'>
        <ul>
          <li>
            <strong>Photo by: </strong> {image.user}
          </li>
          <li>
            <strong>Likes: </strong> {image.likes}
          </li>
          <li>
            <strong>Downloads: </strong> {image.downloads}
          </li>
        </ul>
      </div>
      <div className='px-6 py-5'>
        {tags.map((tag, id) => (
          <span
            key={id}
            className='mt-2 mr-2 px-3 py-1 inline-block bg-gray-300 text-sm font-semibold text-purple-500 rounded-full'>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
