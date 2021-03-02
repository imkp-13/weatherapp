// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// d2eccdf8b3bf4d0037f9281388c9ff8c

const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city-name');
const temp_real_val = document.getElementById('temp-real-val');
const temp_status = document.getElementById('temp-status');
const data_hide = document.querySelector('.middle-layer');
const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerHTML = `Please enter city name`;
        data_hide.classList.add('data-hide');
    } else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=d2eccdf8b3bf4d0037f9281388c9ff8c`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            const tempMood = arrData[0].weather[0].main;

            if (tempMood == 'Clear') {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#ECCC68'></i>"
            } else if (tempMood == 'Clouds') {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color:#F1F2F6'></i>"
            }else if (tempMood == 'Haze') {
                temp_status.innerHTML = "<i class='fas fa-smog' style='color:#8F8382'></i>"
            } else if (tempMood == 'Rain') {
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color:#A4B0BE'></i>"
            } else {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color:#ECCC68'></i>"
            }
            data_hide.classList.remove('data-hide');
        } catch {
            city_name.innerHTML = `Please enter valid city name`;
            data_hide.classList.add('data-hide');
        }
    }
}

submitBtn.addEventListener('click', getInfo);