class DataDownloader {
  widgetRoot;
  weatherList;
  weatherRenderer;
  url = "https://aerisweather1.p.rapidapi.com/forecasts/baku,az";
  options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6507f434e3mshb802c99a200b5bbp16ae32jsn69c628e1f5c3",
      "X-RapidAPI-Host": "aerisweather1.p.rapidapi.com",
    },
  };

  constructor(widgetRoot, weatherList, renderer) {
    this.widgetRoot = widgetRoot;
    this.weatherList = weatherList;
    this.weatherRenderer = renderer;
  }

  getData() {
    (async () => {
      let response = await fetch(this.url, this.options);
      let data = await response.json();
      let week = data.response[0].periods;
      let place = data.response[0].place;

      this.addWeatherFullWeek(week, this.weatherList, place);
      this.weatherRenderer.render(this.weatherList, 0);
      this.createListeners();
    })();
  }

  createListener(element) {
    element.addEventListener("click", () => {
      this.weatherRenderer.changeWeatherDetailed(
        this.weatherList,
        element.id.slice(7)
      );
    });
  }

  createListeners() {
    let listenerElementsList = [];
    for (let i = 0; i < 7; i++) {
      listenerElementsList.push(document.getElementById("data-id" + i));
    }

    listenerElementsList.forEach((element) => {
      this.createListener(element);
    });
  }

  addWeather(day, weatherList, dayNumber, place) {
    const weatherTemp = new WeatherDetailed(
      this.getDayName(new Date(day.dateTimeISO).getDay()),
      day.minTempC,
      day.weather,
      place.name,
      this.getMonthName(new Date(day.dateTimeISO).getMonth()) +
        " " +
        new Date(day.dateTimeISO).getDate(),
      day.minFeelslikeC,
      day.icon,
      new Date(day.sunriseISO).getHours() +
        ":" +
        new Date(day.sunriseISO).getMinutes(),
      new Date(day.sunsetISO).getHours() +
        ":" +
        new Date(day.sunsetISO).getMinutes(),
      day.humidity,
      day.windSpeedKPH
    );

    weatherList.push(weatherTemp);
  }

  addWeatherFullWeek(week, weatherList, place) {
    for (let i = 0; i < 7; i++) {
      this.addWeather(week[i], weatherList, i, place);
    }
  }

  getDayName(dayNumber) {
    switch (dayNumber) {
      case 2:
        return "Monday";
      case 3:
        return "Tuesday";
      case 4:
        return "Wednesday";
      case 5:
        return "Thursday";
      case 6:
        return "Friday";
      case 0:
        return "Saturday";
      case 1:
        return "Sunday";
    }
  }

  getMonthName(monthNumber) {
    switch (monthNumber) {
      case 0:
        return "January";
      case 1:
        return "February";
      case 2:
        return "March";
      case 3:
        return "April";
      case 4:
        return "May";
      case 5:
        return "June";
      case 6:
        return "July";
      case 7:
        return "August";
      case 8:
        return "September";
      case 9:
        return "October";
      case 10:
        return "November";
      case 11:
        return "December";
    }
  }
}
