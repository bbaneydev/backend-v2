import React, { useState } from 'react'


export default function AddCar({ handleAdd }) {
    const [make, setMake] = useState('')
    const [model, setModel] = useState('')
    const [engine, setEngine] = useState('')
    const [horsepower, setHorsepower] = useState('')
    const [time, setTime] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    function handleSubmit(e) {
        e.preventDefault()
        fetch('/cars', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                make,
                model,
                engine,
                horsepower,
                time,
                price,
                image
            })
        })
            .then(res => res.json())
            .then((newCar) => handleAdd(newCar))
        setMake('')
        setModel('')
        setEngine('')
        setHorsepower('')
        setTime('')
        setPrice('')
        setImage('')
    }
    return (
        <div className="add-car">
            <h1>Add a new car</h1>
            <form onSubmit={handleSubmit}>
                <span>Make:</span>
                <input type="text" placeholder="Car make..." value={make} required onChange={(e) => setMake(e.target.value)} />
                <span>Model:</span>
                <input type="text" placeholder="Car model..." value={model} required onChange={(e) => setModel(e.target.value)} />
                <span>Engine:</span>
                <input type="text" placeholder="Car engine..." value={engine} required onChange={(e) => setEngine(e.target.value)} />
                <span>Horsepower:</span>
                <input type="text" placeholder="Horsepower..." value={horsepower} required onChange={(e) => setHorsepower(e.target.value)} />
                <span>0-60 Time:</span>
                <input type="number" placeholder="0-60 Time..." value={time} required onChange={(e) => setTime(e.target.value)} />
                <span>Price:</span>
                <input type="text" placeholder="Car price..." value={price} required onChange={(e) => setPrice(e.target.value)} />
                <span>Image Url:</span>
                <input type="text" placeholder="Image Url link..." value={image} required onChange={(e) => setImage(e.target.value)} />
                <button type='submit'>Add Car</button>
            </form>
        </div>
    )
}