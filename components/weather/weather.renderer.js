class WeatherComponentRender {
  rootElement;
  weatherHTMLElement;
  weatherDetailedElement;

  constructor(rootElement) {
    this.rootElement = rootElement;
  }

  render(weatherList, index) {
    this.rootElement.innerHTML = "";

    this.weatherHTMLElement = document.createElement("div");
    this.weatherHTMLElement.classList.add("weather");

    this.weatherDetailedElement = this.getWeatherDetailed(weatherList, index);
    this.weatherHTMLElement.appendChild(this.weatherDetailedElement);

    this.weatherWeeklyElement = this.getWeatherWeeklyElement(weatherList);
    this.weatherHTMLElement.appendChild(this.weatherWeeklyElement);

    this.rootElement.appendChild(this.weatherHTMLElement);
  }

  createElement(tagName, classes, html) {
    const element = document.createElement(tagName);
    element.classList.add(classes);
    if (Boolean(html)) {
      element.innerHTML = html;
    }
    return element;
  }

  getWeatherDaily(weather, index) {
    const weatherHTMLElement = this.createElement(
      "div",
      "weather-weekly__weather-daily"
    );
    weatherHTMLElement.id = "data-id" + index;

    const tempImg = this.createElement("img", "weather-daily__icon");
    tempImg.src =
      "./components/weather/images/" + weatherList[index].getImgUrl();
    weatherHTMLElement.appendChild(tempImg);

    const weatherTempHTML = this.createElement(
      "div",
      "weather-daily__temp",
      weather.getTemp()
    );
    weatherHTMLElement.appendChild(weatherTempHTML);

    const weatherDayHTML = this.createElement(
      "div",
      "weather-daily__day",
      weather.getDay()
    );
    weatherHTMLElement.appendChild(weatherDayHTML);

    return weatherHTMLElement;
  }

  getWeatherWeeklyElement(weatherList) {
    let index = 0;
    const weatherListHTMLElement = this.createElement(
      "div",
      "weather__weather-weekly"
    );
    weatherList.forEach((weather) => {
      weatherListHTMLElement.appendChild(this.getWeatherDaily(weather, index));
      index++;
    });
    return weatherListHTMLElement;
  }

  changeWeatherDetailed(weatherList, index) {
    document.getElementsByClassName("text-left__date")[0].innerHTML =
      weatherList[index].getDate();
    document.getElementsByClassName("text-left__day")[0].innerHTML =
      weatherList[index].getDay();
    document.getElementsByClassName("text-left__temp")[0].innerHTML =
      weatherList[index].getTemp();
    document.getElementsByClassName("text-left__feels-like")[0].innerHTML =
      weatherList[index].getFeelsLike();
    document.getElementsByClassName("picture__icon")[0].src =
      "./components/weather/images/" + weatherList[index].getImgUrl();
    document.getElementsByClassName("picture__weather")[0].innerHTML =
      weatherList[index].getWeatherType();
    document.getElementsByClassName("text-right__sunrise")[0].innerHTML =
      weatherList[index].getSunRise();
    document.getElementsByClassName("text-right__sunset")[0].innerHTML =
      weatherList[index].getSunSet();
    document.getElementsByClassName("text-right__humidity")[0].innerHTML =
      weatherList[index].getHumidity();
    document.getElementsByClassName("text-right__wind")[0].innerHTML =
      weatherList[index].getWind();
  }
  getWeatherDetailed(weatherList, index) {
    const weatherDetailedElement = this.createElement(
      "div",
      "weather__detailed"
    );

    const weatherTextLeftElement = this.createElement(
      "div",
      "detailed__text-left"
    );

    const tempCity = this.createElement(
      "div",
      "text-left__city",
      weatherList[index].getCity()
    );
    tempCity.classList.add("bi-geo-alt-fill");
    weatherTextLeftElement.appendChild(tempCity);

    weatherTextLeftElement.appendChild(
      this.createElement("div", "text-left__date", weatherList[index].getDate())
    );
    weatherTextLeftElement.appendChild(
      this.createElement("div", "text-left__day", weatherList[index].getDay())
    );

    const tempTemp = this.createElement(
      "div",
      "text-left__temp",
      weatherList[index].getTemp()
    );
    tempTemp.classList.add("bi-thermometer-half");
    weatherTextLeftElement.appendChild(tempTemp);

    weatherTextLeftElement.appendChild(
      this.createElement(
        "div",
        "text-left__feels-like",
        weatherList[index].getFeelsLike()
      )
    );
    weatherDetailedElement.appendChild(weatherTextLeftElement);

    const weatherImageElement = this.createElement("div", "detailed__picture");

    const tempImg = this.createElement("img", "picture__icon");
    tempImg.src =
      "./components/weather/images/" + weatherList[index].getImgUrl();
    weatherImageElement.appendChild(tempImg);
    weatherImageElement.appendChild(
      this.createElement(
        "div",
        "picture__weather",
        weatherList[index].getWeatherType()
      )
    );
    weatherDetailedElement.appendChild(weatherImageElement);

    const weatherTextRightElement = this.createElement(
      "div",
      "detailed__text-right"
    );
    const tempSunrise = this.createElement(
      "div",
      "text-right__sunrise",
      weatherList[index].getSunRise()
    );
    tempSunrise.classList.add("bi-sunrise");
    weatherTextRightElement.appendChild(tempSunrise);

    const tempSunset = this.createElement(
      "div",
      "text-right__sunset",
      weatherList[index].getSunSet()
    );
    tempSunset.classList.add("bi-sunset");
    weatherTextRightElement.appendChild(tempSunset);

    const tempHumidity = this.createElement(
      "div",
      "text-right__humidity",
      weatherList[0].getHumidity()
    );
    tempHumidity.classList.add("bi-droplet");
    weatherTextRightElement.appendChild(tempHumidity);

    const tempWind = this.createElement(
      "div",
      "text-right__wind",
      weatherList[0].getWind()
    );
    tempWind.classList.add("bi-wind");
    weatherTextRightElement.appendChild(tempWind);

    weatherDetailedElement.appendChild(weatherTextRightElement);

    return weatherDetailedElement;
  }
}
