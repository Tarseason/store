import React, { useState } from 'react';
import { data } from '../data/data.js';

const Clothing = () => {
  //   console.log(data);
  const [clothings, setClothings] = useState(data);

  //   Filter Type burgers/pizza/etc
  const filterType = (category) => {
    setClothings(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //   Filter by price
  const filterPrice = (price) => {
    if (price === '$') {
      setClothings(
          data.filter((item) => {
            return item.price <= 50;
          })
        );
        return;
    }

    if (price === '$$') {
      setClothings(
        data.filter((item) => {
          return item.price > 50 && item.price <= 80;
        })
      );
      return;
    }
    if (price === '$$$') {
      setClothings(
        data.filter((item) => {
          return item.price > 80 && item.price <= 120;
        })
      );
      return;
    }
    if (price === '$$$$') {
      setClothings(
        data.filter((item) => {
          return item.price > 120   
        })
      );
      return;
    }
  };

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 mb-6 font-bold text-4xl text-center'>
      Vestuário Altamente Avaliado
      </h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Fliter Type */}
        <div>
          <p className='font-bold mb-2 text-gray-700'>Filter Type</p>
          <div className='flex justfiy-between flex-wrap mb-4'>
            <button
              onClick={() => setClothings(data)}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Todos
            </button>
            <button
              onClick={() => filterType('Camisas')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Camisas
            </button>
            <button
              onClick={() => filterType('Calças')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Calças
            </button>
            <button
              onClick={() => filterType('Vestidos')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Vestidos
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className='font-bold text-gray-700 mb-2'>Filter Price</p>
          <div className='flex justify-between mb-4
           max-w-[390px] w-full'>
            <button
              onClick={() => filterPrice('$')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              $
            </button>
            <button
              onClick={() => filterPrice('$$')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              $$
            </button>
            <button
              onClick={() => filterPrice('$$$')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice('$$$$')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* Display foods */}
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
                <span className='bg-orange-500 text-white p-1 rounded-full'>
                  {` R$ ${item.price.toFixed(2)}`}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clothing;
