import React, { useState } from 'react';
import { data } from '../data/data.js';

const ShowProducts = () => {
  const [clothings, setClothings] = useState(data);


  const filterType = (category) => {
    setClothings(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  return (
    <div>
      <div className='max-w-[1640px] mx-auto m-2'>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Fliter Type */}
        <div>
          <p className='font-bold mb-2 text-gray-700'>Filtro</p>
          <div className='flex justfiy-between flex-wrap mb-4'>
            <button
              onClick={() => setClothings(data)}
              className='m-1 border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white'
            >
              Todos
            </button>
            <button
              onClick={() => filterType('Camisas')}
              className='m-1 border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white'
            >
              Camisas
            </button>
            <button
              onClick={() => filterType('Calças')}
              className='m-1 border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white'
            >
              Calças
            </button>
            <button
              onClick={() => filterType('Vestidos')}
              className='m-1 border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white'
            >
              Vestidos
            </button>
          </div>
        </div>

        
      </div>

      {/* Display */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {clothings.map((item, index) => (
          <div
            key={index}
            className='border shadow-lg rounded-lg hover:scale-105 duration-300'
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex-wrap wrap justify-between  px-1 py-2'>
              <p className='font-bold text-sm mx-1 my-2'>{item.name}</p>
              <p className='flex flex-row-reverse'>
                <span className='bg-rose-500 text-white p-1 rounded-full'>
                  {` R$ ${item.price.toFixed(2)}`}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ShowProducts;
