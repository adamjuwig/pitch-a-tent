exports.handler = async (event) => {
  const city = (event.queryStringParameters || {}).q || "";
  if (!city || city.length > 60) {
    return { statusCode: 400, body: "Invalid city" };
  }
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" + encodeURIComponent(city) +
    "&units=imperial&appid=" + process.env.OPENWEATHER_API_KEY;
  const res = await fetch(url);
  return {
    statusCode: res.status,
    headers: { "Content-Type": "application/json" },
    body: await res.text(),
  };
};
