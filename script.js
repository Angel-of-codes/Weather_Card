// hello to weather api script 


const api_key = '0315f4349b9a13d6e559c698b64d47d5'
const api_url = 'https://api.openweathermap.org/data/2.5/weather?units=metric'
const icon_url = 'https://openweathermap.org/img/wn/'



async function chek_kar() {
    var place = document.querySelector('#searchBox').value;
    const res = await fetch(api_url + `&q=${place}&appid=${api_key}`);
    var data = await res.json();

    if (data.cod != 200) {
        alert('Please check place name')

    } else {
        document.querySelector('#humidity').innerHTML = data.main.humidity
        document.querySelector('#windspeed').innerHTML = data.wind.speed
        document.querySelector('#tem').innerHTML = data.main.feels_like
        document.querySelector('#quotes').innerHTML = data.weather[0].main
        document.querySelector('.Weather_type').innerHTML = data.weather[0].description
        document.querySelector('#min_temp').innerHTML = data.main.temp_min
        document.querySelector('#max_temp').innerHTML = data.main.temp_max
        document.querySelector('.status_img').src = icon_url + data.weather[0].icon + '@2x.png'
    }
}

