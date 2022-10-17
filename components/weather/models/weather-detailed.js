class WeatherDetailed extends Weather {
  city;
  date;
  feelsLike;
  imgUrl;
  sunrise;
  sunset;
  humidity;
  wind;

  constructor(
    day,
    temp,
    weatherType,
    city,
    date,
    feelsLike,
    imgUrl,
    sunrise,
    sunset,
    humidity,
    wind
  ) {
    super(day, temp, weatherType);
    this.city = city;
    this.date = date;
    this.feelsLike = feelsLike;
    this.imgUrl = imgUrl;
    this.sunrise = sunrise;
    this.sunset = sunset;
    this.humidity = humidity;
    this.wind = wind;
  }

  getCity() {
    return `  ${this.city[0].toUpperCase() + this.city.slice(1)}`;
  }
  getDate() {
    return `${this.date}`;
  }

  getFeelsLike() {
    return `Feels like  ${this.feelsLike + "&deg;"}`;
  }

  getImgUrl() {
    return `${this.imgUrl}`;
  }

  getSunRise() {
    return `  Sunrise ${this.sunrise}`;
  }

  getSunSet() {
    return `  Sunset ${this.sunset}`;
  }

  getHumidity() {
    return `  ${this.humidity}%`;
  }

  getWind() {
    return `  ${this.wind} km/h`;
  }
}
