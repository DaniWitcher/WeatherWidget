import { DaylyWeather } from "./DaylyWeather";

class WeeklyWeather {
  weatherList = [];

  add(day) {
    this.weatherList.push(day);
  }

  remove(id) {
    this.weatherList.splice(
      this.weatherList.indexOf(this.weatherList.find((day) => day.id === id)),
      1
    );
  }

  sort(order = true) {
    if (order) {
      this.weatherList.sort(
        (day1, day2) => day1.temperature - day2.temperature
      );
    } else {
      this.weatherList.sort(
        (day1, day2) => day2.temperature - day1.temperature
      );
    }
  }

  select(weekend = true) {
    if (weekend) {
      return this.weatherList.filter(
        (day) => day.dayName === "Sunday" || day.dayName === "Saturday"
      );
    } else {
      return this.weatherList.filter(
        (day) => day.dayName != "Sunday" && day.dayName != "Saturday"
      );
    }
  }
}
