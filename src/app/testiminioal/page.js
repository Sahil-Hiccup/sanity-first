"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TestimonialCard from "../components/TestimonialCard";
import client from "../sanity/client";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const query = '*[_type == "testimonials"]';
      try {
        const data = await client.fetch(query);
        setTestimonials(data);  // Set the fetched data to state
      } catch (err) {
        console.error('Error fetching data from Sanity:', err);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="text-gray-600 body-font bg-[#ebebeb]">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
            Testimonials
          </h1>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
          </div>
        </div>

        {/* Swiper container for carousel */}
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500 }}
          loop={true}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial._id}>
              <TestimonialCard
                description={testimonial.description}  // Passed description here
                name={testimonial.Name}  // Passed Name here
                designation={testimonial.designation}  // Passed designation here
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
