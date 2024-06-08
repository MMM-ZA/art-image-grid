import React, { useEffect } from 'react';
// import Search from './Search';
import '../style.css';


const Cards = () => {
  const cards = [
  {
    id: 1,
    city: 'Rio',
    imageUrl: 'https://images.unsplash.com/photo-1574359587020-2da6e41b9565?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJpbyUyMGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 2,
    city: 'New York',
    imageUrl: 'https://images.unsplash.com/photo-1624198376649-c121a452d157?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 3,
    city: 'Hong Kong',
    imageUrl: 'https://images.unsplash.com/photo-1519684968101-1095455a6d15?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNob2klMjBodW5nJTIwZXN0YXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 4,
    city: 'Toronto',
    imageUrl: 'https://images.unsplash.com/photo-1496105463139-c6c6f14dedf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE5fHxtYWxpJTIwYXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 5,
    city: 'Paris',
    imageUrl: 'https://images.unsplash.com/photo-1610023709598-3881e09811c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFyaXMlMjBhcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 6,
    city: 'London',
    imageUrl: 'https://images.unsplash.com/photo-1530975080071-4d6704a9a993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  {
    id: 7,
    city: 'Morocco',
    imageUrl: 'https://images.unsplash.com/photo-1621419203897-20b66b98d495?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
  },
  {
    id: 8,
    city: 'Los Angeles',
    imageUrl: 'https://images.unsplash.com/photo-1540929819775-fcc7d4649250?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 9,
    city: 'Havana',
    imageUrl: 'https://images.unsplash.com/photo-1552963686-a597448ee447?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGN1YmElMjBhcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 10,
    city: 'Bali',
    imageUrl: 'https://images.unsplash.com/photo-1550407590-fe5359dd2b6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMyfHxiYWxpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 11,
    city: 'Evora',
    imageUrl: 'https://images.unsplash.com/photo-1583267575071-d13239e37986?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  },
  {
    id: 12,
    city: 'Lagos',
    imageUrl: 'https://images.unsplash.com/photo-1615841192203-84f7b2899c0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 13,
    city: 'Cairo',
    imageUrl: 'https://images.unsplash.com/photo-1594050753831-ebf4b3b52af7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 14,
    city: 'Johannesburg',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/South_African_Ndebele_art.jpg',
  },
  {
    id: 15,
    city: 'Berlin',
    imageUrl: 'https://images.unsplash.com/photo-1561617398-f5b36165c26a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVybGluJTIwd2FsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    id: 16,
    city: 'Naples',
    imageUrl: 'https://images.unsplash.com/photo-1564863757083-ada48bf46a8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
  },
  {
    id: 17,
    city: 'Istanbul',
    imageUrl: 'https://images.unsplash.com/photo-1621165264791-d110a730e930?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: 18,
    city: 'Kyiv',
    imageUrl: 'https://images.unsplash.com/photo-1530633866995-0ad6c385894d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1245&q=80',
  },
  {
    id: 19,
    city: 'Salzburg',
    imageUrl: 'https://images.unsplash.com/photo-1498771857520-25063edc30c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1132&q=80',
  },
  {
    id: 20,
    city: 'Nepal',
    imageUrl: 'https://images.unsplash.com/photo-1619896132696-b5c64de19def?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
   },
  {
    id: 21,
    city: 'Venice',
    imageUrl: 'https://images.unsplash.com/photo-1629975977821-77ebb6eeb270?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80',
   }

  ];

  useEffect(() => {
    const flexCard = document.querySelectorAll('.card');

    flexCard.forEach(card => {
      card.addEventListener('mouseover', () => {
        card.style.fontSize = '40px';
      });
      card.addEventListener('mouseout', () => {
        card.style.fontSize = '30px';
      });
    });

    // Cleanup function to remove event listeners
    return () => {
      flexCard.forEach(card => {
        card.removeEventListener('mouseover', () => {
          card.style.fontSize = '40px';
        });
        card.removeEventListener('mouseout', () => {
          card.style.fontSize = '30px';
        });
      });
    };
  }, []);


  return (
    <div className="cards">
      {cards.map((card) => (
        <div
          key={card.id}
          className="card"
          style={{ backgroundImage: `url(${card.imageUrl})` }}
        >
          {card.city}
        </div>
      ))}
    </div>
  );
};

export default Cards;
