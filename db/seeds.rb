# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user1 = User.create(username: 'bbaney', password_digest: 'password')

car1 = Car.create(
    make: 'Lamborghini',
    model: 'Huracan Evo Spyder',
    engine: '5.2-Liter V10 Engine',
    horsepower: '631 Horsepower',
    time: 3.1,
    price: '229,428',
    image: 'https://lvcexotics.com/wp-content/uploads/DSC08248-removebg.png',
    user_id: 1
)

car2 = Car.create(
    make: 'McLaren',
    model: 'P1',
    engine: 'Twin-Turbo V8 Engine',
    horsepower: '903 Horsepower',
    time: 2.8,
    price: '1,193,231',
    image: 'https://images.fineartamerica.com/images-medium-large-5/white-2014-mclaren-p1-plug-in-hybrid-supercar-oleksiy-maksymenko.jpg',
    user_id: 1
)

car3 = Car.create(
    make: 'Maserati',
    model: 'MC20',
    engine: 'Twin-Turbo V6 Engine',
    horsepower: '621 Horsepower',
    time: 2.8,
    price: '213,000',
    image: 'https://lvcexotics.com/wp-content/uploads/DSC08625-removebg.png',
    user_id: 1
)

car4 = Car.create(
    make: 'Lamborghini',
    model: 'Huracan Evo Spyder',
    engine: '5.2-Liter V10 Engine',
    horsepower: '631 Horsepower',
    time: 3.1,
    price: '229,428',
    image: 'https://lvcexotics.com/wp-content/uploads/DSC08248-removebg.png',
    user_id: 1
)

car5 = Car.create(
    make: 'McLaren',
    model: 'P1',
    engine: 'Twin-Turbo V8 Engine',
    horsepower: '903 Horsepower',
    time: 2.8,
    price: '1,193,231',
    image: 'https://images.fineartamerica.com/images-medium-large-5/white-2014-mclaren-p1-plug-in-hybrid-supercar-oleksiy-maksymenko.jpg',
    user_id: 1
)

car6 = Car.create(
    make: 'Maserati',
    model: 'MC20',
    engine: 'Twin-Turbo V6 Engine',
    horsepower: '621 Horsepower',
    time: 2.8,
    price: '213,000',
    image: 'https://lvcexotics.com/wp-content/uploads/DSC08625-removebg.png',
    user_id: 1
)

car7 = Car.create(
    make: 'Lamborghini',
    model: 'Huracan Evo Spyder',
    engine: '5.2-Liter V10 Engine',
    horsepower: '631 Horsepower',
    time: 3.1,
    price: '229,428',
    image: 'https://lvcexotics.com/wp-content/uploads/DSC08248-removebg.png',
    user_id: 1
)

car8 = Car.create(
    make: 'McLaren',
    model: 'P1',
    engine: 'Twin-Turbo V8 Engine',
    horsepower: '903 Horsepower',
    time: 2.8,
    price: '1,193,231',
    image: 'https://images.fineartamerica.com/images-medium-large-5/white-2014-mclaren-p1-plug-in-hybrid-supercar-oleksiy-maksymenko.jpg',
    user_id: 1
)

car9 = Car.create(
    make: 'Maserati',
    model: 'MC20',
    engine: 'Twin-Turbo V6 Engine',
    horsepower: '621 Horsepower',
    time: 2.8,
    price: '213,000',
    image: 'https://lvcexotics.com/wp-content/uploads/DSC08625-removebg.png',
    user_id: 1
)