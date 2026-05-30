import axios from "axios";
import { cache } from "react";

interface greenCarouselContent{
    id: number;
    content: string;
}

// map < key , dataObject {} > 
const contentCache = new Map<string , {timeStamp:number,data : greenCarouselContent[]}>();

const CACHE_DURATION = 10 * 60 * 1000;

// fetching the content

// map structure < a string (same for all) is this like password to access map? , object{timestamp , dataObject : greencarouselContent[] } > is this right?
// refreshcontent is always false right , is it redundant?


const contentFetch = async(refreshContent = false) : Promise<greenCarouselContent[]> =>{
    const cacheKey = "greenCarousel_data";
    const now = Date.now();
    const cached = contentCache.get(cacheKey);

    if(!refreshContent && cached && ( now - cached.timeStamp < CACHE_DURATION  )){
        return cached.data;
    }

    const {data} = await axios.get<greenCarouselContent[]>('http:/api/v1/greenCarouselContent');

    contentCache.set(cacheKey,{
        timeStamp:now,
        data: data
    }
    );

    return data;
}

