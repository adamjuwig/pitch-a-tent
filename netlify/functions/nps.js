exports.handler = async (event) => {
  const state = (event.queryStringParameters || {}).stateCode || "";
  if (!/^[A-Za-z]{2}$/.test(state)) {
    return { statusCode: 400, body: "Invalid stateCode" };
  }
  const url =
    "https://developer.nps.gov/api/v1/campgrounds?stateCode=" + state +
    "&api_key=" + process.env.NPS_API_KEY;
  const res = await fetch(url);
  return {
    statusCode: res.status,
    headers: { "Content-Type": "application/json" },
    body: await res.text(),
  };
};
