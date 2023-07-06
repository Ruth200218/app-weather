const apiKey = '509548ea927f5510e6bdef3f4ce40ca8';
        const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

        const searchBox = document.querySelector('.search input');
        const searchBtn = document.querySelector('.search button');
        const wheatherIcon = document.querySelector('.weather-icon');


        async function checkWeather(city) {
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`)

            if (response.status == 404) {
                document.querySelector('.error').style.display = 'block';
                document.querySelector('.weather').style.display = 'none';
            } else {
                let data = await response.json();

                document.querySelector('.city').innerHTML = data.name;
                document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';
                document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
                document.querySelector('.wind').innerHTML = data.wind.speed + 'km/';

                switch (data.weather[0].main){
                    case 'Clouds':
                        wheatherIcon.src = 'images/clouds.png'
                        break;
                    case 'Clear':
                        wheatherIcon.src = 'images/clear.png'
                        break;
                    case 'Rain':
                        wheatherIcon.src = 'images/rain.png'
                        break;
                    case 'Drizzle':
                        wheatherIcon.src = 'images/drizzle.png'
                        break;
                    case 'Mist':
                        wheatherIcon.src = 'images/mist.png'
                        break;           
                }
                
                document.querySelector('.weather').style.display = 'block';
                document.querySelector('.error').style.display = 'none';

            }

        }

        searchBtn.addEventListener("click", () => {
            checkWeather(searchBox.value);
        })