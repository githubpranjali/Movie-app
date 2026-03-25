import { removemovie } from "../reducers/movieSlice"
import axios from "../../utils/axios"
import { loadmovie } from "../reducers/movieSlice"


export const asyncloadmovie =  (id) => async(dispatchEvent, getState) => {
    try {
        const detail = await axios.get(`/movie/${id}`)
        const externalid = await axios.get(`/movie/${id}/external_ids`)
        const recommendations = await axios.get(`/movie/${id}/recommendations`)
        const similar = await axios.get(`/movie/${id}/similar`)
        const vedios = await axios.get(`/movie/${id}/videos`)
         const translations = await axios.get(`/movie/${id}/translations`)
        const watchproviders = await axios.get(`/movie/${id}/watch/providers`)
        let theultimatedetail = {
            details: detail.data,
            externalid: externalid.data,
            recommendations: recommendations.data.results,
            similar: similar.data.results,
            translations: translations.data.translations.map(t=>t.english_name),
            vedios: vedios.data.results.find((m)=>m.type === "Trailer"),
            watchproviders: watchproviders.data.results.IN,
        }
        dispatchEvent(loadmovie(theultimatedetail))
        
    } catch (error) {
        console.log("Error: ", error)
    }
}