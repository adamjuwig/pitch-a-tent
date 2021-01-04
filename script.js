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
  
};

function getWeatherInfo() {
    var selectedValue = $("#list").val();
    var city = [];
    if ((selectedValue==="AZ")) {
        city = ["phoenix", "tucson", "flagstaff"];
    }if ((selectedValue==="CA")) {
        city = ["San Diego", "San Jose", "San Francisco"];
    }if ((selectedValue=== "AK")) {
        city = ["Anchorage", "Juneau", "Fairbanks"];
    }if ((selectedValue=== "AR")) {
        city = ["Little Rock", "Hot Springs", "Fayetteville"];
    }if ((selectedValue=== "AL")) {
        city = ["Birmingham", "Huntsville", "Montgomery"];
    }if ((selectedValue=== "CO")) {
        city = ["Denver", "Colorado Springs", "Aurora"];
    }if ((selectedValue=== "CT")) {
        city = ["Bridgeport", "New Haven", "Stamford"];
    }if ((selectedValue=== "DE")) {
        city = ["Wilmington", "Dover", "Newark"];
    }if ((selectedValue=== "DC")) {
        city = ["Washington,D.C."];
    }if ((selectedValue=== "FL")) {
        city = ["Jacksonville", "Miami", "Tampa"];
    }if ((selectedValue=== "GA")) {
        city = ["Atlanta", "Augusta", "Columbus"];
    }if ((selectedValue=== "HI")) {
        city = ["Honolulu", "East Honolulu", "Pearl City"];
    }if ((selectedValue=== "ID")) {
        city = ["Boise", "Meridan", "Nampa"];
    }if ((selectedValue=== "IL")) {
        city = ["Chicago" , "Aurora", "Naperville"];
    }if ((selectedValue=== "IN")) {
        city = ["Indianapolis", "Fort Wayne", "Evansville"];
    }if ((selectedValue=== "IA")) {
        city = ["Des Moines", "Cedar Rapids", "Davenport"];
    }if ((selectedValue=== "KS")) {
        city = ["Wichita", "Overland Park", "Kansas City"];
    }if ((selectedValue=== "KY")) {
        city = ["Louisville", "Lexington", "Bowling Green"];
    }if ((selectedValue=== "LA")) {
        city = ["New Orleans", "Baton Rouge", "Shreveport"];
    }if ((selectedValue=== "ME")) {
        city = ["Portland", "Lewiston", "Bangor"];
    }if ((selectedValue=== "MD")) {
        city = ["Baltimore", "Columbia", "Germantown"];
    }if ((selectedValue=== "MA")) {
        city = ["Boston", "Worcester", "Springfield"];
    }if ((selectedValue=== "MI")) {
        city = ["Detroit", "Grand Rapids", "Warren"]
    }if ((selectedValue=== "MN")) {
        city = ["Minneapolis", "Saint Paul", "Rochester"];
    }if ((selectedValue=== "MS")) {
        city = ["Jackson", "Gulfport", "Southaven"];
    }if ((selectedValue=== "MO")) {
        city = ["Kansas City", "Saint Louis", "Springfield"];
    }if ((selectedValue=== "MT")) {
        city = ["Billings", "Bozeman", "Mizzoula"];
    }if ((selectedValue=== "NE")) {
        city = ["Omaha", "Lincoln", "Bellevue"];
    }if ((selectedValue=== "NV")) {
        city = ["Las Vegas", "Henderson", "Reno"];
    }if ((selectedValue=== "NY")) {
        city = ["New York City", "Buffalo", "Rochester"];
    }if ((selectedValue=== "NC")) {
        city = ["Charlotte", "Raleigh", "Greensboro"];
    }if ((selectedValue=== "OH")) {
        city = ["Columbus", "Cleveland", "Cincinnati"];
    }if ((selectedValue=== "OK")) {
        city = ["Oklahoma City", "Tulsa", "Norman"];
    }if ((selectedValue=== "OR")) {
        city = ["Portland", "Salem", "Eugene"];
    }if ((selectedValue=== "PA")) {
        city = ["Philadelphia", "Pittsburgh", "Allentown"];
    }if ((selectedValue=== "RI")) {
        city = ["Providence", "Cranston", "Warick"];
    }if ((selectedValue=== "SC")) {
        city = ["Charleston", "Columbia", "North Charleston"];
    }if ((selectedValue=== "SD")) {
        city = ["Sioux Falls", "Rapid City", "Aberdeen"];
    }if ((selectedValue=== "TN")) {
        city = ["Nashville", "Memphis", "Knoxville"];
    }if ((selectedValue=== "TX")) {
        city = ["Houston", "Austin", "Dallas"];
    }if ((selectedValue=== "UT")) {
        city = ["Salt Lake City", "West Valley City", "Provo"];
    }if ((selectedValue=== "VT")) {
        city = ["Burlington", "Rutland", "Montpelier"];
    }if ((selectedValue=== "VA")) {
        city = ["Virginia Beach", "Norfolk", "Chesapeake"];
    }if ((selectedValue=== "WA")) {
        city = ["Seattle", "Spokane", "Tacoma"];
    }if ((selectedValue=== "WV")) {
        city = ["Charleston", "Huntington", "Morgantown"];
    }if ((selectedValue=== "WI")) {
        city = ["Milwaukee", "Madison", "Green Bay"];
    }if ((selectedValue === "WY")) {
        city = ["Cheyenne", "Casper", "Laramie"];
    }

    for (let i = 0; i < city.length; i++) {
        
        cities = city[i];
    
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cities + "&units=imperial&appid=a919f8d6ebff3b8cdcbc03c1604cfc21";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
           console.log(response);
           console.log(response.name);
        var unixSunset = (response.sys.sunset);
        var unixSunrise = (response.sys.sunrise);
        var Sunrise = new Date(unixSunrise * 1000);
        var sunset = new Date(unixSunset * 1000);
        var selectedValue = $("#list").val();
       
        console.log(Sunrise);
        console.log(sunset);
       
        var cityHigh = response.main.temp_max
       
        console.log(response.main.temp_max);
        console.log("Hey I should print the same number as above: ", cityHigh)
        console.log(response.weather[0].description);
        console.log("Id of result: ", selectedValue)
        
        $(".cityOneHigh").append(cityHigh)
        // $(".cityTwoHigh").append(cityOneMainTemp)
        // $(".cityThreeHigh").append(cityOneMainTemp)
    })
}
};



$("#searchState").on("click", function () {
    var userText = $("textarea").val();
    var queryUrl =
        "https://developer.nps.gov/api/v1/campgrounds?stateCode=" + userText + "&api_key=PsnhlhXZuoOG7d4tp1e2PSphbmVmzt0nNtN4VgL8";
    $.ajax({
        url: queryUrl,
        method: "GET",
    }).then(function (response) {
        myFunction();
        getWeatherInfo();
        for (let i = 0; i < response.data.length && i < 5; i++) {
            var campsite = response.data[i];
            var address = campsite.addresses
            // var campsite01AddressLineOne = response.data[0].addresses[0].line1
            // var campsite02AddressLineOne = response.data[1].addresses[0].line1
            console.log("Hey I am response.data[i]: ", campsite)
            campsite01 = response.data[0]
            campsite01Name = response.data[0].name
            console.log("01 Name: ", campsite01Name)
            campsite02Name = response.data[1].name
            console.log("02 Name: ", campsite02Name)
            campsite03Name = response.data[2].name
            console.log("03 Name: ", campsite03Name)
            campsite04Name = response.data[3].name
            console.log("04 Name: ", campsite04Name)
            campsite01Description = response.data[0].description
            console.log("One description: ", campsite01Description)
            campsite02Description = response.data[1].description
            console.log("Two description: ", campsite02Description)
            campsite03Description = response.data[2].description
            console.log("Three description: ", campsite03Description)
            campsite04Description = response.data[3].description
            console.log("Four description: ", campsite04Description)
            
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
  

            // var campsite01AddressLineOne = response.data[0].addresses[0].line1
            // var campsite02AddressLineOne = response.data[1].addresses[0].line1
            
            // var campsite03AddressLineOne = response.data[2].addresses[0].line1

            // console.log("Hey I am number one ADDRESS LINE ONE", campsite01AddressLineOne)

            // var nameEl = $("<div>");
            
            var descriptionEL = $("<div>");
            descriptionEL.text(campsite.description);
            var address = campsite.addresses;
            var newDiv = $("<div>");
            var campsiteName = $("<div>");
            campsiteName.text(campsite.name);
            var campAddress = $("<div>");
           
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
        $(".campsiteDescriptionOne").append(campsite01Description)
        $(".campsiteDescriptionTwo").append(campsite02Description)
        $(".campsiteDescriptionThree").append(campsite03Description)
        $(".campsiteDescriptionFour").append(campsite04Description)
        // $(".campsiteOneAddress").append(campsite01AddressLineOne)
        // $(".campsiteTwoAddress").append(campsite02AddressLineOne)
        // $(".campsiteThreeAddress").append(campsite01AddressLineOne)
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
        var favOne = $("#favOne");
        var favTwo = $("#favTwo");
        var favThree = $("#favThree");
        var favFour = $("#favFour");

favOne.on("click", function() {
    if (localStorage.getItem("name") === null) {
        localStorage.setItem("name", campsite01Name);
    }else if (localStorage.getItem("name") != null && localStorage.getItem("name2") === null ) {
        localStorage.setItem("name2", campsite01Name);
    }else if (localStorage.getItem("name2") != null && localStorage.getItem("name3") === null) {
        localStorage.setItem("name3", campsite01Name);
    } else if (localStorage.getItem("name3") != null) {
        localStorage.setItem("name4", campsite01Name);
    };

});

favTwo.on("click", function() {
    if (localStorage.getItem("name") === null) {
        localStorage.setItem("name", campsite02Name);
    }else if (localStorage.getItem("name") != null && localStorage.getItem("name2") === null ) {
        localStorage.setItem("name2", campsite02Name);
    }else if (localStorage.getItem("name2") != null && localStorage.getItem("name3") === null) {
        localStorage.setItem("name3", campsite02Name);
    } else if (localStorage.getItem("name3") != null) {
        localStorage.setItem("name4", campsite02Name);
    };

});

favThree.on("click", function() {
    if (localStorage.getItem("name") === null) {
        localStorage.setItem("name", campsite03Name);
    }else if (localStorage.getItem("name") != null && localStorage.getItem("name2") === null ) {
        localStorage.setItem("name2", campsite03Name);
    }else if (localStorage.getItem("name2") != null && localStorage.getItem("name3") === null) {
        localStorage.setItem("name3", campsite03Name);
    } else if (localStorage.getItem("name3") != null) {
        localStorage.setItem("name4", campsite04Name);
    };

});

favFour.on("click", function() {
    if (localStorage.getItem("name") === null) {
        localStorage.setItem("name", campsite04Name);
    }else if (localStorage.getItem("name") != null && localStorage.getItem("name2") === null ) {
        localStorage.setItem("name2", campsite04Name);
    }else if (localStorage.getItem("name2") != null && localStorage.getItem("name3") === null) {
        localStorage.setItem("name3", campsite04Name);
    } else if (localStorage.getItem("name3") != null) {
        localStorage.setItem("name4", campsite04Name);
    };

});


var favBtn = $("#favBtn");
favBtn.on("click", function() {
    if (localStorage.getItem("name") === null) {
        return;
    } else if(localStorage.getItem("name") != null && localStorage.getItem("name2") === null) {
        console.log("hey");
        var campOneName = $("#campOne");
            campOneName.empty();
            campOneName.text(localStorage.getItem("name"));
    } else if (localStorage.getItem("name2") != null && localStorage.getItem("name3") === null) {
        var campOneName = $("#campOne");
            campOneName.empty();
            campOneName.text(localStorage.getItem("name"));
        var campTwoName = $("#campTwo");
            campTwoName.empty();
            campTwoName.text(localStorage.getItem("name2"));
    } else if (localStorage.getItem("name3") != null && localStorage.getItem("name4") === null) {
        var campOneName = $("#campOne");
            campOneName.empty();
            campOneName.text(localStorage.getItem("name"));
        var campTwoName = $("#campTwo");
            campTwoName.empty();
            campTwoName.text(localStorage.getItem("name2"));
        var campThreeName = $("#campThree");
            campThreeName.empty();
            campThreeName.text(localStorage.getItem("name3"));
    }else if (localStorage.getItem("name4") != null) {
        var campOneName = $("#campOne");
            campOneName.empty();
            campOneName.text(localStorage.getItem("name"));
        var campTwoName = $("#campTwo");
            campTwoName.empty();
            campTwoName.text(localStorage.getItem("name2"));
        var campThreeName = $("#campThree");
            campThreeName.empty();
            campThreeName.text(localStorage.getItem("name3"));
        var campFourName = $("#campFour");
            campFourName.empty();
            campFourName.text(localStorage.getItem("name4"));
    };

});
    }
    );
});

// var favOne = $("#favOne");

// favOne.on("click", function() {
//     var campOneName = $("#campOne").val();
// console.log(campOneName);
// localStorage.setItem("name", "hey");
// });

