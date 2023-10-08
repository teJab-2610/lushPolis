import React from 'react';
import MultiActionAreaCard from './story.jsx'; // Assuming that MultiActionAreaCard component is in the same directory

const CardList = () => {
  // Sample data for the cards
  const cardData = [
    {
      id: 1,
      title: 'Lizard',
      description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      imageUrl: 'https://media.istockphoto.com/id/499809247/photo/being-careful-not-to-damage-any-plants.jpg?s=612x612&w=is&k=20&c=2_tfl7ngpSDzBiov_LxhmHq1Z5_tGFW8iRf0lPZJzEI='
    },
    {
      id: 2,
      title: 'Lizard',
      description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
      imageUrl: 'https://media.istockphoto.com/id/499809247/photo/being-careful-not-to-damage-any-plants.jpg?s=612x612&w=is&k=20&c=2_tfl7ngpSDzBiov_LxhmHq1Z5_tGFW8iRf0lPZJzEI='
    },
    {
        id: 3,
        title: 'Lizard',
        description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        imageUrl: 'https://media.istockphoto.com/id/499809247/photo/being-careful-not-to-damage-any-plants.jpg?s=612x612&w=is&k=20&c=2_tfl7ngpSDzBiov_LxhmHq1Z5_tGFW8iRf0lPZJzEI='
      },
      {
        id: 4,
        title: 'Lizard',
        description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        imageUrl: 'https://media.istockphoto.com/id/499809247/photo/being-careful-not-to-damage-any-plants.jpg?s=612x612&w=is&k=20&c=2_tfl7ngpSDzBiov_LxhmHq1Z5_tGFW8iRf0lPZJzEI='
      },
      {
        id: 5,
        title: 'Lizard',
        description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        imageUrl: 'https://media.istockphoto.com/id/499809247/photo/being-careful-not-to-damage-any-plants.jpg?s=612x612&w=is&k=20&c=2_tfl7ngpSDzBiov_LxhmHq1Z5_tGFW8iRf0lPZJzEI='
      },
      {
        id: 6,
        title: 'Lizard',
        description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        imageUrl: 'https://media.istockphoto.com/id/499809247/photo/being-careful-not-to-damage-any-plants.jpg?s=612x612&w=is&k=20&c=2_tfl7ngpSDzBiov_LxhmHq1Z5_tGFW8iRf0lPZJzEI='
      },
      {
        id: 7,
        title: 'Lizard',
        description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        imageUrl: 'https://media.istockphoto.com/id/499809247/photo/being-careful-not-to-damage-any-plants.jpg?s=612x612&w=is&k=20&c=2_tfl7ngpSDzBiov_LxhmHq1Z5_tGFW8iRf0lPZJzEI='
      },
    // Add more card data as needed
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {cardData.map(card => (
        <MultiActionAreaCard
          key={card.id}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
};

export default CardList;
