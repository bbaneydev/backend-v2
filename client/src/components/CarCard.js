import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../App.css"

export default function CarCard({ engine, horsepower, image, make, model, price, time, handleAddFavorite, handleAddWishlist, id }) {

    let favBttn = "Favorite";

    return (
        <div className='flip-card'>
            <div className='inner'>
                <div className='front' id={id}>
                    <img src={image} alt="car" />
                    <h1>{make} {model}</h1>
                </div>
                <div className='back'>
                    <div className='back-container'>
                        <div className='back-info'>
                            <h1>{make} {model}</h1>
                            <p>{engine}</p>
                            <p>{price}</p>
                            <p>{horsepower}</p>
                            <p>{time}s 0-60 Time</p>
                        </div>
                        <div className='back-image'>
                            <img src={image} alt='car' />
                        </div>
                    </div>
                    <button className='btm-btn' onClick={() => { handleAddWishlist(id) }}>Wishlist</button>
                    <button className='fav-btn' onClick={() => { handleAddFavorite(id) }}>Favorite</button>
                </div>
            </div>
        </div>
    )
}