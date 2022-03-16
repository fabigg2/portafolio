import { useState } from "react"


export const useMutation = (funcPetition) => {

    const [state, setState] = useState({
        error: null,
        isLoading: false,
        data: null
    });

    const mutate = async (data, callback = null) => {
        setState((current) => ({ ...current, isLoading: true }));
        try {
            const response = await funcPetition(data);
            setState((current) => ({ ...current, data: response, isLoading: false }))
            return response

        } catch (error) {
            setState((current) => ({ ...current, error: error, isLoading: false }))
            return error
        }

    }

    return {
        error: state.error,
        isLoading: state.isLoading,
        data: state.data,
        mutate
    }

}

export const useQuery = async(funcPetition) => {

    const [state, setState] = useState({
        error: null,
        isLoading: false,
        data: null
    });

    const query = async (data) => {
        setState((current) => ({ ...current, isLoading: true }));
        try {
            const response = await funcPetition(data);
            setState((current) => ({ ...current, data: response, isLoading: false }))
            return response

        } catch (error) {
            setState((current) => ({ ...current, error: error, isLoading: false }))
            return error
        }

    }

    return {
        error: state.error,
        isLoading: state.isLoading,
        data: state.data,
        query
    }

}