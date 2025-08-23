import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom"; 

const products = [
  {
    id: 1,
    name: "Skinny fit jeans",
    rating: 4.1,
    price: 220,
    oldPrice: 260,
    discount: "-15%",
    image: "/assets/Skinny-fit-jeans.svg",
    link: "/jeans-details", 
  },
  {
    id: 2,
    name: "Checkered Shirt",
    rating: 4.2,
    price: 180,
    oldPrice: 220,
    discount: "-18%",
    image: "/assets/chekered-shirts.svg",
    link: "/checkered-shirt-details", 
  },
  {
    id: 3,
    name: "Courage Graphic T-Shirt",
    rating: 4.8,
    price: 99,
    oldPrice: 120,
    discount: "-10%",
    image: "/assets/courage-graphic-tshirt.svg",
    link: "/courage-tshirt-details",
  },
  {
    id: 4,
    name: "Loose Fit Bermuda Shorts",
    rating: 4.5,
    price: 350,
    oldPrice: 399,
    discount: "-12%",
    image: "/assets/loose-fit-shorts.svg",
    link: "/loose-shorts-details",
  },
  {
    id: 5,
    name: "Relaxed Fit Shorts",
    rating: 4.1,
    price: 220,
    oldPrice: 260,
    discount: "-15%",
    image: "/assets/relaxed-fit-shorts.svg",
    link: "/relaxed-shorts-details", 
  },
  {
    id: 6,
    name: "Faded Skinny Jeans",
    rating: 4.1,
    price: 220,
    oldPrice: 260,
    discount: "-15%",
    image: "/assets/faded-skinny-jeans.svg",
    link: "/skinny-jeans-details",
  },
];

const NewArrivals = () => {
  return (
    <section className="new-arrivals-section py-5" id="top-selling">
      <div className="custom-container">
        <h2 className="text-center fw-bold mb-4 title">TOP SELLING</h2>
        <Swiper
          slidesPerView={1.3}
          spaceBetween={12}
          breakpoints={{
            576: { slidesPerView: 1.8, spaceBetween: 12 },
            768: { slidesPerView: 2.3, spaceBetween: 12 },
            992: { slidesPerView: 3.2, spaceBetween: 12 },
            1200: { slidesPerView: 4.2, spaceBetween: 12 },
          }}
        >
          {products.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="card product-card">
                <Link to={item.link}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="card-img-top"
                  />
                </Link>
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <div className="rating mb-2">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>☆</span>
                    <span className="rating-text">&nbsp; {item.rating} / 5</span>
                  </div>
                  <div className="price-info d-flex align-items-center gap-2">
                    <span className="new-price">${item.price}</span>
                    <span className="old-price">${item.oldPrice}</span>
                    <span className="discount">{item.discount}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default NewArrivals;
