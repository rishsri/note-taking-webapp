import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ceo1 from "../../images/ceo1.jpg";
import ceo2 from "../../images/ceo2.jpg";
import ceo3 from "../../images/ceo3.jpg";
import "./style.css";

const testimonialsData = [
  {
    id: 1,
    imgSrc: ceo3,
    name: "Shirley Fultz",
    designation: "Designer",
    comment: "Efficient task management, my productivity skyrocketed!"
  },
  {
    id: 2,
    imgSrc: ceo2,
    name: "Daniel Keystone",
    designation: "Designer",
    comment: "Sleek interface, keeps me organized effortlessly."
  },
  {
    id: 3,
    imgSrc: ceo1,
    name: "Theo Sorel",
    designation: "Designer",
    comment: "Seamless collaboration, indispensable for team projects"
  }
];

const Testimonials = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={6100}
    >
      {testimonialsData.map((testimonial) => (
        <div key={testimonial.id}>
          <img src={testimonial.imgSrc} alt={`CEO ${testimonial.id}`} />
          <div className="myCarousel">
            <h3>{testimonial.name}</h3>
            <h4>{testimonial.designation}</h4>
            <p>{testimonial.comment}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Testimonials;
