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

export interface Binder {
    id: number;
    name: string;
    cards: (Card & {
        quantity: number;
    })[]

}
