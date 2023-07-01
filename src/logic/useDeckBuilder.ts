import {Ref, ref, watchEffect} from "vue";
import {Card, Deck} from "@/type";

export const useDeckBuilder = () => {
    const deckList = ref([]) as Ref<Deck[]>

    const localStorageData = window.localStorage.getItem('deck-builder')
    if (localStorageData !== null) {
        try {
            deckList.value = JSON.parse(localStorageData)
        } catch (e) {
            console.error(e);
        }
    }

    watchEffect(() => {
        window.localStorage.setItem('deck-builder', JSON.stringify(deckList.value))
    })

    //const get = (id: number): Deck => {
    //    const index = deckList.value.findIndex(deck => deck.id === id)
    //    return deckList[index]
    //}

    const add = (cardList: number[], name: string, userId: number) => {
        const id: number = Math.max(...deckList.value.map(deck => deck.id), 0) + 1
        deckList.value.push({id, name, userId, cardList})
    }

    return {
        deckList,
        add,
    }
}
