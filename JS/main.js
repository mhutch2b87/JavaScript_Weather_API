function findCityWeather(){
    let city = $( "#CitySubmitForm input[name=city]" ).val()
    $("#cityDisplay".toString()).text(city)

    $.get('https://api.openweathermap.org/data/2.5/weather?q=' + city +',usa&appid=07e54df310194b780f9cac2c5fe5e2cd', function(data){
            let high = data.main.temp_max
            let low = data.main.temp_min
            let forecast = data.weather[0].main
            let humidity = data.main.humidity
            // Conversions needed
            let high_F = parseFloat((high) - 273.15) * 1.8 + 32
            let low_F =  parseFloat((low) - 273.15) * 1.8 + 32
           
            //input data into table 

            $("#high_temp".toString()).text(high_F.toFixed(0) + "\xB0" + 'F')
            $("#low_temp".toString()).text(low_F.toFixed(0) + "\xB0" + 'F')
            $("#forecast".toString()).text(forecast)
            $("#humidity".toString()).text(humidity + "%")
    })

}

