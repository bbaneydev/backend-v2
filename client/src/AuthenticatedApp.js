import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, useHistory, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import AddCar from './components/AddCar'
import Home from './components/Home';
import Profile from './components/Profile';


export default function AuthenticatedApp({ currentUser, setCurrentUser }) {
    const history = useHistory()
    const [cars, setCars] = useState([])
    const [favorites, setFavorites] = useState([])
    const [wishlists, setWishlists] = useState([])
    const [update, setUpdate] = useState(false)
    const [favorite, setFavorite] = useState(false)

    useEffect(() => {
        fetch('/cars')
            .then(res => res.json())
            .then(setCars)
    }, [])



    useEffect(() => {
        fetch('/favorites')
            .then(res => res.json())
            .then((favorites) => {
                setFavorites(favorites)
                // setUpdate(!update)
            })
    }, [update])

    useEffect(() => {
        fetch('/wishlists')
            .then(res => res.json())
            .then((wishlists) => {
                setWishlists(wishlists)
                // setUpdate(!update)
            })
    }, [update])

    function handleAdd(newCar) {
        const updatedCar = [...cars, newCar]
        setCars(updatedCar)
    }


    function handleAddFavorite(carId) {
        return fetch('/favorites', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                car_id: carId
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    return res.json().then(errors => Promise.reject(errors))
                }
            })
            .then(favoriteCar => {
                const updatedCars = cars.map((car) => {
                    if (car.id === carId) {
                        return {
                            ...car,
                            car_id: favoriteCar
                        }
                    } else {
                        return car
                    }
                })
                setFavorites(updatedCars)
                setUpdate(!update)
            })
    }

    function handleAddWishlist(carId) {
        return fetch('/wishlists', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                car_id: carId
            })
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    return res.json().then(errors => Promise.reject(errors))
                }
            })
            .then(wishCar => {
                const updatedCars = cars.map((car) => {
                    if (car.id === carId) {
                        return {
                            ...car,
                            car_id: wishCar
                        }
                    } else {
                        return car
                    }
                })
                setWishlists(updatedCars)
                setUpdate(!update)
            })
    }

    function deleteFavs(id) {
        const favCars = favorites.filter((fav) => fav.id !== id)
        setFavorites(favCars)
        setUpdate(!update)
    }

    function deleteWish(id) {
        const wishCars = wishlists.filter((wish) => wish.id !== id)
        setWishlists(wishCars)
        setUpdate(!update)
    }

    const handleLogout = () => {
        fetch(`/logout`, {
            method: 'DELETE',
            credentials: 'include'
        })
            .then(res => {
                if (res.ok) {
                    setCurrentUser(null)
                    history.push('/')
                }
            })
    }
    return (
        <div>
            <Navbar currentUser={currentUser} handleLogout={handleLogout} />
            <Switch>
                <Route path='/addcar'>
                    <AddCar handleAdd={handleAdd} />
                </Route>
                <Route exact path='/profile/'>
                    <Profile favorites={favorites} wishlists={wishlists} deleteFavs={deleteFavs} deleteWish={deleteWish} setUpdate={setUpdate} update={update} />
                </Route>
                <Route exact path='/home/'>
                    <Home cars={cars} currentUser={currentUser} handleAddFavorite={handleAddFavorite} handleAddWishlist={handleAddWishlist} />
                </Route>
            </Switch>
        </div>
    )

}