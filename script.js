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
        city = ["Honolulu", "Kailua", "Pearl City"];
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
        // var unixSunset = (response.sys.sunset);
        // var unixSunrise = (response.sys.sunrise);
        // var Sunrise = new Date(unixSunrise * 1000);
        // var sunset = new Date(unixSunset * 1000);
        var cityHigh = response.main.temp_max;
        var cityLow = response.main.temp_min
        var currentCity = response.name;
        names.push(currentCity);
        
        $(".cityHigh").append(currentCity + ": " + cityHigh.toFixed(0) + " " + "/" + " " + cityLow.toFixed(0) + " F " + "\n" + "<br>")
        
    })
}
};

function empty() {
    var campOneEl = $("#campOne");
    var campTwoEl = $("#campTwo");
    var campThreeEl =$("#campThree");
    var campFourEl =$("#campFour");
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
        $(".campsiteDescriptionOne").append(campsite01Description)
        $(".campsiteDescriptionTwo").append(campsite02Description)
        $(".campsiteDescriptionThree").append(campsite03Description)
        $(".campsiteDescriptionFour").append(campsite04Description)
       
    }
    );
});
    var favOne = $("#favOne");
    var favTwo = $("#favTwo");
    var favThree = $("#favThree");
    var favFour = $("#favFour");

    favOne.on("click", function() {
        $("#favOnes").html('<i class="material-icons">favorite</i>');
        if (localStorage.getItem("name") === null && localStorage.getItem("description") === null) {
            localStorage.setItem("description", campsite01Description);
            localStorage.setItem("name", campsite01Name);
        }else if (localStorage.getItem("name") != null && localStorage.getItem("name2") === null && localStorage.getItem("description") != null && localStorage.getItem("description2") === null && localStorage.getItem("name") != campsite01Name) {
            localStorage.setItem("description2", campsite01Description);
            localStorage.setItem("name2", campsite01Name);
        }else if (localStorage.getItem("name2") != null && localStorage.getItem("name3") === null && localStorage.getItem("description2") != null && localStorage.getItem("description3") === null && localStorage.getItem("name") != campsite01Name && localStorage.getItem("name2") != campsite01Name) {
            localStorage.setItem("description3", campsite01Description);
            localStorage.setItem("name3", campsite01Name);
        } else if (localStorage.getItem("name3") != null && localStorage.getItem("name4") === null && localStorage.getItem("description3") != null && localStorage.getItem("description4") === null && localStorage.getItem("name") != campsite01Name && localStorage.getItem("name2") != campsite01Name && localStorage.getItem("name3") != campsite01Name) {
            localStorage.setItem("description4", campsite01Description);
            localStorage.setItem("name4", campsite01Name);
        };
    
    });
    
    
    favTwo.on("click", function() {
        $("#favTwos").html('<i class="material-icons">favorite</i>');
        if (localStorage.getItem("name") === null && localStorage.getItem("description") === null) {
            localStorage.setItem("description", campsite02Description);
            localStorage.setItem("name", campsite02Name);
        }else if (localStorage.getItem("name") != null && localStorage.getItem("name2") === null && localStorage.getItem("description") != null && localStorage.getItem("description2") === null && localStorage.getItem("name") != campsite02Name ) {
            localStorage.setItem("description2", campsite02Description);
            localStorage.setItem("name2", campsite02Name);
        }else if (localStorage.getItem("name2") != null && localStorage.getItem("name3") === null && localStorage.getItem("description2") != null && localStorage.getItem("description3") === null && localStorage.getItem("name") != campsite02Name && localStorage.getItem("name2") != campsite02Name) {
            localStorage.setItem("description3", campsite02Description);
            localStorage.setItem("name3", campsite02Name);
        } else if (localStorage.getItem("name3") != null && localStorage.getItem("name4") === null && localStorage.getItem("description3") != null && localStorage.getItem("description4") === null && localStorage.getItem("name") != campsite02Name && localStorage.getItem("name2") != campsite02Name && localStorage.getItem("name3") != campsite02Name) {
            localStorage.setItem("description4", campsite02Description);
            localStorage.setItem("name4", campsite02Name);
        };
    
    });
    
    favThree.on("click", function() {
        $("#favThrees").html('<i class="material-icons">favorite</i>');
        if (localStorage.getItem("name") === null && localStorage.getItem("description") === null) {
            localStorage.setItem("description", campsite03Description);
            localStorage.setItem("name", campsite03Name);
        }else if (localStorage.getItem("name") != null && localStorage.getItem("name2") === null && localStorage.getItem("description") != null && localStorage.getItem("description2") === null && localStorage.getItem("name") != campsite03Name) {
            localStorage.setItem("description2", campsite03Description);
            localStorage.setItem("name2", campsite03Name);
        }else if (localStorage.getItem("name2") != null && localStorage.getItem("name3") === null && localStorage.getItem("description2") != null && localStorage.getItem("description3") === null && localStorage.getItem("name") != campsite03Name && localStorage.getItem("name2") != campsite03Name) {
            localStorage.setItem("description3", campsite03Description);
            localStorage.setItem("name3", campsite03Name);
        } else if (localStorage.getItem("name3") != null && localStorage.getItem("name4") === null && localStorage.getItem("description3") != null && localStorage.getItem("description4") === null && localStorage.getItem("name") != campsite03Name && localStorage.getItem("name2") != campsite03Name && localStorage.getItem("name3") != campsite03Name) {
            localStorage.setItem("description4", campsite03Description);
            localStorage.setItem("name4", campsite03Name);
        };
    
    });
    
    favFour.on("click", function() {
        $("#favFours").html('<i class="material-icons">favorite</i>');
        if (localStorage.getItem("name") === null && localStorage.getItem("description") === null) {
            localStorage.setItem("description", campsite04Description);
            localStorage.setItem("name", campsite04Name);
        }else if (localStorage.getItem("name") != null && localStorage.getItem("name2") === null && localStorage.getItem("description") != null && localStorage.getItem("description2") === null && localStorage.getItem("name") != campsite04Name) {
            localStorage.setItem("description2", campsite04Description);
            localStorage.setItem("name2", campsite04Name);
        }else if (localStorage.getItem("name2") != null && localStorage.getItem("name3") === null && localStorage.getItem("description2") != null && localStorage.getItem("description3") === null && localStorage.getItem("name") != campsite04Name && localStorage.getItem("name2") != campsite04Name) {
            localStorage.setItem("description3", campsite04Description);
            localStorage.setItem("name3", campsite04Name);
        } else if (localStorage.getItem("name3") != null && localStorage.getItem("name4") === null && localStorage.getItem("description3") != null && localStorage.getItem("description4") === null && localStorage.getItem("name") != campsite04Name && localStorage.getItem("name2") != campsite04Name && localStorage.getItem("name3") != campsite04Name) {
            localStorage.setItem("description4", campsite04Description);
            localStorage.setItem("name4", campsite04Name);
        };
    
    });

    var favBtn = $("#favBtn");
favBtn.on("click", function() {
    if (localStorage.getItem("name") === null) {
        return;
    } else if(localStorage.getItem("name") != null && localStorage.getItem("name2") === null) {
        var campOneName = $("#campOne");
            campOneName.empty();
            campOneName.text(localStorage.getItem("name"));
        var campOneDescription = $("#desOne");
            campOneDescription.empty();
            campOneDescription.text(localStorage.getItem("description"));
        $("#favOnes").html('<i class="material-icons">favorite</i>');
    } else if (localStorage.getItem("name2") != null && localStorage.getItem("name3") === null) {
        var campOneName = $("#campOne");
            campOneName.empty();
            campOneName.text(localStorage.getItem("name"));
        var campTwoName = $("#campTwo");
            campTwoName.empty();
            campTwoName.text(localStorage.getItem("name2"));
        var campOneDescription = $("#desOne");
            campOneDescription.empty();
            campOneDescription.text(localStorage.getItem("description"));
        var campTwoDescription = $("#desTwo");
            campTwoDescription.empty();
            campTwoDescription.text(localStorage.getItem("description2"));
        $("#favOnes").html('<i class="material-icons">favorite</i>');
        $("#favTwos").html('<i class="material-icons">favorite</i>');
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
        var campOneDescription = $("#desOne");
            campOneDescription.empty();
            campOneDescription.text(localStorage.getItem("description"));
        var campTwoDescription = $("#desTwo");
            campTwoDescription.empty();
            campTwoDescription.text(localStorage.getItem("description2"));
        var campThreeDescription = $("#desThree");
            campThreeDescription.empty();
            campThreeDescription.text(localStorage.getItem("description3"));
        $("#favOnes").html('<i class="material-icons">favorite</i>');
        $("#favTwos").html('<i class="material-icons">favorite</i>');
        $("#favThrees").html('<i class="material-icons">favorite</i>');
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
        var campOneDescription = $("#desOne");
            campOneDescription.empty();
            campOneDescription.text(localStorage.getItem("description"));
        var campTwoDescription = $("#desTwo");
            campTwoDescription.empty();
            campTwoDescription.text(localStorage.getItem("description2"));
        var campThreeDescription = $("#desThree");
            campThreeDescription.empty();
            campThreeDescription.text(localStorage.getItem("description3"));
        var campFourDescription = $("#desFour");
            campFourDescription.empty();
            campFourDescription.text(localStorage.getItem("description4"));
        $("#favOnes").html('<i class="material-icons">favorite</i>');
        $("#favTwos").html('<i class="material-icons">favorite</i>');
        $("#favThrees").html('<i class="material-icons">favorite</i>');
        $("#favFours").html('<i class="material-icons">favorite</i>');
    };

});


