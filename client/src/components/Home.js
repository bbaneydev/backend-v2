import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Cards from './Cards'

export default function Home({ cars, currentUser, handleAddFavorite, handleAddWishlist, favorite }) {

    const username = currentUser.username[0].toUpperCase()
    const rest = currentUser.username.slice(1)

    return (
        <div className='home'>
            <h1 className='home-h1'>Welcome back, {username}{rest}</h1>
            <Link to='/addcar'><button className='home-button'>New Car</button></Link>
            <Cards cars={cars} handleAddFavorite={handleAddFavorite} handleAddWishlist={handleAddWishlist} favorite={favorite} />
        </div>
    )
}