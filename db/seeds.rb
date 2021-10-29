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
    engine: '5.2-Liter V10',
    horsepower: '631',
    time: 3.1,
    price: '229,428',
    image: 'https://lvcexotics.com/wp-content/uploads/DSC08248-removebg.png',
    user_id: 1
)

car2 = Car.create(
    make: 'McLaren',
    model: 'P1',
    engine: 'Twin-Turbo V8',
    horsepower: '903',
    time: 2.8,
    price: '1,193,231',
    image: 'https://images.fineartamerica.com/images-medium-large-5/white-2014-mclaren-p1-plug-in-hybrid-supercar-oleksiy-maksymenko.jpg',
    user_id: 1
)

car3 = Car.create(
    make: 'Lamborghini',
    model: 'Urus',
    engine: '4.0-Liter V8',
    horsepower: '650',
    time: 3.6,
    price: '218,000',
    image: 'https://lvcexotics.com/wp-content/uploads/Urus-RD.png',
    user_id: 1
)

car4 = Car.create(
    make: 'McLaren',
    model: '620R Coupe',
    engine: '3.8-Liter Twin-Turbo V8',
    horsepower: '610',
    time: 2.8,
    price: '299,000',
    image: 'https://lvcexotics.com/wp-content/uploads/New-2020-McLaren-620R-removebg-770x512.png',
    user_id: 1
)

car5 = Car.create(
    make: 'Audi',
    model: 'R8 Spyder',
    engine: '5.2-Liter V10',
    horsepower: '562',
    time: 3.4,
    price: '148,700',
    image: 'https://lvcexotics.com/wp-content/uploads/DSC08477-removebg-770x513.png',
    user_id: 1
)

car6 = Car.create(
    make: 'Porsche',
    model: '911 GT3',
    engine: '4.0-Liter Flat-6',
    horsepower: '500',
    time: 3.2,
    price: '161,000',
    image: 'https://lvcexotics.com/wp-content/uploads/DSC07633-removebg-770x513.png',
    user_id: 1
)

car7 = Car.create(
    make: 'Mercedes',
    model: 'AMG-GT R',
    engine: '4.0-Liter V8',
    horsepower: '515',
    time: 3.6,
    price: '165,000',
    image: 'https://lvcexotics.com/wp-content/uploads/AMG-GTR.png',
    user_id: 1
)

car8 = Car.create(
    make: 'Bentley',
    model: 'Continental GTC',
    engine: '4.0-Liter Twin Turbo V8',
    horsepower: '521',
    time: 4.3,
    price: '202,500',
    image: 'https://lvcexotics.com/wp-content/uploads/DSC08321-removebg-770x513.png',
    user_id: 1
)

car9 = Car.create(
    make: 'Ferrari',
    model: '812 Superfast',
    engine: '6.5-Liter V12',
    horsepower: '789',
    time: 2.8,
    price: '335,000',
    image: 'https://lvcexotics.com/wp-content/uploads/DSC08573-removebg-770x507.png',
    user_id: 1
)