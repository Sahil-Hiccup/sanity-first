"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonial = () => {
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

        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          className="max-w-9xl mx-auto"
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
          }}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="h-full bg-white/70 backdrop-blur-md shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 rounded-xl p-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-8 h-8 text-indigo-500 mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c..." />
              </svg>
              <p className="leading-relaxed text-gray-700 italic mb-6">
                “Synth chartreuse iPhone lomo cray raw denim brunch everyday
                carry neutra before they sold out fixie 90's microdosing.”
              </p>
              <div className="flex items-center">
                <div className="flex-grow">
                  <h2 className="text-gray-900 font-semibold text-md">
                    Holden Caulfield
                  </h2>
                  <p className="text-sm text-gray-500">UI Developer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="h-full bg-white p-8 shadow-md rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-8 h-8 text-indigo-500 mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c..." />
              </svg>
              <p className="leading-relaxed text-gray-700 italic mb-6">
                “Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard
                pabst authentic iceland.”
              </p>
              <div className="flex-grow">
                <h2 className="text-gray-900 font-semibold text-md">
                  Alper Kamu
                </h2>
                <p className="text-sm text-gray-500">Designer</p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="h-full bg-white/70 backdrop-blur-md shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 rounded-xl p-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="w-8 h-8 text-indigo-500 mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c..." />
              </svg>
              <p className="leading-relaxed text-gray-700 italic mb-6">
                “Another amazing testimonial about product or service goes here.”
              </p>
              <div className="flex items-center">
                <div className="flex-grow">
                  <h2 className="text-gray-900 font-semibold text-md">
                    Jane Doe
                  </h2>
                  <p className="text-sm text-gray-500">Marketing Lead</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
