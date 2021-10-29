import React, { useState } from 'react'

export default function WishCard({ id, engine, horsepower, image, make, model, price, time, wishId, deleteWish, update, setUpdate }) {

    function handleDelete() {
        fetch(`/wishlists/${wishId}`, {
            method: 'DELETE'
        });
        setUpdate(!update)
        deleteWish(wishId)

    }

    return (
        <div className='flip-card'>
            <div className='inner'>
                <div className='front'>
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
                    <button onClick={handleDelete} className='fav-btn'>Delete</button>
                </div>
            </div>
        </div>
    )
}