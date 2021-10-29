import React, { useState } from 'react'
import FavCard from './FavCard'
import WishCard from './WishCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Profile({ favorites, wishlists, deleteFavs, deleteWish, update, setUpdate }) {



    const favId = favorites.map(car => {
        for (const [key, value] of Object.entries(car)) {
            return (car.id);
        }
    })

    console.log(favId);

    const wishId = wishlists.map(car => {
        for (const [key, value] of Object.entries(car)) {
            return (car.id);
        }
    })

    console.log(wishId);


    const favs = favorites.map(car => {
        for (const [key, value] of Object.entries(car)) {
            return car.car
        }
    })

    const wish = wishlists.map(car => {
        for (const [key, value] of Object.entries(car)) {
            return car.car
        }
    })

    const favorite = favs.map(car => {
        return <FavCard key={car.id}
            engine={car.engine}
            horsepower={car.horsepower}
            image={car.image}
            make={car.make}
            model={car.model}
            price={car.price}
            time={car.time}
            id={car.id}
            deleteFavs={deleteFavs}
            favorites={favorites}
            favId={favId}
            setUpdate={setUpdate}
            update={update}
        />
    })

    const wishList = wish.map(car => {
        return <WishCard key={car.id}
            engine={car.engine}
            horsepower={car.horsepower}
            image={car.image}
            make={car.make}
            model={car.model}
            price={car.price}
            time={car.time}
            id={car.id}
            deleteWish={deleteWish}
            wishId={wishId}
            setUpdate={setUpdate}
            update={update}
        />
    })

    return (
        <div className='profile-container'>
            <h1 className='profile-h1'>Your profile</h1>
            <h3 className='profile-h3'>Your favorited cars</h3>
            <div className='card-container'>
                {favorite}
            </div>
            <h3 className='profile-h3'>Your wishlist</h3>
            <div className='card-container'>
                {wishList}
            </div>
        </div>
    )
}