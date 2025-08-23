import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";
import "swiper/css";
import "./Testimonials.css";

const reviews = [
  {
    name: "Sarah M.",
    review:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    name: "Alex K.",
    review:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable.",
  },
  {
    name: "James L.",
    review:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection is diverse and trendy.",
  },
  {
    name: "Mooen",
    review:
      "Thrilled to have stumbled upon Shop.co. The clothes are trendy, affordable, and super comfortable. Love it!",
  },
  {
    name: "Samantha D.",
    review:
      "I'm blown away by the quality and style. Every piece I've bought has exceeded my expectations.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-5 bg-light color">
      <div className="container">
        <h2 className="fw-bold text-uppercase mb-5 text-wrap heading-responsive">
          Our <br className="d-sm-none" /> Happy Customers
        </h2>

        <Swiper
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
        >
          {reviews.map((r, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-4 p-4 shadow-sm h-100">
                <div className="d-flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-dark me-1" />
                  ))}
                </div>
                <h5 className="fw-semibold d-flex align-items-center mb-2">
                  {r.name}
                  <img
                    src="/assets/greentick.svg"
                    alt="verified"
                    className="ms-2"
                    style={{ width: "18px", height: "18px" }}
                  />
                </h5>
                <p className="text-muted m-0">{r.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
