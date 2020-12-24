var selection = $("select");
var result = $("#result");

function getSelectedValue() {
    var selectedValue = $("#list").val();
    result.text(selectedValue);
};


$("#searchState").on("click", function () {
    var userText = $("textarea").val();
    var queryUrl =
        "https://developer.nps.gov/api/v1/campgrounds?stateCode=" + userText + "&api_key=PsnhlhXZuoOG7d4tp1e2PSphbmVmzt0nNtN4VgL8";
    $.ajax({
        url: queryUrl,
        method: "GET",
    }).then(function (response) {
        for (let i = 0; i < response.data.length && i < 5; i++) {
            var campsite = response.data[i];
            var descriptionEL = $("<div>");
            descriptionEL.text(campsite.description);
            var address = campsite.addresses;
            var newDiv = $("<div>");
            var campsiteName = $("<div>");
            campsiteName.text(campsite.name);
            var campAddress = $("<div>");
            newDiv.append(campsiteName);
            newDiv.append(campAddress);
            newDiv.append(descriptionEL);
            $(".test").append(newDiv);
            if (address && address.length > 0) {
                console.log(address[0].city);
                console.log(address[0].stateCode);
                console.log(address[0].postalCode);
                campAddress.text(address[0].city);
                // $(".test").text(address[0].city);

            } else {
                campAddress.text("Sorry!");
            }
        }


        console.log(response);
        // campsite name
        //  console.log(response.data[0].name);
        //  console.log(response.data[1].name);
        //  console.log(response.data[2].name);
        //  console.log(response.data[3].name);
        //  console.log(response.data[4].name);
        //  console.log(response.data[5].name);

        // description
        //  console.log(response.data[0].description);
        //  console.log(response.data[1].description);
        //  console.log(response.data[2].description);
        //  console.log(response.data[3].description);
        //  console.log(response.data[4].description);
        //  console.log(response.data[5].description);
        // for (let i = 0; i < response.data.length && i < 5; i++) {
        //   var data = response.data[i];
        //     console.log(data.name);
        //   }
    }
    );
});

function getWeatherInfo() {
    var city = $("#weather-input").val();
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=a919f8d6ebff3b8cdcbc03c1604cfc21";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        //    console.log(response);
        //    console.log(response.name);
        var unixSunset = (response.sys.sunset);
        var unixSunrise = (response.sys.sunrise);
        var Sunrise = new Date(unixSunrise * 1000);
        var sunset = new Date(unixSunset * 1000);
        // console.log(Sunrise);
        // console.log(sunset);
        // console.log(response.main.temp);
        // console.log(response.weather[0].description);

    })
};

$(".search").on("click", function () {
    getWeatherInfo();
});
