import { useEffect} from "react";
import { useEffect, useState} from "react";
import { GifItem} from "./GifItem";

const gets = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=8zKCVcBVBp6yL18scW8j5L2bPNETnJq0&q=category&limit=25&offset=0&rating=g&lang=en`
    const resp = await fetch (url)
    const {data} = await resp.json()
    const gifs = data.map (img =>{
        return {
            id: img.edu,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
    return gifs
}

export const GifGrid = ({category}) => {
    useEffect(() => {
        console.log(category)
    }, [])
    
    return(
        <>
            <h3> {category} </h3>
            <p> Prueba</p>
        </>
    )
}


