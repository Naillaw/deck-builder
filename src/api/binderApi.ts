import {Binder} from "@/type";

export default {
    get: (id?: number): Binder => {
        const index = fixtures.findIndex((card) => card.id === id)
        return fixtures[index]
    },
    getAll: (): Binder[] => fixtures
}

const fixtures: Binder[] = [
    {
        id: 1,
        name: 'Mon classeur',
        cards: [
            {
                id: 1,
                name: 'Assaut de l\'Air - Raye',
                archetype: 'Sky Striker',
                imageLink: 'https://placehold.co/218x320',
                effect: 'Ceci est un effet',
                type: 1,// monster
                attack: 1500,
                defense: 1500,
                quantity: 3,
            },
            {
                id: 2,
                name: 'Assaut de l\'Air - Mobilisation - À l\'Attaque !',
                archetype: 'Sky Striker',
                imageLink: 'https://placehold.co/218x320',
                effect: 'Ceci est un effet de carte magie',
                type: 2,// magie
                quantity: 2,
            }
        ]
    },
]
