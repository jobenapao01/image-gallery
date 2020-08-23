import React, { useState } from 'react';

const ImageSearch = ({ searchTerm }) => {
  const [search, setSearch] = useState('');
  const submit = e => {
    e.preventDefault();
    searchTerm(search);
  };
  return (
    <div className='mb-5 max-w-sm mx-auto'>
      <form className='w-full max-w-sm' onSubmit={submit}>
        <div className='flex items-center border-b border-teal-500 py-2'>
          <input
            className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
            type='text'
            placeholder='Search Image'
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button
            className='flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded'
            type='submit'>
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
