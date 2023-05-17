import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import avatar1 from "../images/Avatar 1 .png";
import avatar2 from "../images/Avatar 2.png";
import avatar3 from "../images/Avatar 3.png";
import avatar4 from "../images/Avatar 4.png";

function TestimonialsCarousel() {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3500}
    >
     <>
        <img src={avatar4} alt="Client 4" />
        <div className="myCarousel">
          <h3 class="animate-charcter">Professor Sunny</h3>
          <p>
            I have two positive feedbacks to share with you: you have a lot of
            courage and perseverance. During our classes, even when I presented
            the most challenging topics, you had the courage to ask numerous
            questions, which allowed everyone, including those who are hesitant
            to speak up, to make progress. Congratulations to you for also
            having the necessary courage to complete such a demanding fullstack bootcamp.
          </p>
        </div>
      </>
      <>
        <img src={avatar1} alt="Client 1" />
        <div className="myCarousel">
          <h3 class="animate-charcter">Artist - Aung Ko </h3>
          <p>
            Maung Aka Mango who is always interested in learning and trying new
            things
          </p>
        </div>
      </>
      <>
        <img src={avatar2} alt="Client 2" />
        <div className="myCarousel">
          <h3 class="animate-charcter">Artist - Nge Lay </h3>
          <p>
            "Thank you so much for your help with the technical issues I was
            experiencing during my performance and exhibitions.
          </p>
        </div>
      </>
      <>
        <img src={avatar3} alt="Client 3" />
        <div className="myCarousel">
          <h3 class="animate-charcter">Artist - Thoe Htein </h3>
          <p>
            Embracing the philosophy of 'Done is better than perfect,' I
            consistently strived to provide efficient and reliable support,
            enabling Tho Htein to focus on his artistic endeavors. Eager to
            bring my expertise and dedication to your next project."
          </p>
        </div>
      </>

    </Carousel>
  );
}

export default TestimonialsCarousel;
