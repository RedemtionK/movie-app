import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <Carousel className='carusel'>
      <Carousel.Item interval={1000}>
      <Link to={`/movies/2`}>
        <img
          className="d-block w-100"
          src="https://thedisinsider.com/ezoimgfmt/i0.wp.com/thedisinsider.com/wp-content/uploads/2022/06/NJXQ8h3mUd9mhsh2m8xpba.jpg?w=1280&ssl=1&ezimgfmt=ng:webp/ngcb1"
          alt="First slide"
        />
        </Link>
        <Carousel.Caption>
          <h3 className='dr' >Doctor Strange in the Multiverse of Madness</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <Link to={`/movies/4`}>
        <img
          className="d-block w-100"
          src="https://images.thedirect.com/media/article_full/spider-man-no-way-home-theatrical-release.jpg"
          alt="Second slide"
        />
        </Link>
        <Carousel.Caption>


        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Link to={`/movies/9`}>
        <img
          className="d-block w-100"
          src="https://i0.wp.com/batman-news.com/wp-content/uploads/2017/11/Justice-League-Superman-Banner.jpg?fit=1700%2C1062&quality=80&strip=info&ssl=1"
          alt="Third slide"
        />
      </Link>
        <Carousel.Caption>
          <h3 className='dr'>Zack Snyder's Justice League</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <Link to={`/movies/34`}>
        <img
          className="d-block w-100"
          src="https://image.cnbcfm.com/api/v1/image/107023259-1646174593824-batman_2_Cropped.jpg?v=1646174658&w=1600&h=900"
          alt="Fourth slide"
        />
        </Link>
        <Carousel.Caption>
          <h3 className='dr' >The Batman</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <Link to={`/movies/35`}>
        <img
          className="d-block w-100"
          src="https://occ-0-1007-360.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABSycU0Eq8fAxEG_iqD-cmzqpiNmlIfPoFjyiKYCQWgcebv-a-4PHULla1sI_KVoAatN-o9UUTRXK2ujNqLY6xaYw4QDbNnefhAAA.jpg?r=6ea"
          alt="Fifth slide"
        />
        </Link>
        <Carousel.Caption>
          <h3 className='dr' >The Man from Toronto</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroSection;