import carosel from '../../assets/logo/1.jpg'
import carose2 from '../../assets/logo/2.jpeg'
import carose3 from '../../assets/logo/3.jpeg'
import carose4 from '../../assets/logo/4.jpeg'
import Catagorys from './Catagorys';

const Headrs = () => {
    return (
<div>
<div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={carosel} className="w-full" />
  
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>

    </div>
    
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={carose2} className="w-full" />
    <div>
    
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
     
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={carose3} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={carose4} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
  
</div>
<Catagorys></Catagorys>
</div>


    );
};

export default Headrs;