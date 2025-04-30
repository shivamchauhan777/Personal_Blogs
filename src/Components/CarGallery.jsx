import React from 'react';  
import carData from '../api/carData';
const CarGallery = () => {
  return (
   <div className='w-full h-full bg-[#232536]'>
     <div className="p-5 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-white">Car Gallery</h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {carData.map((car, index) => (
          <div key={index} className="rounded overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow duration-300">
            <img
              src={car.img}
              alt={car.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-3">
              <h3 className="text-lg font-medium text-gray-800">{car.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
   </div>
  );
};

export default CarGallery;
