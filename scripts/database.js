const database = {
    fish: [
        {
            image: "Imgs/neon-tetra.jpg",
            name: "Neon tetra",
            size: "1.25in",
            species: "Fish",
            location: "Southeastern Colombia",
            food: "algae"

        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}