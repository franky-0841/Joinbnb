const Rental = require('./models/rental');

class FakeDb {
    constructor(){
        this.rentals = [{
                    title: "Central Apartment",
                    city: "New York",
                    street: "Times Sqaure",
                    category: "apartment",
                    image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    bedrooms: 3,
                    description: "Very nice apartment",
                    dailyRate: 34,
                    shared: false
                },
                {
                    title: "Central Apartment 2",
                    city: "San Francisco",
                    street: "Main street",
                    category: "condo",
                    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    bedrooms: 2,
                    description: "Very nice apartment",
                    dailyRate: 12,
                    shared: true
                },
                {
                    title: "Central Apartment 3",
                    city: "Bratislava",
                    street: "Hlavna",
                    category: "condo",
                    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                    bedrooms: 2,
                    description: "Very nice apartment",
                    dailyRate: 334,
                    shared: true
                },
                {
                    title: "Central Apartment 4",
                    city: "Berlin",
                    street: "Haupt strasse",
                    category: "house",
                    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    bedrooms: 9,
                    description: "Very nice apartment",
                    dailyRate: 33,
                    shared: true
                },
                {
                    title: "Central Apartment 4",
                    city: "Berlin",
                    street: "Haupt strasse",
                    category: "house",
                    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    bedrooms: 9,
                    description: "Very nice apartment",
                    dailyRate: 33,
                    shared: true
                },
                {
                    title: "Central Apartment 4",
                    city: "Berlin",
                    street: "Haupt strasse",
                    category: "house",
                    image: "https://images.unsplash.com/photo-1495433324511-bf8e92934d90?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    bedrooms: 9,
                    description: "Very nice apartment",
                    dailyRate: 33,
                    shared: true
                },
                {
                    title: "Central Apartment 4",
                    city: "Berlin",
                    street: "Haupt strasse",
                    category: "house",
                    image: "https://images.unsplash.com/photo-1430285561322-7808604715df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    bedrooms: 9,
                    description: "Very nice apartment",
                    dailyRate: 33,
                    shared: true
                },
                {
                    title: "Central Apartment 4",
                    city: "Berlin",
                    street: "Haupt strasse",
                    category: "house",
                    image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60s",
                    bedrooms: 9,
                    description: "Very nice apartment",
                    dailyRate: 33,
                    shared: true
                },
                {
                    title: "Central Apartment 4",
                    city: "Berlin",
                    street: "Haupt strasse",
                    category: "house",
                    image: "https://images.unsplash.com/photo-1570057633712-870fa818fa15?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    bedrooms: 9,
                    description: "Very nice apartment",
                    dailyRate: 33,
                    shared: true
                },
                {
                    title: "Central Apartment 4",
                    city: "Berlin",
                    street: "Haupt strasse",
                    category: "house",
                    image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    bedrooms: 9,
                    description: "Very nice apartment",
                    dailyRate: 33,
                    shared: true
                },
                {
                    title: "Central Apartment 4",
                    city: "Berlin",
                    street: "Haupt strasse",
                    category: "house",
                    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    bedrooms: 9,
                    description: "Very nice apartment",
                    dailyRate: 33,
                    shared: true
                },
                {
                    title: "Central Apartment 4",
                    city: "Berlin",
                    street: "Haupt strasse",
                    category: "house",
                    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    bedrooms: 9,
                    description: "Very nice apartment",
                    dailyRate: 33,
                    shared: true
        }]
    }

    pushRentalsToDb(){
        this.rentals.forEach((rental) => {
            const newRental = new Rental(rental);
            newRental.save();
        })
    }
     async cleanDb(){
         await Rental.deleteMany({});
     }

    seedDb(){
        this.pushRentalsToDb();
        this.cleanDb();
    }

}

module.exports = FakeDb;