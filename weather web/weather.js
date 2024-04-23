const apiKey = "024838345d8a82ec2a44a7aadf37f90d";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
        const searchBox = document.querySelector(".input");
        const searchBtn = document.querySelector(".search-btn");
        const weatherIcon = document.querySelector(".rain-png");
        async function checkWeather(city){
            const response = await fetch(apiUrl + city `&appid=${apikey}`);
            if(response.status == 404){
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
            }
            else{
                var data = await response.json();
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
            if(data.weather[0].main == "Clouds"){
                weatherIcon.src = "images/clouds.png";
            }
            if(data.weather[0].main == "Clear"){
                weatherIcon.src = "images/clear.png";
            }
            if(data.weather[0].main == "Rain"){
                weatherIcon.src = "images/rain.png";
            }
            if(data.weather[0].main == "Drizzle"){
                weatherIcon.src = "images/drizzle.png";
            }
            if(data.weather[0].main == "Mist"){
                weatherIcon.src = "images/mist.png";
            }
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
            }    
        }
        searchBtn.addEventListener("click", ()=>{
            checkWeather(searchBox.value)
        })
        checkWeather();