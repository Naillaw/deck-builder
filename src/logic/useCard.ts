import {Card} from "@/type";
import cardApi from "@/api/cardApi";

export const useCard = () => {
    const get = (id: number): Card => cardApi.get(id)

    const getAll = (): Card[] => cardApi.getAll()

    return {
        get,
        getAll
    }
}
