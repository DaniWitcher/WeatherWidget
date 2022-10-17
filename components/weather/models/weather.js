class Weather {
  day;
  temp;
  weatherType;

  constructor(day, temp, weatherType) {
    this.day = day;
    this.temp = temp;
    this.weatherType = weatherType;
  }

  getDay() {
    return `${this.day}`;
  }

  getTemp() {
    return `${this.temp + "&deg;"}`;
  }

  getWeatherType() {
    return `${this.weatherType}`;
  }
}
