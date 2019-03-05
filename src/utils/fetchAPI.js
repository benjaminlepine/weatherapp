import React from 'react';

const keyapi = "c456c057da472e4c57fabb1aecbeb70a"; // Clef de Benjamin
// const keyapi = "ef0eb98d901c7306544b4ebab228204a"; // Clef de Naba

const fetchAPI =   {
    FetchCurrentWeatherByCityName(thisContext, initialCities, cities, i) {

        let url = "https://api.openweathermap.org/data/2.5/weather?q="
            + initialCities[i]
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

    FetchDetailledWeatherByCityName(detailledCityInfos) {
        let city = window.location.pathname.split("/")[2];
        let url = "https://api.openweathermap.org/data/2.5/forecast?q="
            + city
            + "&units=metric"
            + "&appid=" + keyapi;

        let j = 0;
        // console.log("RESULT detailled city = ",detailledWeather)
        fetch(url)
            .then(res => res.json())
            .then(result => {
                detailledCityInfos.Temperature = result.list[0].main.temp;
                detailledCityInfos.Weather = result.list[0].weather[0].main;
                detailledCityInfos.Humidity = result.list[0].main.humidity;
                detailledCityInfos.Wind = result.list[0].wind.speed;
                detailledCityInfos.Country = result.city.country;
                detailledCityInfos.CityName = result.city.name;
                detailledCityInfos.Days = [];

                // for(let j=0;j<40;j=j+8){
                for(let i=0;i<5;i++){

                    let day = new Object();
                    day.Day = result.list[j].dt_txt;
                    day.Weather = result.list[j].weather[0].main;
                    day.Temp =  result.list[j].main.temp;
                    detailledCityInfos.Days.push(day)
                    j=j+8
                    // detailledCityInfos.Days[i].Day = result.list[0].dt_txt;
                    // detailledCityInfos.Days[i].Weather = result.list[0].weather[0].main;
                    // detailledCityInfos.Days[i].Temp = result.list[0].main.temp;
                }
                // }


                // detailledWeather.Temperature = result.list
                // for(let i = 6;i<40;i=i+8){
                //
                // }
                // detailledWeather.CityName = result.list[i].name

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


