const fetchWeather = (city, searchType) => {
  const API_LINK = "http://api.openweathermap.org/data/2.5/";
  const API_KEY = "d17433982bb84048fc09d3ded8685394";
  // api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=d17433982bb84048fc09d3ded8685394
  const link = API_LINK + searchType + "?q=" + city + "&APPID=" + API_KEY;
  return fetch(link).then(resp => {
    if (resp.ok) {
      return resp.json();
    }
    throw new Error('Problem with getting data');
  });
};

export default fetchWeather;
