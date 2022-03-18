let weather = {
    apiKey: "2d3aa7eb5d3cf4e429f6c85a67e1b355",
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + city 
        + "&appid=" + this.apiKey
        + "&units=metric")
        .then(response => response.json())
        .then(data => this.displayWeather(data))
    },
    displayWeather: function(data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const { temp, humidity} = data.main;
        const { speed } = data.wind;

        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png"
        document.querySelector(".temp").innerText = temp
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".description").innerText = description;
        document.querySelector(".wind-speed").innerText = "Wind Speed: " + speed + " kmph";

        //console.log(name, icon, description, temp, humidity, speed)
    },
    weatherByCity: function () {
        const city = document.querySelector(".search-bar").value
        this.fetchWeather(city)
    }
}

document.querySelector(".search button").addEventListener("click", function() {
    weather.weatherByCity();
})

document.querySelector(".search-bar").addEventListener("keyup", function(event) {
    if(event.key == "Enter") {
        weather.weatherByCity()
    }
})