import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import './CityGallery.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import Cards from './Cards';

const CityGallery = () => {
  const { cityName } = useParams();
  const navigate = useNavigate();

 const handleClick = () => {
  console.log("Button clicked");
  navigate("/");
};

  const photos = [
    { id: 1, city: 'Rio', imageUrl: 'https://images.unsplash.com/photo-1585436249848-3a8210d46a47?q=80&w=1953&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc1' },
    { id: 2, city: 'Rio', imageUrl: 'https://images.unsplash.com/photo-1529350418635-34b10541db54?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc2' },
    { id: 3, city: 'Rio', imageUrl: 'https://images.unsplash.com/photo-1693498894449-fb2931b4115f?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc3' },
    { id: 4, city: 'Rio', imageUrl: 'https://images.unsplash.com/photo-1660700009998-0ef08abaca49?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc4' },
    { id: 5, city: 'Rio', imageUrl: 'https://images.unsplash.com/photo-1626292730006-e7dddbcef0b2?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc5' },
    { id: 6, city: 'Rio', imageUrl: 'https://images.unsplash.com/photo-1654027244169-fb492c6f33ba?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc6' },
    { id: 7, city: 'Rio', imageUrl: 'https://images.unsplash.com/photo-1611882008386-abd536c39413?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc7' },
    { id: 8, city: 'Rio', imageUrl: 'https://images.unsplash.com/photo-1641411757600-fb5a7b3a5921?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc8' },
    { id: 9, city: 'Rio', imageUrl: 'https://images.unsplash.com/photo-1668194645738-ef8dbb426086?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },


    { id: 10, city: 'New York', imageUrl: 'https://images.unsplash.com/photo-1547036215-b2f76b5f3439?q=80&w=2570&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc10' },
    { id: 11, city: 'New York', imageUrl: 'https://images.unsplash.com/photo-1589861271666-f08f471d7443?q=80&w=2559&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc11' },
    { id: 12, city: 'New York', imageUrl: 'https://images.unsplash.com/photo-1577641296909-46374a86c2bd?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc12' },
    { id: 13, city: 'New York', imageUrl: 'https://images.unsplash.com/photo-1598922916731-e417523bf96e?q=80&w=2514&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc13' },
    { id: 14, city: 'New York', imageUrl: 'https://images.unsplash.com/photo-1595816738696-14deb5b85aea?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc14' },
    { id: 15, city: 'New York', imageUrl: 'https://images.unsplash.com/photo-1623575435856-323b7c1481f6?q=80&w=2536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc15' },
    { id: 16, city: 'New York', imageUrl: 'https://images.unsplash.com/photo-1494449880320-18d3dae5d16e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc16' },
    { id: 17, city: 'New York', imageUrl: 'https://images.unsplash.com/photo-1441823120971-04969db3f294?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc17' },
    { id: 18, city: 'New York', imageUrl: 'https://images.unsplash.com/photo-1556541845-443e0c6e8e66?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc18' },


    { id: 19, city: 'Hong Kong', imageUrl: 'https://images.unsplash.com/photo-1596628383004-144d2e5462c8?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 20, city: 'Hong Kong', imageUrl: 'https://images.unsplash.com/photo-1646538618640-fddc022de769?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 21, city: 'Hong Kong', imageUrl: 'https://images.unsplash.com/photo-1613625695262-98bceeda4bc0?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 22, city: 'Hong Kong', imageUrl: 'https://images.unsplash.com/photo-1522623349500-de37a56ea2a5?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 23, city: 'Hong Kong', imageUrl: 'https://images.unsplash.com/photo-1505069446780-4ef442b5207f?q=80&w=2253&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 24, city: 'Hong Kong', imageUrl: 'https://images.unsplash.com/photo-1515185500307-65d052ffba10?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 25, city: 'Hong Kong', imageUrl: 'url9', description: 'desc9' },
    { id: 26, city: 'Hong Kong', imageUrl: 'url9', description: 'desc9' },
    { id: 27, city: 'Hong Kong', imageUrl: 'url9', description: 'desc9' },

    { id: 30, city: 'London', imageUrl: 'https://images.unsplash.com/photo-1624602434778-5114811754a7?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 31, city: 'London', imageUrl: 'https://images.unsplash.com/photo-1616289451523-e447b1156096?q=80&w=2454&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 32, city: 'London', imageUrl: 'https://images.unsplash.com/photo-1624602434823-584645165f47?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },

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
            <img src={photo.imageUrl} alt={photo.description} style={{ width: '100%', height: '100vh' }} />
          </div>
        ))}
      </Slider>
       <button onClick={handleClick}>Back to Homepage</button>
    </div>
  );
};

export default CityGallery;
