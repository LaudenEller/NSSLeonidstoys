const toys = [
    {
        id: 1,
        category: "Toddler",
        type: "stuffedAnimals",
        name: "Teddy Bear",
        price: 2,
        cost: .25,
        inStock: true
    },
    {
        id: 2,
        category: "Pre-Teen to Teen",
        type: "electronics",
        name: "Remote Control Airplane",
        price: 25,
        cost: 2.5,
        inStock: false
    },
    {
        id: 3,
        category: "Pre-Teen",
        type: "stuffedAnimals",
        name: "Teddy Bear",
        price: 5,
        cost: .12,
        inStock: true
    }
];

const slinky = {
    id: 44,
    category: "Pre-Teen to Adult",
    type: "activities",
    name: "Slinky",
    price: 7,
    cost: .04,
    inStock: true
};

toys.push(slinky);

const toyToFind = 2;

for (const toyInfo of toys) {
    if (toyInfo.id === toyToFind) {
    toyInfo.price = toyInfo.price * 1.05
    
    console.log(`The ${toyInfo.name} is for ${toyInfo.category} only! AND it costs ${toyInfo.price} dollars...`)
}
};