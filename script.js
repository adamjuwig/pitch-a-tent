var selection = $("select");
var result = $("#result");
var names = [];

function getSelectedValue() {
    var selectedValue = $("#list").val();
    result.text(selectedValue);
};

function myFunction() {
    var element = document.getElementById("hidden");
    element.classList.remove("hide");
};

function getWeatherInfo() {
    var selectedValue = $("#list").val();
    var city = [];
    if ((selectedValue === "AZ")) {
        city = ["phoenix", "tucson", "flagstaff"];
    } if ((selectedValue === "CA")) {
        city = ["San Diego", "San Jose", "San Francisco"];
    } if ((selectedValue === "AK")) {
        city = ["Anchorage", "Juneau", "Fairbanks"];
    } if ((selectedValue === "AR")) {
        city = ["Little Rock", "Hot Springs", "Fayetteville"];
    } if ((selectedValue === "AL")) {
        city = ["Birmingham", "Huntsville", "Montgomery"];
    } if ((selectedValue === "CO")) {
        city = ["Denver", "Colorado Springs", "Aurora"];
    } if ((selectedValue === "CT")) {
        city = ["Bridgeport", "New Haven", "Stamford"];
    } if ((selectedValue === "DE")) {
        city = ["Wilmington", "Dover", "Newark"];
    } if ((selectedValue === "DC")) {
        city = ["Washington,D.C."];
    } if ((selectedValue === "FL")) {
        city = ["Jacksonville", "Miami", "Tampa"];
    } if ((selectedValue === "GA")) {
        city = ["Atlanta", "Augusta", "Columbus"];
    } if ((selectedValue === "HI")) {
        city = ["Honolulu", "Kailua", "Pearl City"];
    } if ((selectedValue === "ID")) {
        city = ["Boise", "Meridan", "Nampa"];
    } if ((selectedValue === "IL")) {
        city = ["Chicago", "Aurora", "Naperville"];
    } if ((selectedValue === "IN")) {
        city = ["Indianapolis", "Fort Wayne", "Evansville"];
    } if ((selectedValue === "IA")) {
        city = ["Des Moines", "Cedar Rapids", "Davenport"];
    } if ((selectedValue === "KS")) {
        city = ["Wichita", "Overland Park", "Kansas City"];
    } if ((selectedValue === "KY")) {
        city = ["Louisville", "Lexington", "Bowling Green"];
    } if ((selectedValue === "LA")) {
        city = ["New Orleans", "Baton Rouge", "Shreveport"];
    } if ((selectedValue === "ME")) {
        city = ["Portland", "Lewiston", "Bangor"];
    } if ((selectedValue === "MD")) {
        city = ["Baltimore", "Columbia", "Germantown"];
    } if ((selectedValue === "MA")) {
        city = ["Boston", "Worcester", "Springfield"];
    } if ((selectedValue === "MI")) {
        city = ["Detroit", "Grand Rapids", "Warren"]
    } if ((selectedValue === "MN")) {
        city = ["Minneapolis", "Saint Paul", "Rochester"];
    } if ((selectedValue === "MS")) {
        city = ["Jackson", "Gulfport", "Southaven"];
    } if ((selectedValue === "MO")) {
        city = ["Kansas City", "Saint Louis", "Springfield"];
    } if ((selectedValue === "MT")) {
        city = ["Billings", "Bozeman", "Mizzoula"];
    } if ((selectedValue === "NE")) {
        city = ["Omaha", "Lincoln", "Bellevue"];
    } if ((selectedValue === "NV")) {
        city = ["Las Vegas", "Henderson", "Reno"];
    } if ((selectedValue === "NY")) {
        city = ["New York City", "Buffalo", "Rochester"];
    } if ((selectedValue === "NC")) {
        city = ["Charlotte", "Raleigh", "Greensboro"];
    } if ((selectedValue === "OH")) {
        city = ["Columbus", "Cleveland", "Cincinnati"];
    } if ((selectedValue === "OK")) {
        city = ["Oklahoma City", "Tulsa", "Norman"];
    } if ((selectedValue === "OR")) {
        city = ["Portland", "Salem", "Eugene"];
    } if ((selectedValue === "PA")) {
        city = ["Philadelphia", "Pittsburgh", "Allentown"];
    } if ((selectedValue === "RI")) {
        city = ["Providence", "Cranston", "Warick"];
    } if ((selectedValue === "SC")) {
        city = ["Charleston", "Columbia", "North Charleston"];
    } if ((selectedValue === "SD")) {
        city = ["Sioux Falls", "Rapid City", "Aberdeen"];
    } if ((selectedValue === "TN")) {
        city = ["Nashville", "Memphis", "Knoxville"];
    } if ((selectedValue === "TX")) {
        city = ["Houston", "Austin", "Dallas"];
    } if ((selectedValue === "UT")) {
        city = ["Salt Lake City", "West Valley City", "Provo"];
    } if ((selectedValue === "VT")) {
        city = ["Burlington", "Rutland", "Montpelier"];
    } if ((selectedValue === "VA")) {
        city = ["Virginia Beach", "Norfolk", "Chesapeake"];
    } if ((selectedValue === "WA")) {
        city = ["Seattle", "Spokane", "Tacoma"];
    } if ((selectedValue === "WV")) {
        city = ["Charleston", "Huntington", "Morgantown"];
    } if ((selectedValue === "WI")) {
        city = ["Milwaukee", "Madison", "Green Bay"];
    } if ((selectedValue === "WY")) {
        city = ["Cheyenne", "Casper", "Laramie"];
    }

    for (let i = 0; i < city.length; i++) {

        cities = city[i];

        var queryURL = "/api/weather?q=" + encodeURIComponent(cities);

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            // var unixSunset = (response.sys.sunset);
            // var unixSunrise = (response.sys.sunrise);
            // var Sunrise = new Date(unixSunrise * 1000);
            // var sunset = new Date(unixSunset * 1000);
            var cityHigh = response.main.temp_max;
            var cityLow = response.main.temp_min
            var currentCity = response.name;
            names.push(currentCity);

            $(".cityHigh").append(currentCity + ": " + cityHigh.toFixed(0) + "&#8457" + " " + "/" + " " + cityLow.toFixed(0) + "&#8457" + "\n" + "<br>")

        })
    }
};

function empty() {
    var campOneEl = $("#campOne");
    var campTwoEl = $("#campTwo");
    var campThreeEl = $("#campThree");
    var campFourEl = $("#campFour");
    var campOneDescEl = $("#desOne");
    var campTwoDescEl = $("#desTwo");
    var campThreeDescEl = $("#desThree");
    var campFourDescEl = $("#desFour");

    campOneDescEl.empty();
    campTwoDescEl.empty();
    campThreeDescEl.empty();
    campFourDescEl.empty();
    campOneEl.empty();
    campTwoEl.empty();
    campThreeEl.empty();
    campFourEl.empty();

    var weatherEl = $("#weatherEl");
    weatherEl.empty();

};

$("#list").on("change", function () {
    $("#favOnes").html('<i class="material-icons">favorite_border</i>');
    $("#favTwos").html('<i class="material-icons">favorite_border</i>');
    $("#favThrees").html('<i class="material-icons">favorite_border</i>');
    $("#favFours").html('<i class="material-icons">favorite_border</i>');
    empty();
    getSelectedValue();
    var userText = $("textarea").val();
    var queryUrl =
        "/api/nps?stateCode=" + userText;
    $.ajax({
        url: queryUrl,
        method: "GET",
    }).then(function (response) {
        myFunction();
        getWeatherInfo();
        for (let i = 0; i < response.data.length && i < 5; i++) {
            var campsite = response.data[i];
            var address = campsite.addresses


            campsite01 = response.data[0]
            campsite01Name = response.data[0].name

            campsite02Name = response.data[1].name

            campsite03Name = response.data[2].name

            campsite04Name = response.data[3].name

            campsite01Description = response.data[0].description

            campsite02Description = response.data[1].description

            campsite03Description = response.data[2].description

            campsite04Description = response.data[3].description


            // if (address && address.length > 0) {
            //     console.log("WHAT UP YO: ", campsite01AddressLineOne)
            //     $(".campsiteOneAddress").append(campsite01AddressLineOne)
            //     $(".campsiteTwoAddress").append(campsite02AddressLineOne)
            //     // $(".campsiteThreeAddress").append(campsite01AddressLineOne)
            // } else {
            //     console.log("Hey I am andrew")
            //     $(".campsiteOneAddress").append("No Data Available")
            //     $(".campsiteTwoAddress").append("No Data Available")
            //     // $(".campsiteThreeAddress").append("No Data Available")
            // }


            var descriptionEL = $("<div>");
            descriptionEL.text(campsite.description);
            // var address = campsite.addresses;
            // var newDiv = $("<div>");
            var campsiteName = $("<div>");
            campsiteName.text(campsite.name);
            // var campAddress = $("<div>");

            // newDiv.append(campsiteName);
            // newDiv.append(campAddress);
            // newDiv.append(descriptionEL);
            // $(".test").append(newDiv);

            // $(".campsiteDescription").append(campsite.description)
            // if (address && address.length > 0) {
            //     console.log(address[0].city);
            //     console.log(address[0].stateCode);
            //     console.log(address[0].postalCode);
            // campAddress.text(address[0].city);
            // $(".test").text(address[0].city);

            // } else {
            //     campAddress.text("Sorry! No Address Data Available");
            // }

        }

        $(".campsiteNameOne").append(campsite01Name);
        $(".campsiteNameTwo").append(campsite02Name);
        $(".campsiteNameThree").append(campsite03Name);
        $(".campsiteNameFour").append(campsite04Name);
        $(".campsiteDescriptionOne").append(campsite01Description);
        $(".campsiteDescriptionTwo").append(campsite02Description);
        $(".campsiteDescriptionThree").append(campsite03Description);
        $(".campsiteDescriptionFour").append(campsite04Description);
        favCheck();
    }
    );
});
var campsites = [
    { heart: "#favOnes", card: "#favOne", name: function () { return window.campsite01Name; }, description: function () { return campsite01Description; } },
    { heart: "#favTwos", card: "#favTwo", name: function () { return window.campsite02Name; }, description: function () { return campsite02Description; } },
    { heart: "#favThrees", card: "#favThree", name: function () { return window.campsite03Name; }, description: function () { return campsite03Description; } },
    { heart: "#favFours", card: "#favFour", name: function () { return window.campsite04Name; }, description: function () { return campsite04Description; } }
];

function getFavorites() {
    try {
        return JSON.parse(localStorage.getItem("favorites")) || [];
    } catch (e) {
        return [];
    }
}

function saveFavorites(favorites) {
    localStorage.setItem("favorites", JSON.stringify(favorites));
}

function isFavorite(name) {
    return getFavorites().some(function (fav) { return fav.name === name; });
}

function setHeart(selector, filled) {
    $(selector).html('<i class="material-icons">' + (filled ? "favorite" : "favorite_border") + '</i>');
}

function openFavorites() {
    if (!$("#favBtn").hasClass("active")) {
        $("#favBtn").trigger("click");
    }
}

function renderFavorites() {
    var body = $("#myFavorites .collapsible-body");
    var favorites = getFavorites();
    body.empty();
    if (favorites.length === 0) {
        body.append($("<p>").text("No favorites saved yet."));
        return;
    }
    favorites.forEach(function (fav) {
        var item = $("<div>").addClass("favorite-item");
        item.append($("<h5>").text(fav.name));
        item.append($("<p>").text(fav.description));
        body.append(item);
    });
}

function favCheck() {
    campsites.forEach(function (site) {
        setHeart(site.heart, isFavorite(site.name()));
    });
}

campsites.forEach(function (site) {
    $(site.card).on("click", function () {
        var name = site.name();
        if (name === undefined) {
            return;
        }
        var favorites = getFavorites();
        if (isFavorite(name)) {
            favorites = favorites.filter(function (fav) { return fav.name !== name; });
        } else {
            favorites.push({ name: name, description: site.description() });
            openFavorites();
        }
        saveFavorites(favorites);
        setHeart(site.heart, isFavorite(name));
        renderFavorites();
    });
});

renderFavorites();
