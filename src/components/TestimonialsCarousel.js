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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus fugiat a ipsum, amet cupiditate reprehenderit quod
            reiciendis voluptates voluptatum impedit. Architecto quisquam illum
            ipsum exercitationem temporibus aliquam voluptas voluptatibus
            obcaecati?
          </p>
        </div>
      </>
      <>
        <img src={avatar3} alt="Client 3" />
        <div className="myCarousel">
          <h3 class="animate-charcter">Artist - Thoe Htein </h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus fugiat a ipsum, amet cupiditate reprehenderit quod
            reiciendis voluptates voluptatum impedit. Architecto quisquam illum
            ipsum exercitationem temporibus aliquam voluptas voluptatibus
            obcaecati?
          </p>
        </div>
      </>
      <>
        <img src={avatar4} alt="Client 4" />
        <div className="myCarousel">
          <h3 class="animate-charcter">EZ going</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus fugiat a ipsum, amet cupiditate reprehenderit quod
            reiciendis voluptates voluptatum impedit. Architecto quisquam illum
            ipsum exercitationem temporibus aliquam voluptas voluptatibus
            obcaecati?
          </p>
        </div>
      </>
    </Carousel>
  );
}

export default TestimonialsCarousel;
