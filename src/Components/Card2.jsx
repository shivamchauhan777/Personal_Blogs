import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Card2 = () => {
    const cards = [
        {
            title: 'Car Reviews',
            image: 'images/car1.png',
        },
        {
            title: 'Maintenance Tips',
            image: 'images/car2.png',
        },
        {
            title: 'Car Modifications',
            image: 'images/car3.png',
        },
        {
            title: 'Driving Tips',
            image: 'images/car4.png',
        },
    ];

    return (
        <div className="bg-white border-red-500 w-full px-5   py-5">
            <Swiper
                spaceBetween={20}
                breakpoints={{
                    1280: { slidesPerView: 4 },
                    768: { slidesPerView: 2 },
                    0: { slidesPerView: 1 },
                }}
            >
                {cards.map((card, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-80 bg-[#f4f0f8] rounded-xl border-black h-96 flex flex-col items-center gap-5 py-10   mx-auto">
                            <div
                                className="w-32 h-32 border-black rounded-full bg-cover bg-center"
                                style={{ backgroundImage: `url(${card.image})` }}
                            ></div>


                            <h1 className="text-3xl font-bold">{card.title}</h1>
                            <p className="text-lg text-center">
                            A perfect blend of power, design, and cutting-edge technology.
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Card2;
