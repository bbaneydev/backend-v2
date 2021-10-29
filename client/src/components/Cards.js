import React from 'react'
import { Link } from 'react-router-dom'
import CarCard from './CarCard';
import "../App.css"

export default function Cards({ cars, handleAddFavorite, handleAddWishlist }) {

    const card = cars.map(car => (
        <CarCard id={car.id}
            engine={car.engine}
            horsepower={car.horsepower}
            image={car.image}
            make={car.make}
            model={car.model}
            price={car.price}
            time={car.time}
            handleAddFavorite={handleAddFavorite}
            handleAddWishlist={handleAddWishlist}
        />
    ))

    return (
        <div className='card-container'>
            {card}
        </div>
    )
}