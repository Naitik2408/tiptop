import React, { useState, useEffect } from 'react'
import PopularDishesCard from '../compomnets/Home/PopularDishes/DishesCard'
import data from '../data.json'

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    'All', 'Beverages', 'Desserts', 'Breads', 'Rice & Pulav', 'Sandwiches', 'Paneer Dishes', 
    'Vegetarian Curries', 'Chicken Dishes', 'Shakes & Cold Drinks', 'Chinese', 'Biryani', 
    'Tandoori & Kababs', 'Thali'
  ];

  const filteredDishes = selectedCategory === 'All' 
    ? data.dishes 
    : data.dishes.filter(dish => dish.categories.includes(selectedCategory));

  return (
    <div className='px-4 md:px-20 lg:px-40 py-10 md:py-15 lg:py-20 flex flex-col items-center'>
      <div className='sigmar-regular text-3xl md:text-4xl lg:text-5xl'>Menu</div>
      <div className='mt-10 md:mt-15 lg:mt-20'>
        <div className='hidden md:flex flex-wrap justify-center gap-3 md:gap-5 lg:gap-8 poppins-medium'>
          {categories.map(category => (
            <div 
              key={category} 
              className={`px-3 md:px-5 py-2 md:py-3 rounded-2xl shadow-lg cursor-pointer transition-all duration-300 ${selectedCategory === category ? 'bg-red-400 text-white' : 'border border-stone-200 text-stone-600 hover:bg-red-400 hover:text-white'}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </div>
          ))}
        </div>
        <div>
          <select 
            className='block md:hidden w-full p-3 rounded-2xl shadow-lg border border-stone-200 mt-5 md:mt-8 lg:mt-10 poppins-medium outline-none'
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div className='flex flex-wrap justify-center gap-5 lg:gap-8 mt-5 md:mt-10 lg:mt-16'>
          {filteredDishes.map(dish => (
            <PopularDishesCard key={dish.id} dish={dish} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Menu