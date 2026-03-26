import { removetv } from "../reducers/tvSlice"
import axios from "../../utils/axios"
import { loadtv } from "../reducers/tvSlice"


export const asyncloadtv =  (id) => async(dispatchEvent, getState) => {
    try {
        const detail = await axios.get(`/tv/${id}`)
        const externalid = await axios.get(`/tv/${id}/external_ids`)
        const recommendations = await axios.get(`/tv/${id}/recommendations`)
        const similar = await axios.get(`/tv/${id}/similar`)
        const vedios = await axios.get(`/tv/${id}/videos`)
         const translations = await axios.get(`/tv/${id}/translations`)
        const watchproviders = await axios.get(`/tv/${id}/watch/providers`)
        let theultimatedetail = {
            details: detail.data,
            externalid: externalid.data,
            recommendations: recommendations.data.results,
            similar: similar.data.results,
            translations: translations.data.translations.map(t=>t.english_name),
            vedios: vedios.data.results.find((m)=>m.type === "Trailer"),
            watchproviders: watchproviders.data.results.IN,
        }
        dispatchEvent(loadtv(theultimatedetail))
        
    } catch (error) {
        console.log("Error: ", error)
    }
}