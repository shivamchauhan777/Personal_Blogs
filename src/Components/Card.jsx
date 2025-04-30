import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import card from '../api/card';

const Card = () => {
  return (
    <div className="w-full h-auto  -black bg-white text-white p-2">
      <Swiper
        spaceBetween={20}
        breakpoints={{
          1280: { slidesPerView: 4 },// Desktop - 4 cards
          768: { slidesPerView: 2 },  // Tablet - 2 cards
          0: { slidesPerView: 1 },    // Mobile - 1 card
        }}
      >
        {card.map((ele) => (  
          <SwiperSlide key={ele.id}>
            <div className="w-[300px] cursor-pointer  mx-auto h-[80%] flex flex-col bg-[#F4F0F8] rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 p-2 ">
              <img
                className="w-full h-48 object-cover rounded-xl"
                src={`images/image${ele.id}.png`}
                alt="Card image"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 truncate">{ele.title}</h2>
                <div className="mt-4 flex items-center gap-5  -black">
                  <p
                    className={`text-gray-600 mt-2 text-sm h-20 w-20 rounded-full truncate` }
                    style={{backgroundImage: `url(/images/man${ele.id}.png)`,backgroundSize:"cover",backgroundPosition:"center"}}
                  >
                  
                  </p>
                  <div className="text-black">
                    <h1 className="text-xl font-bold">{ele.name}</h1>
                    <h1>{ele.time}</h1>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Card;
