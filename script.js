var selection = $("select");
var result = $("#result");

function getSelectedValue() {
    var selectedValue = $("#list").val();
    result.text(selectedValue);
};

function myFunction() {
    var element = document.getElementById("hidden");
    element.classList.remove("hide");
    var elementOne = document.getElementById("searcherOne");
    // elementOne.classList.add("hide");  WHY DO I HAVE TO HIDE THIS FOR IT TO WORK. Searche
    var elementTwo = document.getElementById("searcherTwo");
    elementTwo.classList.add("hide");
  }


$("#searchState").on("click", function () {
    var userText = $("textarea").val();
    var queryUrl =
        "https://developer.nps.gov/api/v1/campgrounds?stateCode=" + userText + "&api_key=PsnhlhXZuoOG7d4tp1e2PSphbmVmzt0nNtN4VgL8";
    $.ajax({
        url: queryUrl,
        method: "GET",
    }).then(function (response) {
        myFunction();
        for (let i = 0; i < response.data.length && i < 5; i++) {
            var campsite = response.data[i];
            campsite01 = response.data[0]
            campsite01Name = response.data[0].name
            console.log("Hey I am 01 Name: ", campsite01Name)
            campsite02Name = response.data[1].name
            console.log("Hey I am 02 Name: ", campsite02Name)
            campsite03Name = response.data[2].name
            console.log("Hey I am 03 Name: ", campsite03Name)
            campsite04Name = response.data[3].name
            console.log("Hey I am 04 Name: ", campsite04Name)
            campsite01Description = response.data[0].description
            console.log("Hey I am number one description: ", campsite01Description)
            campsite02Description = response.data[1].description
            console.log("Hey I am number two description: ", campsite02Description)
            campsite03Description = response.data[2].description
            console.log("Hey I am number three description: ", campsite03Description)
            campsite04Description = response.data[3].description
            console.log("Hey I am number four description: ", campsite04Description)
  

            var campsite01AddressLineOne = response.data[0].addresses[0].line1
            var campsite02AddressLineOne = response.data[1].addresses[0].line1
            // var campsite03AddressLineOne = response.data[2].addresses[0].line1

            console.log("Hey I am number one ADDRESS LINE ONE", campsite01AddressLineOne)


            // campsite02 = response.data[1]
            // campsite03 = response.data[2]
            // campsite04 = response.data[3]
            var nameEl = $("<div>");
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
            // $(".test").append(newDiv);
            // $(".campsiteNameOne").append(campsite01Name);
            // $(".campsiteNameTwo").append(campsite02Name);
            // $(".campsiteNameThree").append(campsite03Name);
            // $(".campsiteNameFour").append(campsite04Name);

            $(".campsiteDescription").append(campsite.description)
            if (address && address.length > 0) {
                console.log(address[0].city);
                console.log(address[0].stateCode);
                console.log(address[0].postalCode);
                campAddress.text(address[0].city);
                // $(".test").text(address[0].city);

            } else {
                campAddress.text("Sorry! No Address Data Available");
            }
   
        }

        $(".campsiteNameOne").append(campsite01Name);
        $(".campsiteNameTwo").append(campsite02Name);
        $(".campsiteNameThree").append(campsite03Name);
        $(".campsiteNameFour").append(campsite04Name);
        $(".campsiteDescriptionOne").append(campsite01Description)
        $(".campsiteDescriptionTwo").append(campsite02Description)
        $(".campsiteDescriptionThree").append(campsite03Description)
        $(".campsiteDescriptionFour").append(campsite04Description)
        $(".campsiteOneAddress").append(campsite01AddressLineOne)
        $(".campsiteTwoAddress").append(campsite02AddressLineOne)
        $(".campsiteThreeAddress").append(campsite01AddressLineOne)
        // $(".weatherCity").append(campsite01Name)
        // $(".campsiteTwoAddress").append(campsite01AddressLineOne)
        // $(".campsiteThreeAddress").append(campsite03AddressLineOne)
        // $(".campsiteFourAddress").append(campsite04AddressLineOne)
        
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


// // function getWeatherInfo() {
// //     var city = [];
// //     if ($("#result"=== "AZ")) {
// //         city = ["phoenix", "tucson", "flagstaff"];
        
// //     }if ($("#result"=== "CA")) {
// //         city = ["San Diego", "San Jose", "San Francisco"];
// //     }if ($("#result"=== "AK")) {
// //         city = ["Anchorage", "Juneau", "Fairbanks"];
// //     }if ($("#result"=== "AL")) {
// //         city = ["Birmingham", "Huntsville", "Montgomery"];
// //     }if ($("#result"=== "CO")) {
// //         city = ["Denver", "Colorado Springs", "Aurora"];
// //     }if ($("#result"=== "CT")) {
// //         city = ["Bridgeport", "New Haven", "Stamford"];
// //     }if ($("#result"=== "DE")) {
// //         city = ["Wilmington", "Dover", "Newark"];
// //     }if ($("#result"=== "DC")) {
// //         city = ["Washington,D.C."];
// //     }if ($("#result"=== "FL")) {
// //         city = ["Jacksonville", "Miami", "Tampa"];
// //     }if ($("#result"=== "GA")) {
// //         city = ["Atlanta", "Augusta", "Columbus"];
// //     }if ($("#result"=== "HI")) {
// //         city = ["Honolulu", "East Honolulu", "Pearl City"];
// //     }if ($("#result"=== "ID")) {
// //         city = ["Boise", "Meridan", "Nampa"];
// //     }if ($("#result"=== "IL")) {
// //         city = ["Chicago" , "Aurora", "Naperville"];
// //     }if ($("#result"=== "IN")) {
// //         city = ["Indianapolis", "Fort Wayne", "Evansville"];
// //     }if ($("#result"=== "IA")) {
// //         city = ["Des Moines", "Cedar Rapids", "Davenport"];
// //     }if ($("#result"=== "KS")) {
// //         city = ["Wichita", "Overland Park", "Kansas City"];
// //     }if ($("#result"=== "KY")) {
// //         city = ["Louisville", "Lexington", "Bowling Green"];
// //     }if ($("#result"=== "LA")) {
// //         city = ["New Orleans", "Baton Rouge", "Shreveport"];
// //     }if ($("#result"=== "ME")) {
// //         city = ["Portland", "Lewiston", "Bangor"];
// //     }if ($("#result"=== "MD")) {
// //         city = ["Baltimore", "Columbia", "Germantown"];
// //     }if ($("#result"=== "MA")) {
// //         city = ["Boston", "Worcester", "Springfield"];
// //     }if ($("#result"=== "MI")) {
// //         city = ["Detroit", "Grand Rapids", "Warren"]
// //     }if ($("#result"=== "MN")) {
// //         city = ["Minneapolis", "Saint Paul", "Rochester"];
// //     }if ($("#result"=== "MS")) {
// //         city = ["Jackson", "Gulfport", "Southaven"];
// //     }if ($("#result"=== "MO")) {
// //         city = ["Kansas City", "Saint Louis", "Springfield"];
// //     }if ($("#result"=== "MT")) {
// //         city = ["Billings", "Bozeman", "Mizzoula"];
// //     }if ($("#result"=== "NE")) {
// //         city = ["Omaha", "Lincoln", "Bellevue"];
// //     }if ($("#result"=== "NV")) {
// //         city = ["Las Vegas", "Henderson", "Reno"];
// //     }if ($("#result"=== "NY")) {
// //         city = ["New York City", "Buffalo", "Rochester"];
// //     }if ($("#result"=== "NC")) {
// //         city = ["Charlotte", "Raleigh", "Greensboro"];
// //     }if ($("#result"=== "OH")) {
// //         city = ["Columbus", "Cleveland", "Cincinnati"];
// //     }if ($("#result"=== "OK")) {
// //         city = ["Oklahoma City", "Tulsa", "Norman"];
// //     }if ($("#result"=== "OR")) {
// //         city = ["Portland", "Salem", "Eugene"];
// //     }if ($("#result"=== "PA")) {
// //         city = ["Philadelphia", "Pittsburgh", "Allentown"];
// //     }if ($("#result"=== "RI")) {
// //         city = ["Providence", "Cranston", "Warick"];
// //     }if ($("#result"=== "SC")) {
// //         city = ["Charleston", "Columbia", "North Charleston"];
// //     }if ($("#result"=== "SD")) {
// //         city = ["Sioux Falls", "Rapid City", "Aberdeen"];
// //     }if ($("#result"=== "TN")) {
// //         city = ["Nashville", "Memphis", "Knoxville"];
// //     }if ($("#result"=== "TX")) {
// //         city = ["Houston", "Austin", "Dallas"];
// //     }if ($("#result"=== "UT")) {
// //         city = ["Salt Lake City", "West Valley City", "Provo"];
// //     }if ($("#result"=== "VT")) {
// //         city = ["Burlington", "Rutland", "Montpelier"];
// //     }if ($("#result"=== "VA")) {
// //         city = ["Virginia Beach", "Norfolk", "Chesapeake"];
// //     }if ($("#result"=== "WA")) {
// //         city = ["Seattle", "Spokane", "Tacoma"];
// //     }if ($("#result"=== "WV")) {
// //         city = ["Charleston", "Huntington", "Morgantown"];
// //     }if ($("#result"=== "WI")) {
// //         city = ["Milwaukee", "Madison", "Green Bay"];
// //     }if ($("#result"=== "WY")) {
// //         city = ["Cheyenne", "Casper", "Laramie"];
// //     }
// //     for (let i = 0; i < city.length; i++) {
        
// //         cities = city[i];
    
// //     var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cities + "&units=imperial&appid=a919f8d6ebff3b8cdcbc03c1604cfc21";

// //     $.ajax({
// //         url: queryURL,
// //         method: "GET"
// //     }).then(function (response) {
// //            console.log(response);
// //            console.log(response.name);
// //         var unixSunset = (response.sys.sunset);
// //         var unixSunrise = (response.sys.sunrise);
// //         var Sunrise = new Date(unixSunrise * 1000);
// //         var sunset = new Date(unixSunset * 1000);
// //         console.log(Sunrise);
// //         console.log(sunset);
// //         console.log(response.main.temp);
// //         console.log(response.weather[0].description);

// //     })
// // }
// // };


// // $(".search").on("click", function () {
// //     getWeatherInfo();
// // });