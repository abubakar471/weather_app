let weather = {
    "apikey" : "fc45bef7e159fe55bcaf6f7ebc58a0af",
    fetchWeather : function (city) {
        fetch("http://api.openweathermap.org/data/2.5/weather?appid=" + this.apikey + "&q=" + city)
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.displayWeather(data)
            })
    },
    displayWeather : function(data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        const temp_in_celsius = Math.floor(temp - 274);
        document.querySelector(".city").textContent = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").textContent = description;
        document.querySelector(".temp").textContent = temp_in_celsius + "°C";
        document.querySelector(".humidity").textContent = "Humidity : " + humidity + "%";
        document.querySelector(".wind").textContent = "Wind Speed : " + speed + "km/hr";

        // remove classlist loading to show the contents of weather results
        document.querySelector(".weather").classList.remove("loading");

        // changing background image according to place
        document.body.style.backgroundImage = "url('https://source.unsplash.com/random/?" + name + "')";
    },
    search : function() {
        this.fetchWeather(document.querySelector(".search-bar").value)
    }

}

document.querySelector(".search button").addEventListener('click', () => {
    weather.search();
}) 

document.querySelector(".search-bar").addEventListener('keyup', () => {
    if (event.key == "Enter") {
        weather.search();
    }
})

// if(navigator){
    
//     fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(api)}`)
//     .then(response => {
//         /*
//         first of all we need to convert the whole 
//         response into a 
//         response.json();
//         and then we need to return this to the next 
//         promise i mean "then"
//         */
//         return response.json();
//     })
//     .then(data => {
//         /* 
//         after what we got from the last promise, i mean
//          return response.json(), now we have 'data' object, 
//          but the problem is the data is in json object form
//          so we have to convert it into javascript object form,
//          for that we use the JSON.parse(data.contents) to convert
//          it into a a javascript objecet, now we can access its 
//          properties and play with them.
//         */
//         const contents = JSON.parse(data.contents)
//         console.log(contents);
//         const temperature = contents.main.temp;
//         const summary = contents.weather[0].description;
//         const timezone = contents.name + '/' + contents.sys.country;
        
//         // set DOM Elements from the api;
//         temperatureDegree.textContent = temperature;
//         temperatureDescription.textContent = summary;
//         locationTimezone.textContent = timezone;

//         // set icon
//         const icon = contents.weather[0].main;

//         if(icon.toUpperCase() === "CLOUDS"){
//             let icons = 'cloudy';
//             console.log('working')
//             setIcons(icons, document.querySelector('.icon'))
//         } 
//         else if(icon.toUpperCase() === "RAIN"){
//             let icons = 'Rain';
//             console.log('working')
//             setIcons(icons, document.querySelector('.icon'))
//         }
        
        
//         let celsius = (temperature - 32) * (5/9)
//         // change farenhite to celsius
//         temperatureSection.addEventListener('click', () => {
//             if(temperatureSpan.textContent === "F"){
//                 temperatureSpan.textContent = "C"
//                 temperatureDegree.textContent = Math.floor(celsius)
//             } else{
//                 temperatureSpan.textContent = "F";
//                 temperatureDegree.textContent = temperature
//             }
//         })
//     })
// }