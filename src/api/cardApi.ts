import {Card} from "@/type";

export default {
    get: (id?: number): Card => {
        const index = fixtures.findIndex((card) => card.id === id)
        return fixtures[index]
    },
    getAll: (): Card[] => fixtures
}

const fixtures: Card[] = [
    {
        id: 1,
        name: 'Assaut de l\'Air - Raye',
        archetype: 'Sky Striker',
        imageLink: 'https://placehold.co/218x320',
        effect: 'Ceci est un effet',
        type: 1,// monster
        attack: 1500,
        defense: 1500,
    },
    {
        id: 2,
        name: 'Assaut de l\'Air - Mobilisation - À l\'Attaque !',
        archetype: 'Sky Striker',
        imageLink: 'https://placehold.co/218x320',
        effect: 'Ceci est un effet de carte magie',
        type: 2,// magie
    }
]
