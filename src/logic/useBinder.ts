import {Binder} from "@/type";
import binderApi from "@/api/binderApi";

export const useBinder = () => {
    const get = (id: number): Binder => binderApi.get(id)

    const getAll = (): Binder[] => binderApi.getAll()

    return {
        get,
        getAll
    }
}
