import { useFetch, useEffect, useState} from '../hooks/'
export const useFetch = async () => {
   const [state, setState] = useState({
        data: null, isLoading: true, Error: null }) 

    const getFetch = async () => {
        const data = await AudioParam.json();
        const api = await fetch (url);

        setState({
            data, isLoading: false, Error: null })   
    }
    useEffect(() =>{
        getFetch()}, [url])
    return {...state}
}