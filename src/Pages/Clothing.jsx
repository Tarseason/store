import React, { useState } from 'react';
import { data } from '../data/data.js';
import { getFavorites } from  '../utils/favoriteFunc.js'
import ClothingCard from '../components/clothingCard.js';

import {filterPriceSame} from '../utils/filterPrice.js';

const Clothing = () => {
  const [clothings, setClothings] = useState(data);

  function isLocalStorage() {
    const inStorage = getFavorites();
    if (!inStorage) {
      localStorage.setItem("favorites", []);
    }
    return;
  }

  isLocalStorage();

  //   Filter Type
  const filterType = (category) => {
    setClothings(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  

  //   Filter by price
  const filterPrice = (price) => {
    const filterSame = filterPriceSame(data, price);
    console.log(filterSame)
    setClothings(filterSame)
    return;
  };

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-rose-600 mb-6 font-bold text-4xl text-center'>
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

        {/* Filter Price */}
        <div>
          <p className='font-bold text-gray-700 mb-2'>Filter Price</p>
          <div className='flex justify-between mb-4
           max-w-[390px] w-full'>
            <button
              onClick={() => filterPrice('$')}
              className='m-1 border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white'
            >
              $
            </button>
            <button
              onClick={() => filterPrice('$$')}
              className='m-1 border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white'
            >
              $$
            </button>
            <button
              onClick={() => filterPrice('$$$')}
              className='m-1 border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white'
            >
              $$$
            </button>
            <button
              onClick={() => filterPrice('$$$$')}
              className='m-1 border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white'
            >
              $$$$
            </button>
          </div>
        </div>
      </div>

      {/* Display Clothings */}
        
        {/* { 
          clothings.map((value) => <ClothingCard key={value.id} item={value}/>)
        } */}

        <div className='w-full border-red-300'>
        {     
          clothings.map((value) => <ClothingCard className="max-w-[1640px] m-auto px-4 py-12" key={value.id} item={value}/>)
        }
        </div>
      </div>
  );
};

export default Clothing;
