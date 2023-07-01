export interface Card {
    id: number;
    name: string;
    archetype: string;
    imageLink: string;
    effect: string;
    type: number;
    attack?: number;
    defense?: number;
}

export interface Deck {
    id: number;
    name: string;
    userId: number;
    cardList: number[];
}

