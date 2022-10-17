const widgetRoot = document.querySelector(".app__weather");

const weatherList = [];

const weatherRenderer = new WeatherComponentRender(widgetRoot);
new DataDownloader(widgetRoot, weatherList, weatherRenderer).getData();
