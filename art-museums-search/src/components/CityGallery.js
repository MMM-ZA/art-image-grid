import React from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import './CityGallery.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CityGallery = () => {
  const { cityName } = useParams();

  const photos = [
    { id: 1, city: 'Rio', imageUrl: 'https://images.unsplash.com/photo-1669318720948-28a865d00139?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc1' },
    { id: 2, city: 'Rio', imageUrl: 'https://images.unsplash.com/photo-1529350418635-34b10541db54?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc2' },
    { id: 3, city: 'Rio', imageUrl: 'https://images.unsplash.com/photo-1693498894449-fb2931b4115f?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc3' },
    { id: 4, city: 'Rio', imageUrl: 'https://images.unsplash.com/photo-1660700009998-0ef08abaca49?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc4' },
    { id: 5, city: 'Rio', imageUrl: 'https://images.unsplash.com/photo-1626292730006-e7dddbcef0b2?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc5' },
    { id: 6, city: 'Rio', imageUrl: 'https://images.unsplash.com/photo-1654027244169-fb492c6f33ba?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc6' },
    { id: 7, city: 'Rio', imageUrl: 'https://images.unsplash.com/photo-1611882008386-abd536c39413?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc7' },
    { id: 8, city: 'Rio', imageUrl: 'https://images.unsplash.com/photo-1611882008386-abd536c39413?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc8' },
    { id: 9, city: 'Rio', imageUrl: 'url9', description: 'desc9' },

    { id: 10, city: 'New York', imageUrl: 'url1', description: 'desc1' },
    { id: 11, city: 'New York', imageUrl: 'url2', description: 'desc2' },
    { id: 12, city: 'New York', imageUrl: 'url3', description: 'desc3' },
    { id: 13, city: 'New York', imageUrl: 'url4', description: 'desc4' },
    { id: 14, city: 'New York', imageUrl: 'url5', description: 'desc5' },
    { id: 15, city: 'New York', imageUrl: 'url6', description: 'desc6' },
    { id: 16, city: 'New York', imageUrl: 'url7', description: 'desc7' },
    { id: 17, city: 'New York', imageUrl: 'url8', description: 'desc8' },
    { id: 18, city: 'Hong Kong', imageUrl: 'url9', description: 'desc9' },
    { id: 18, city: 'New York', imageUrl: 'url9', description: 'desc9' },
    { id: 18, city: 'New York', imageUrl: 'url9', description: 'desc9' },
    { id: 18, city: 'Toronto', imageUrl: 'url9', description: 'desc9' },

  ];

  const cityPhotos = photos.filter(photo => photo.city === cityName);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: true,
  };

  return (
    <div className="city-gallery">
      <h1>{cityName}</h1>
      <Slider {...settings}>
        {cityPhotos.map(photo => (
          <div className="photo" key={photo.id}>
            <img src={photo.imageUrl} alt={photo.description} style={{ width: '100%', height: 'auto' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CityGallery;
