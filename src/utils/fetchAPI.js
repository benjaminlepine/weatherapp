import React from 'react';

const keyapi = "c456c057da472e4c57fabb1aecbeb70a"; // Clef de Benjamin
// const keyapi = "ef0eb98d901c7306544b4ebab228204a"; // Clef de Naba

const fetchAPI =   {
    FetchCurrentWeatherByCityName(thisContext, initialCities, cities, i) {

        let url = "https://api.openweathermap.org/data/2.5/weather?q=" +
            initialCities[i]
            + "&units=metric"
            + "&appid=" + keyapi;

        fetch(url)
            .then(res => res.json())
            .then(result => {
                const city = {
                    name: result.name,
                    id: result.id,
                    main: result.weather[0].main,
                    description: result.weather[0].description,
                    temp: result.main.temp,
                    temp_min: result.main.temp_min,
                    temp_max: result.main.temp_max,
                    icon: result.weather[0].icon
                };
                cities.push(city);
                thisContext.setState({cities});
            })
    },

    FetchDetailledWeatherByCityName() {

        let url = "https://api.openweathermap.org/data/2.5/forecast?q=Paris"
            + "&units=metric"
            + "&appid=" + keyapi;

        fetch(url)
            .then(res => res.json())
            .then(result => {
                console.log("result YES = ",result.city.country)
                // const city = {
                //     name: result.name,
                //     id: result.id,
                //     main: result.weather[0].main,
                //     description: result.weather[0].description,
                //     temp: result.main.temp,
                //     temp_min: result.main.temp_min,
                //     temp_max: result.main.temp_max,
                //     icon: result.weather[0].icon
                // };
                // cities.push(city);
                // thisContext.setState({cities});
            })
    },
};

export default fetchAPI


