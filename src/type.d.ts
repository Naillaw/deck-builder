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
