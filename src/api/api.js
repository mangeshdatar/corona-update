import axios from 'axios';

const url = "https://covid19.mathdro.id/api";


export const covidAPI = async (country) => {
    let selectedCountry = url;

    if (country) {
        
        selectedCountry = `${url}/countries/${country}`
    }
    try{
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(selectedCountry);
        return {confirmed, recovered, deaths, lastUpdate}
       
    } catch (error) {
        
    }
}

export const dailyReport = async () => {
    try {
        const {data} = await axios.get(`${url}/daily`);
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            recovered: dailyData.recovered.total,
            deaths: dailyData.deaths.total,
            date:dailyData.reportDate
        }))
        return modifiedData;
     }
    catch (error) {
        
    }
}

export  const getCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`);
        return countries.map((country)=> country.name);
    } catch (error) {
        
    }
}