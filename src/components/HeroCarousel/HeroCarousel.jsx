import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './HeroCarousel.scss'

import image1 from '../../assets/images/carousel/image-1.png'
import image2 from '../../assets/images/carousel/image-2.jpg'
import image3 from '../../assets/images/carousel/image-3.jpg'

function HeroCarousel(){
  return(
  <Carousel autoPlay infiniteLoop>
    <div>
      <img src={image1} alt="Slide 1" />
      <p className="legend">Caption 1</p>
    </div>
    <div>
      <img src={image2} alt="Slide 2" />
      <p className="legend">Caption 2</p>
    </div>
    <div>
      <img src={image3} alt="Slide 2" />
      <p className="legend">Caption 2</p>
    </div>
  </Carousel>
  );
}

export default HeroCarousel;
