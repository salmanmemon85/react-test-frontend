import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode, Autoplay } from "swiper/modules";


// Dummy Testimonials Data
const testimonials = [
    {
        name: "John M.",
        role: "Operations Lead",
        feedback: "This tool has completely transformed the way we work! It's intuitive, fast, and so easy to integrate with our current processes. Highly recommended!",
        image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
        name: "Mike T.",
        role: "Product Designer",
        feedback: "I've tried a lot of similar tools, but this one stands out. The features are top-notch, and the customer support is fantastic.",
        image: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
        name: "David R.",
        role: "Product Manager",
        feedback: "I've tried a lot of similar tools, and this one is the best! The features are fantastic, and it's so easy to use.",
        image: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
        name: "Kevin B.",
        role: "Freelancer",
        feedback: "I can't imagine going back to the old way of doing things. This product has made everything smoother and more efficient. It's a game changer!",
        image: "https://randomuser.me/api/portraits/men/4.jpg"
    },
    {
        name: "Robert S.",
        role: "Project Manager",
        feedback: "Incredible tool! I was able to automate so many tasks that used to take hours. It's a real time-saver!",
        image: "https://randomuser.me/api/portraits/men/5.jpg"
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <div className="testimonials-header">
                <h2>Our <span>Customers</span></h2>
                <p>What people say about us</p>
            </div>

            <Swiper
                slidesPerView={2.5}
                spaceBetween={20}
                freeMode={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                modules={[FreeMode, Autoplay]}
                speed={5000}
                loop={true}
                className="testimonial-slider"
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index} className="testimonial-card">
                        <div className="testimonial-content">
                            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                            <div>
                                <h4>{testimonial.name}</h4>
                                <p className="role">{testimonial.role}</p>
                                <p>{testimonial.feedback}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Swiper
                slidesPerView={2.5}
                spaceBetween={20}
                freeMode={true}
                autoplay={{ delay: 2500, disableOnInteraction: false, reverseDirection: true }}
                modules={[FreeMode, Autoplay]}
                speed={5000}
                loop={true}
                className="testimonial-slider"
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index} className="testimonial-card">
                        <div className="testimonial-content">
                            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                            <div>
                                <h4>{testimonial.name}</h4>
                                <p className="role">{testimonial.role}</p>
                                <p>{testimonial.feedback}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonials;
