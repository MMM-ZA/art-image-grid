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


    { id: 19, city: 'Hong Kong', imageUrl: 'https://images.unsplash.com/photo-1596628383004-144d2e5462c8?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc19' },
    { id: 20, city: 'Hong Kong', imageUrl: 'https://images.unsplash.com/photo-1646538618640-fddc022de769?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc20' },
    { id: 21, city: 'Hong Kong', imageUrl: 'https://images.unsplash.com/photo-1613625695262-98bceeda4bc0?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc21' },
    { id: 22, city: 'Hong Kong', imageUrl: 'https://images.unsplash.com/photo-1522623349500-de37a56ea2a5?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc22' },
    { id: 23, city: 'Hong Kong', imageUrl: 'https://images.unsplash.com/photo-1505069446780-4ef442b5207f?q=80&w=2253&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc23' },
    { id: 24, city: 'Hong Kong', imageUrl: 'https://images.unsplash.com/photo-1515185500307-65d052ffba10?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc24' },
    { id: 25, city: 'Hong Kong', imageUrl: 'https://images.unsplash.com/photo-1604629142597-91739b77fc52?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc25' },
    { id: 26, city: 'Hong Kong', imageUrl: 'https://images.unsplash.com/photo-1609947991962-8c5fd8ab05c1?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc26' },
    { id: 27, city: 'Hong Kong', imageUrl: 'https://images.unsplash.com/photo-1513415564515-763d91423bdd?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc27' },

     { id: 28, city: 'Toronto', imageUrl: 'https://images.unsplash.com/photo-1594733847966-2fa4519c76d4?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 29, city: 'Toronto', imageUrl: 'https://images.unsplash.com/photo-1493210977798-4f655ac200a9?q=80&w=2504&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 30, city: 'Toronto', imageUrl: 'https://images.unsplash.com/photo-1461685265823-f8d5d0b08b9b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 31, city: 'Toronto', imageUrl: 'https://images.unsplash.com/photo-1579722005198-bc2e9384170c?q=80&w=2536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 32, city: 'Toronto', imageUrl: 'https://images.unsplash.com/photo-1578254376152-aa7e1f613924?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 33, city: 'Toronto', imageUrl: 'https://images.unsplash.com/photo-1578254376090-c6fc56a5194f?q=80&w=2181&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 34, city: 'Toronto', imageUrl: 'https://images.unsplash.com/photo-1608172273301-ab24e82545a4?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 35, city: 'Toronto', imageUrl: 'https://images.unsplash.com/photo-1566873465716-1834983be9ff?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 36, city: 'Toronto', imageUrl: 'https://images.unsplash.com/photo-1651111245117-547307b3bfce?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },

    { id: 37, city: 'Paris', imageUrl: 'https://images.unsplash.com/photo-1509439581779-6298f75bf6e5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 38, city: 'Paris', imageUrl: 'https://images.unsplash.com/photo-1555929940-b435de81524e?q=80&w=2132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 39, city: 'Paris', imageUrl: 'https://images.unsplash.com/photo-1649688121768-b5bb2ef76067?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 40, city: 'Paris', imageUrl: 'https://images.unsplash.com/photo-1617126481205-cdf29da03b41?q=80&w=2454&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 41, city: 'Paris', imageUrl: 'https://images.unsplash.com/photo-1541845237347-5956795b273a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 42, city: 'Paris', imageUrl: 'https://images.unsplash.com/photo-1646051683780-1085df68edcf?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 43, city: 'Paris', imageUrl: 'https://images.unsplash.com/photo-1548092880-d86345e8827a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 44, city: 'Paris', imageUrl: 'https://images.unsplash.com/photo-1550541231-56ddb7f844ec?q=80&w=2572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 45, city: 'Paris', imageUrl: 'https://images.unsplash.com/photo-1473177104440-ffee2f376098?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },

    { id: 46, city: 'London', imageUrl: 'https://images.unsplash.com/photo-1624602434778-5114811754a7?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 47, city: 'London', imageUrl: 'https://images.unsplash.com/photo-1616289451523-e447b1156096?q=80&w=2454&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 48, city: 'London', imageUrl: 'https://images.unsplash.com/photo-1624602434823-584645165f47?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 49, city: 'London', imageUrl: 'https://images.unsplash.com/photo-1534235826754-0a3572d1d6d5?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 50, city: 'London', imageUrl: 'https://images.unsplash.com/photo-1573613111292-8e095deea7c7?q=80&w=2498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 51, city: 'London', imageUrl: 'https://images.unsplash.com/photo-1479385707218-be0fbbe6ff01?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 52, city: 'London', imageUrl: 'https://images.unsplash.com/photo-1514065549995-7706f6017a27?q=80&w=2519&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 53, city: 'London', imageUrl: 'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?q=80&w=2292&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 54, city: 'London', imageUrl: 'https://images.unsplash.com/photo-1597053100221-fee3c1dcb6ba?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },

    { id: 55, city: 'Morocco', imageUrl: 'https://images.unsplash.com/photo-1549140600-78c9b8275e9d?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 56, city: 'Morocco', imageUrl: 'https://images.unsplash.com/photo-1517573927281-aec54b2b885c?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 57, city: 'Morocco', imageUrl: 'https://images.unsplash.com/photo-1538519446176-2533d0b39099?q=80&w=2554&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 58, city: 'Morocco', imageUrl: 'https://images.unsplash.com/photo-1632782532013-bd3f5f9197db?q=80&w=1957&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 59, city: 'Morocco', imageUrl: 'https://images.unsplash.com/photo-1577744734917-e83c1380c32c?q=80&w=2526&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 60, city: 'Morocco', imageUrl: 'https://images.unsplash.com/photo-1559900071-1355e5e6211d?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 61, city: 'Morocco', imageUrl: 'https://images.unsplash.com/photo-1550697318-929498858774?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 62, city: 'Morocco', imageUrl: 'https://images.unsplash.com/photo-1519915212116-7cfef71f1d3e?q=80&w=2379&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 63, city: 'Morocco', imageUrl: 'https://images.unsplash.com/photo-1559925523-10de9e23cf90?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },

    { id: 64, city: 'Los Angeles', imageUrl: 'https://images.unsplash.com/photo-1605688915525-7be700812e9e?q=80&w=2432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 65, city: 'Los Angeles', imageUrl: 'https://images.unsplash.com/photo-1514321648849-f4e1d5da98dc?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 66, city: 'Los Angeles', imageUrl: 'https://images.unsplash.com/photo-1518790104582-412c1e2cf36f?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 67, city: 'Los Angeles', imageUrl: 'https://images.unsplash.com/photo-1623912279015-d748d9cd8978?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 68, city: 'Los Angeles', imageUrl: 'https://images.unsplash.com/photo-1587654980578-e7e1a26f309b?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 69, city: 'Los Angeles', imageUrl: 'https://images.unsplash.com/photo-1533157726070-bc55faa2a9cd?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 70, city: 'Los Angeles', imageUrl: 'https://images.unsplash.com/photo-1573397286878-0ff40aa140cd?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 71, city: 'Los Angeles', imageUrl: 'https://images.unsplash.com/photo-1550807816-61cd93e82e86?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 72, city: 'Los Angeles', imageUrl: 'https://images.unsplash.com/photo-1583975647930-cf84bfe0efbe?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },


    { id: 73, city: 'Havana', imageUrl: 'https://images.unsplash.com/photo-1636506626471-ef6f36b599c9?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 74, city: 'Havana', imageUrl: 'https://images.unsplash.com/photo-1602515677088-2643f5eabaa6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 75, city: 'Havana', imageUrl: 'https://images.unsplash.com/photo-1584540502080-c5bf5749204e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 76, city: 'Havana', imageUrl: 'https://images.unsplash.com/photo-1561994571-36afb0b11e3e?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 77, city: 'Havana', imageUrl: 'https://images.unsplash.com/photo-1540076057611-7897ed27d363?q=80&w=2484&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 78, city: 'Havana', imageUrl: 'https://images.unsplash.com/photo-1518754744014-dcca006cd68f?q=80&w=2514&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 79, city: 'Havana', imageUrl: 'https://images.unsplash.com/photo-1583140104888-9960edb2fee8?q=80&w=2535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', description: 'desc9' },
    { id: 80, city: 'Havana', imageUrl: '', description: 'desc9' },
    { id: 81, city: 'Havana', imageUrl: '', description: 'desc9' },



    { id: 82, city: 'Havana', imageUrl: '', description: 'desc9' },

    

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
            <button onClick={handleClick}>Go to Home</button>
      <h1>{cityName}</h1>
      <Slider {...settings}>
        {cityPhotos.map(photo => (
          <div className="photo" key={photo.id}>
            <img src={photo.imageUrl} alt={photo.description} style={{ width: '100%', height: '100vh' }} />
          </div>
        ))}
      </Slider>

    </div>
  );
};

export default CityGallery;
