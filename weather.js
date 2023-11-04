function Search() {

  if (input.value) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=d9a75658a55f7262f1bd4bc7d26ddcbf`).then((response) => {
      response.json().then((data) => {

        let temp = data.main.temp
        let cel = eval(temp - 273.15)
        let cel1 = cel.toFixed(1)

        let mintemp = data.main.temp_min
        let min = eval(mintemp - 273.15)
        let min1 = min.toFixed(1)

        let maxtemp = data.main.temp_max
        let max = eval(maxtemp - 273.15)
        let max1 = max.toFixed(1)

        let humid = data.main.humidity
        let pres = data.main.pressure

        let wind = data.wind.speed

        let feel = data.main.feels_like
        let feel1 = eval(feel - 273.15)
        let feel2 = feel1.toFixed(1)

        current = document.getElementById("curtemp")
        current.innerHTML = `${cel1}&#176;C`

        cityname = document.getElementById("city")
        cityname.innerHTML = `${data.name}`
            
        descrip = document.getElementById("desc")
        descrip.innerHTML = `${data.weather[0].description}`


        var image = document.getElementById("bgimg")
        let Main = data.weather[0].main
        if (Main == 'Clouds') {
          image.style.backgroundImage = "url('./images/cloud.jpg')"
        }
        else if (Main == 'Clear') {
          image.style.backgroundImage = "url('./images/clear.jpg')"
        }
        else if (Main == 'Snow') {
          image.style.backgroundImage = "url('./images/snow.jpg')"
        }
        else if (Main == 'Mist') {
          image.style.backgroundImage = "url('./images/mist.jpg')"
        }
        else if (Main == 'Rain') {
          image.style.backgroundImage = "url('./images/rain.png')"
        }
        else if (Main == 'Drizzle') {
          image.style.backgroundImage = "url('./images/drizzle.png')"
        }
        else if (Main == 'Haze') {
          image.style.backgroundImage = "url('./images/haze.png')"
        }

        else if (Main == 'Smoke') {
          image.style.backgroundImage = "url('./images/smoke.jpg')"
        }



        result.innerHTML = `<div class="container">

    <div class="row">
  
      <div class="col-md-4">
        <div class="box">
          <h3 class="text-center">Min Temp</h3>
          <p class="text-center">${min1}&#176;C</p> 
        </div>
      </div>
  
      <div class="col-md-4">
        <div class="box">
          <h3 class="text-center">Max Temp</h3>
          <p class="text-center">${max1}&#176;C</p> 
        </div>
      </div>
  
      <div class="col-md-4">
        <div class="box">
          <h3 class="text-center">Wind Speed</h3>
          <p class="text-center">${wind}m/s</p> 
        </div>
      </div>
  
    </div>
    
    <div class="row">
  
      <div class="col-md-4">
        <div class="box">
          <h3 class="text-center">Humdity</h3>
          <p class="text-center">${humid}%</p>              
         </div>
      </div>
  
      <div class="col-md-4">
        <div class="box">
          <h3 class="text-center">Feels like</h3>
          <p class="text-center">${feel2}&#176;C</p> 
        </div>
      </div>
  
      <div class="col-md-4">
        <div class="box">
          <h3 class="text-center">Pressure</h3>
          <p class="text-center">${pres}hPa</p> 
        </div>
      </div>
  
    </div>
  
  </div>`


      })
    }).catch(() => { alert('city not found') })


  }
  else {
    alert('please enter a city name')
  }


}

function Refresh() {
  window.location.reload()
}